<?php

use App\Http\Controllers\Admen_Controller;
use App\Http\Controllers\Categories_Controller;
use App\Http\Controllers\Handle_Category_Update_Controller;
use App\Http\Controllers\Products_Controller;
use App\Http\Controllers\ProfileController;
use App\Models\Admen;
use App\Models\Category;
use App\Models\Item;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('Welcome', [
       'user'=> Auth::user(),
       'routeName'=>Route::currentRouteName(),
       'categories'=>Category::all(),
       'items'=>Item::all()
    ]);
})->name('main');

Route::get('/dashboard', function () {
    $admens = Admen::all();
    return Inertia::render('Dashboard' , ['admens'=>$admens]);
})->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

Route::resource('productspath',Products_Controller::class);
Route::resource('admens',Admen_Controller::class);
Route::resource('categoriespath',Categories_Controller::class);
Route::match(['POST','PUT'],'/categoriesUpdate/{id}',[Categories_Controller::class , 'update'])->name('category_update');

require __DIR__.'/auth.php';
