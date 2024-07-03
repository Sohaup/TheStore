<?php

namespace App\Http\Controllers;

use App\Models\Category;
use Illuminate\Support\Str;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;

class Categories_Controller extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $categories = Category::all();
        return Inertia::render('Categories/Show',['categories'=>$categories,'user'=>Auth::user()]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return Inertia::render('Categories/Create' , ['user'=>Auth::user()]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $request->validate([
            'name'=>['required','string'],
            'img'=>['required','file','mimes:jpg,jpeg,png,gif']
        ]);
        $img = $request->file('img');
        $path = Str::slug($img->getClientOriginalName());
        if (move_uploaded_file($img->getPathname() , public_path('categories')."/".$path)) {
            $category = new Category();
            $category->name = $request->input('name');
            $category->img = '/categories'.'/'.$path;
            $category->save();
            return redirect()->route('categoriespath.index');
        } else {
            return "Fail to Insert Category";
        }
    }

    /**
     * Display the specified resource.
     */
    public function show(Request $request,string $id)
    {
       return "Show is here"." ".$request->input('name')."".$request->input('img');
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        $category = Category::find($id);
        return Inertia::render('Categories/Edit',['category'=>$category ,'user'=>Auth::user() ,'category_id'=>$id]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
       $request->validate([
        'name'=>['required','string'],
        'img'=>['required','file','mimes:jpg,png,jpeg']
       ]);
       $img = $request->file('img');
       $path = Str::slug($img->getClientOriginalName());
       if (move_uploaded_file($img->getPathname() , public_path('categories')."/".$path)) {
           $category = Category::find($id);
           $category->name = $request->input('name');
           $category->img = '/categories'.'/'.$path;
           $category->update();
           return redirect()->route('categoriespath.index');
       } else {
           return "Fail to Insert Category";
       }
      
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
       $category = Category::find($id);
       if (unlink(public_path($category->img))) {
            $category->delete();
            return redirect()->route('categoriespath.index');
       } else {
        return "failed to delete category";
       }
       
    }
}
