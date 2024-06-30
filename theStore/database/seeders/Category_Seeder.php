<?php

namespace Database\Seeders;
use Illuminate\Support\Facades\DB;
use App\Models\Category;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class Category_Seeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
       DB::update('UPDATE categories SET img=? WHERE id=?',['/categories/foods_category.jpg',1]);
       DB::update('UPDATE categories SET img=? WHERE id=?',['/categories/school_tools.jpg',2]);
       DB::update('UPDATE categories SET img=? WHERE id=?',['/categories/clothes.png',3]);
       DB::update('UPDATE categories SET img=? WHERE id=?',['/categories/home_machines.jpg',4]);
    }
}
