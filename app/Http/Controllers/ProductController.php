<?php

namespace App\Http\Controllers;

use App\Models\Product;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Illuminate\Support\Facades\Auth;

class ProductController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $products = Product::all();
        return Inertia::render('Products/Index', ['products' => $products]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        // dd(auth::user()->role);
        if(auth::user()->role != "admin" && auth::user()->role != "editor") {
            return to_route('dashboard');
        }
        return Inertia::render('Products/Create');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        if(auth::user()->role != 'admin' && auth::user()->role != 'editor') {
            return to_route('dashboard');
        }
        $request->validate([
            'name' => ['required', 'string', 'max:255'],
            'Description' => ['required', 'string', 'max:255', 'min:0'],
        ]);

        $product = new Product();
        $product->name = $request->name;
        $product->Description = $request->Description;
        $product->save();

        return to_route('products.index');
    }

    /**
     * Display the specified resource.
     */
    public function show($id) {
        $product = Product::find($id);
        return Inertia::render('Products/View', ['product' => $product]);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit($id)
    {
        if(auth::user()->role != 'admin' && auth::user()->role != 'editor') {
            return to_route('dashboard');
        }
        $product = Product::find($id);
        return Inertia::render('Products/Edit', ['product' => $product]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request)
    {
        if(auth::user()->role != 'admin' && auth::user()->role != 'editor') {
            return to_route('dashboard');
        }
        $request->validate([
            'name' => ['required', 'string', 'max:255'],
            'Description' => ['required', 'string'],
            'id' => ['required', 'numeric', 'exists:products,id'],
        ]);

        $product = Product::find($request->id);
        $product->name = $request->name;
        $product->Description = $request->Description;
        $product->save();

        return to_route('products.index');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy($id)
    {
        if(auth::user()->role != 'admin') {
            return to_route('dashboard');
        }
        $product = Product::find($id);
        $product->delete();
        return to_route('products.index');
    }
}
