<?php

namespace App\Http\Controllers;
use Illuminate\Support\Str;
use App\Models\Category;
use App\Models\Item;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;

class Items_Controller extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $items = Item::all();       
        return Inertia::render('Items/Show',['items'=>$items,'user'=>Auth::user()]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        $categories = Category::all();       
        return Inertia::render('Items/Create',['categories'=>$categories,'user'=>Auth::user()]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $request->validate([
            'name'=>['required','string'],
             'src'=>['required','file','mimes:jpg,jpeg,png,jpg'],
             'category_id'=>['required','integer','min:1']
        ]);
        $src = $request->file('src');
        $path = Str::slug($src->getClientOriginalName()).'.'.$src->getClientOriginalExtension();
        if (move_uploaded_file($src->getPathname() , public_path('imgs').'/'.$path)) {
           $item =  new Item();
           $item->name = $request->input('name'); 
           $item->src = '/imgs'.'/'.$path;
           $item->category_id = $request->input('category_id');
           $item->save();
           return redirect()->route('items.index') ; 
        } else {
            return 'Failed To Insert Item';
        }
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
        $item = Item::find($id);
        $categories = Category::all();
        return Inertia::render('Items/Edit',['item'=>$item , 'user'=>Auth::user() , 'categories'=>$categories]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        $request->validate([
            'name'=>['required','string'],
             'src'=>['required','file','mimes:jpg,jpeg,png,jpg'],
             'category_id'=>['required','integer','min:1']
        ]);
        $src = $request->file('src');
        $path = Str::slug($src->getClientOriginalName()).'.'.$src->getClientOriginalExtension();
        if (move_uploaded_file($src->getPathname() , public_path('imgs').'/'.$path)) {
           $item =   Item::find($id);
           $item->name = $request->input('name'); 
           $item->src = '/imgs'.'/'.$path;
           $item->category_id = $request->input('category_id');
           $item->save();
           return redirect()->route('items.index') ; 
        } else {
            return 'Failed To Insert Item';
        }
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        $item = Item::find($id);
        if (unlink(public_path($item->src))) {
            $item->delete();
            return redirect()->route('items.index');
        } else {
        return " Failed To Delte Item";
        }
    }
}
