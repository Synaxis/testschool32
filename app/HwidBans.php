<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class HwidBans extends Model
{
    protected $table = 'hwid_bans';

    protected $fillable = ['hero_id', 'counter', 'hwid', 'date', 'until', 'reason'];
}