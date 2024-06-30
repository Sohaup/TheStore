<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class Items_Seeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
       DB::insert('INSERT INTO items(name,src,category_id)
        VALUES(?,?,?),(?,?,?),(?,?,?),(?,?,?),(?,?,?),(?,?,?),(?,?,?),(?,?,?),(?,?,?),(?,?,?),(?,?,?),(?,?,?),(?,?,?),(?,?,?)',
       [
        'desktops','/imgs/desktops.jpg',4 , 
       'laptops','/imgs/laptops_main.jfif',4 ,
       'washing machines','/imgs/washing_machine.jpg',4,
       'tvs','/imgs/tv.jpg',4,
       'man clothes','/imgs/man_clothes.jfif',3,
       'women clothes','/imgs/women_clothes.jpg',3,
       'children clothes','/imgs/children_clothes.jpg',3,
       'pens','/imgs/pens.jpg',2,
       'bags','/imgs/bag.jpg',2,
       'calculators','/imgs/calc.png',2,
       'meats','/imgs/meat.jpg',1,
       'fruits','/imgs/fruits.jpg',1,
       'junk food','/imgs/junk_foods.jpg',1,
       'macarony','/imgs/macarony.jpg',1
    ]);
    }
}
