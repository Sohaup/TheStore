<?php

namespace App\Http\Controllers;
use Illuminate\Support\Facades\DB;
use App\Models\Admen;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;

class Admen_Controller extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $admens = Admen::all();
        $users = User::all();
        return Inertia::render('Admen/Show',['admens'=>$admens , 'user'=>Auth::user() , 'users'=>$users]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        $users = User::all();
        //$auth
        return Inertia::render('Admen/Create',['users'=>$users , 'auth'=>Auth::id()]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $request->validate([
            'user_id'=>['required','string']
        ]);
       $admen = new Admen();
        $admen->user_id = (int)$request->input('user_id');
        $admen->save();
        
        return redirect()->route("admens.index");
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        $users = User::all();
        return Inertia::render('Admen/Edit',['users'=>$users , 'auth_id'=>Auth::id() , 'admen_id'=>$id]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        $request->validate([
            'user_id'=>['required','string']
        ]);
        //DB::update("UPDATE admens SET user_id = ? Where user_id = ?" , [$request->input('user_id'),$id]);
        $admen = Admen::find($id);
        $admen->user_id = (int)$request->input('user_id');
        $admen->save();
        return redirect()->route('admens.index');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        Admen::find($id)->delete();
        return redirect()->route('admens.index');
    }
}
