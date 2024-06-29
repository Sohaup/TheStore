<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Admen extends Model
{
    use HasFactory;
    protected $fillables = ['user_id'];
    protected $table = 'admens';
    public $timestamps = false;
    public function user() {
        return $this->belongsTo(User::class);
    }
}
