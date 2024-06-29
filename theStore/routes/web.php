<?php

use App\Http\Controllers\Admen_Controller;
use App\Http\Controllers\Products_Controller;
use App\Http\Controllers\ProfileController;
use App\Models\Admen;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('Welcome', [
       'user'=> Auth::user(),
       'routeName'=>Route::currentRouteName()
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
require __DIR__.'/auth.php';
