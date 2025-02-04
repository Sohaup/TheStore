<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Product extends Model
{
    use HasFactory;
    protected $fillables = ['name','price','category','item','from','img'];
    protected $table = 'products';
    public $timestamps = false;    
}
