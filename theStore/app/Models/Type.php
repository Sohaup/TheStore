<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Type extends Model
{
    use HasFactory;
    protected $fillables = ['name','img','category_id','item_id'];
    protected $table = 'types';
    public $timestamps = false;
   
    public function item() {
        return $this->belongsTo(Item::class);
    }
}
