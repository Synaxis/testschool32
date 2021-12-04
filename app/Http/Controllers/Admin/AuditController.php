<?php

namespace App\Http\Controllers\Admin;

use App\Audit;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class AuditController extends Controller
{
    public function lists()
    {
        $audits = Audit::with('user')->orderBy('created_at', 'desc')->get();
        return view('admin.audits.lists', compact('audits'));
    }
}
