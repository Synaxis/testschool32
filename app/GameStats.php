<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class GameStats extends Model
{
    //for new fesl
    protected $fillable = ['user_id', 'heroID', 'hero_stats'];
    //old and bad
    //protected $fillable = ['user_id', 'heroID', 'statsKey', 'statsValue'];
}
