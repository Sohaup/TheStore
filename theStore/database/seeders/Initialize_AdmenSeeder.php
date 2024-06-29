<?php

namespace Database\Seeders;

use App\Models\Admen;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class Initialize_AdmenSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
       $admen = new Admen();
       $admen->user_id = 1;
       $admen->save();
    }
}
