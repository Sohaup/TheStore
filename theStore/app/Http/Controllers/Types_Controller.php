<?php

namespace App\Http\Controllers;
use Illuminate\Support\Str;
use App\Models\Category;
use App\Models\Item;
use App\Models\Type;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Redirect;
use Inertia\Inertia;

class Types_Controller extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return Inertia::render('Types/Show',['types'=>Type::all() , 'user'=>Auth::user()]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {        
        return Inertia::render('Types/Create',['user'=>Auth::user(),'categories'=>Category::all(),'items'=>Item::all()]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $request->validate([
            'name'=>['required','string'],
            'img'=>['required','file','mimes:jpg,jpeg,png,gif'],
            'category_id'=>['required','integer','min:1'],
            'item_id'=>['required','integer','min:1']
        ]);
        $img = $request->file('img');
        $path = Str::slug($img->getClientOriginalName()).".".$img->getClientOriginalExtension(); 
        if (move_uploaded_file($img->getPathname() , public_path('TypesImgs')."/".$path)) {
            $type = new Type();
            $type->name = $request->input('name');
            $type->img = '/TypesImgs'."/".$path;
            $type->category_id = $request->input('category_id');
            $type->item_id = $request->input('item_id');
            $type->save();
            return redirect()->route('types.index');
        } else {
            return "Failed To Insert Type";
        }
    }

    /**
     * Display the specified resource.
     */
    public function show(Request $request)
    {        
        return Inertia::render('Types/Display',['types'=>Type::all() , 'category_id'=>$request['category_id'] , 'item_id'=>$request['item_id'],'user'=>Auth::user()]);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        return Inertia::render('Types/Edit',['type'=>Type::Find($id) , 'user'=>Auth::user(),'categories'=>Category::all(),'items'=>Item::all()]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        $request->validate([
            'name'=>['required','string'],
            'img'=>['required','file','mimes:jpg,jpeg,png'],
            'category_id'=>['required','integer','min:1'],
            'item_id'=>['required','integer','min:1']
        ]);
        $img = $request->file('img');
        $path = Str::slug($img->getClientOriginalName()).".".$img->getClientOriginalExtension(); 
        if (move_uploaded_file($img->getPathname() , public_path('TypesImgs')."/".$path)) {
            $type = Type::find($id);
            $type->name = $request->input('name');
            $type->img = '/TypesImgs'."/".$path;
            $type->category_id = $request->input('category_id');
            $type->item_id = $request->input('item_id');
            $type->save();
            return redirect()->route('types.index');
        } else {
            return "Failed To Insert Type";
        }
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        if (unlink(public_path(Type::find($id)->img))) {
            Type::find($id)->delete();
            return redirect()->route('types.index');
        } else {
            return "Failed To Delete Type";
        }
    }
}
