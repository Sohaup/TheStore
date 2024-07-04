<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Item extends Model
{
    use HasFactory;
    protected $fillables = ['name','src','category_id'];
    protected $table = 'items';
    public $timestamps = false;
    public function category() {
        return $this->belongsTo(Category::class);
    }
    public function type() {
        return $this->hasMany(Type::class);
    }
}
