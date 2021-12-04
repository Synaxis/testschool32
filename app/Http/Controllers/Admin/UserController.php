<?php namespace App\Http\Controllers\Admin;

use App\Http\Requests;
use App\Http\Controllers\Controller;

use function App\logAction;
use Illuminate\Http\Request;
use App\Permission;
use App\Role;
use App\GameHeroes;
use App\HwidBans;
use App\User;
use Illuminate\Support\Facades\Input;
use Illuminate\Support\Facades\DB;


class UserController extends Controller {

    public function dashboard()
    {
       if (Input::has('user_search'))
        {
            $words = explode(' ', $query =  Input::get('user_search'));
            $query = \DB::table('users');
            $queries = ['username' => true, 'email' => true];
            foreach ($queries as $group => $first)
            {
                foreach ($words as $word)
                {
                    if ($first)
                    {
                        $query->orWhere($group, 'like', "%$word%");
                        $first = false;
                    }
                    else
                        $query->where($group, 'like', "%$word%");
                }
            }
            $searchResults = $query->get();
        }
        if (Input::get('role'))
            $searchResults = User::whereIn('id', Role::find(Input::get('role'))->users()->pluck('id'))->get();

        return view('admin.dashboard', compact('searchResults'));
    }

    #region manage
    public function manage()
    {
        if (Input::has('q'))
        {
            $split = explode(':', $query =  Input::get('q'));
            if(count($split)!=2)
                return redirect()->back()->with('error', 'Wrong request formatting');
            $words = explode(' ', $split[1]);
            switch($split[0]){
                case 'user':
                    $query = \DB::table('users');
                    $queries = ['username', 'email'];
                    $first=true;
                    foreach ($queries as $group)
                    {
                        foreach ($words as $word)
                        {
                            if ($first)
                            {
                                $query->where($group, 'like', "%$word%");
                                $first = false;
                            }
                            else
                                $query->orWhere($group, 'like', "%$word%");
                        }
                    }
                    $searchResults = $query->paginate(15);
                    break;
                case 'hero':
                    $query = \DB::table('game_heroes');
                    $first=true;
                    foreach ($words as $word)
                    {
                        if ($first)
                        {
                            $query->where('heroName', 'like', "%$word%");
                            $first = false;
                        }
                        else
                            $query->orWhere('heroName', 'like', "%$word%");
                    }
                    
                    $searchResults = $query->get();
                    $queryUser = \DB::table('users');
                    $first=true;
                    foreach ($searchResults as $hero)
                    {
                        if ($first)
                        {
                            $queryUser->where('id', 'like', "$hero->user_id");
                            $first = false;
                        }
                        else
                            $queryUser->orWhere('id', 'like', "$hero->user_id");
                    }
                    $searchResults = $queryUser->paginate(15);
                    break;
                case 'hwid':
                    $query = \DB::table('users');
                    $first=true;
                    foreach ($words as $word)
                    {
                        if ($first)
                        {
                            $query->where('hwid', 'like', "$word");
                            $first = false;
                        }
                        else
                            $query->orWhere('hwid', 'like', "$word");
                    }
                    $searchResults = $query->paginate(15);
                    break;
                case 'ip':
                    $query = \DB::table('users');
                    $first=true;
                    foreach ($words as $word)
                    {
                        if ($first)
                        {
                            $query->where('ip_address', 'like', "$word");
                            $first = false;
                        }
                        else
                            $query->orWhere('ip_address', 'like', "$word");
                    }
                    $searchResults = $query->paginate(15);
                    break;
                default:
                    return redirect()->route('admin.user.manage')->with('error', 'Unknown search case');
            }
        }
        $searchRequest = "q=" . Input::get('q');
        if (Input::get('role')){
            $searchResults = User::whereIn('id', Role::find(Input::get('role'))->users()->pluck('id'))->paginate(30);
            $searchRequest = "role=" . Input::get('role');
        }
        return view('admin.users.management.list', compact('searchResults', 'searchRequest'));
    }

    public function details(User $user)
    {
        $roles = $user->roles()->pluck('id', 'title')->all();
        $user = User::with('comments', 'comments.post')->find($user->id);
        $heroes = GameHeroes::where('user_id', $user->id)->get();
        $applicableRoles = Role::whereNotIn('id', $roles)->pluck('title', 'id')->all();
        return view('admin.users.management.details', compact('user', 'roles', 'applicableRoles', 'payments', 'discord', 'heroes'));
    }
    #endregion
    #region roles
    public function roles()
    {
        $roles = Role::all();
        foreach ($roles as $role)
        {
            unset($slugs);
            $permissions = array_pluck($role->permissions->toArray(), 'slug');
            foreach($permissions as $perm)
            {
                $splitted = explode('.', $perm);
                $slugs[$splitted[0]][] = $splitted[1];
            }
            $role->slugs = isset($slugs) ? $slugs : [];
        }
        return view('admin.users.roles.list', compact('roles'));
    }

    public function addRole()
    {
        $permissions = [];
        foreach(Permission::all() as $permission)
        {
            $parts = explode('.',$permission->slug);
            $permissions[ucfirst($parts[0])][] = ['access'=> ucfirst($parts[1]), 'description'=>$permission->description];

        }

        return view('admin.users.roles.add', compact('permissions'));

    }

    public function doAddRole(User $user)
    {
        $validation = \Validator::make(Input::all(), [
            'name' => 'required'
        ]);
        if ($validation->fails())
            return \Redirect::to(\URL::previous())->withErrors($validation)->withInput();
        $permissions = is_null(Input::get('permissions')) ? [] : Permission::whereIn('slug', array_keys(Input::get('permissions')))->pluck('id')->all();
        $role = new Role;
        $role->title = ucfirst(Input::get('name'));
        $role->slug = strtolower(Input::get('name'));
        $role->save();
        $role->permissions()->sync($permissions);

        logAction(request()->route()->action['can'], 'Role ' . Input::get('name') . ' was added.', request()->route()->action);

        return \Redirect::route('admin.user.roles')->withSuccess('The role has been created.');
    }
    #endregion

    #region assignRoles


    public function assignRole(User $user)
    {
        $user->roles()->attach(Input::get('role'));

        logAction(request()->route()->action['can'], Input::get('role') . ' was assigned to ' . $user->username, request()->route()->action);

        return redirect()->back();
    }

    public function removeRole(User $user, $roleId)
    {
        $role = Role::find($roleId)->title;
        $user->roles()->detach($roleId);
        logAction(request()->route()->action['can'], $role . ' was removed from ' . Input::get('name'), request()->route()->action);
        return redirect()->back();
    }

    #endregion

    public function banUser(User $user, $type, $expireAt)
    {
        $role = \Trinity\Role::whereSlug($type == "ban" ? "banned" : "restricted")->first()->id;
        $user->roles()->sync([$role => ['expire_at' => $expireAt . " 01:00:00"]]);
        \Trinity\Task::create([
            'type' => 'grantPrivilege',
            'run_at' => $expireAt . " 01:00:00",
            'task' => ['to' => ['user' => $user->id, 'privilege' => 1]],
            'state' => 'awaiting',
            'issued_by' => auth()->id()
        ]);
        return redirect()->back()->withSuccess('The user has been ' . ($type == "ban" ? "banned" : "restricted") . ".");
    }

    public function banHwid($userid, $heroid, $reason, $time){
        $heroid = Input::get('heroid');
        $reason = Input::get('reason');
        $time = Input::get('time');
        $hero = GameHeroes::where('id', $heroid)->first();
        if(empty($hero))
            return redirect()->back()->with('error', 'Hero not found.');
        $user = User::where('id', $hero->user_id)->first();
        if(empty($user))
            return redirect()->back()->with('error', 'User not found.');
        if($userid!=$user->id)
            return redirect()->back()->with('error', 'User ids missmatch.');
        if(HwidBans::where('hwid', $user->hwid)->exists()){
            //HwidBans::where('hwid', $hwid)->update(['statsValue' => $value]);
            return redirect()->back()->with('error', 'HWID is banned already.');
        }else{
            $id = DB::table('hwid_bans')->insertGetId(['hero_id' => $heroid, 'counter' => 1, 'hwid' => $user->hwid, 'until' => date('Y-m-d G:i:s',time()+$time*60*60), 'reason' => $reason]);
        }
        logAction(request()->route()->action['can'], "HWID $user->hwid was banned for $time hours with reason $reason.", request()->route()->action);
        return redirect()->back()->with('success', "HWID $user->hwid was banned for $time hours.");
    }
}