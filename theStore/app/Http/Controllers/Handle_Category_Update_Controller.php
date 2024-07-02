<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class Handle_Category_Update_Controller extends Controller
{
    public function update(Request $request ) {
        $request->validate([
            'name'=>['required','string'],
            'img'=>['required','file']
           ]);
        
           return 'Update is here'.$request->input('name');
    }
}
