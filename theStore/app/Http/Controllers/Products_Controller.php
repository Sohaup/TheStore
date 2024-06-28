<?php

namespace App\Http\Controllers;
use Illuminate\Support\Str;
use App\Models\Product;
use Illuminate\Database\Eloquent\Casts\Json;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;

class Products_Controller extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(Request $request)
    {
        $products = Product::all();   
        
       return Inertia::render('Products/Index',['products'=>$products , 'itemData'=>$request['item'] , 'category'=>Str::lower($request['category']) , 'user'=>Auth::user()]);       
       
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
       
        return Inertia::render('Products/Create');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $request->validate([
            'name'=>['required','string','min:2','max:20'],
            'price'=>['required','integer','min:1'],
            'from'=>['required','string','min:3','max:20'],
            'category'=>['required','string','min:3','max:20'],
            'item'=>['required','string','min:3','max:20'],
            'img'=>['required','file','mimes:jpg,jpeg,png']
        ]);
        $img = $request->file('img');
        $path = "/".Str($img->getClientOriginalName());       
        if (move_uploaded_file($img->getPathname() , public_path('products').$path)) {
               $product = new Product();
               $product->name = $request->input('name');
               $product->price = $request->input('price');
               $product->from = $request->input('from');
               $product->category = $request->input('category');
               $product->item = $request->input('item');
               $product->img = $path;
               $product->save();
               return 'success insert product'.' '.$request->input("name") ; 
        }else {
            return "failed to insert product";
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
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        //
    }
}
