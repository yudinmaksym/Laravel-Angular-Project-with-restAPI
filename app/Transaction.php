<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Notifications\Notifiable;
use Illuminate\Foundation\Auth\Transaction as Authenticatable;

class Transaction extends Model
{	
	use Notifiable;
    protected $fillable = ['user_id', 'amount', 'offset', 'limit'];
}
