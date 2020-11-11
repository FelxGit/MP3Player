<?php

namespace App\Http\Controllers\APi;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\File;

class Mp3Controller extends Controller
{

    public function index() {
        return auth()->user()->files()->where('extension', 'Mp3')->get();
    }

    public function addMP3(Request $request) {
        
        $mp3 = new File;
        $mp3->user_id = auth()->user()->id;
        $mp3->mime_type = $request->mp3->getMimeType();
        $mp3->name = $request->mp3->getClientOriginalName();
        $mp3->extension = $request->mp3->getClientOriginalExtension();
        $mp3->save();

        if($mp3) {
            $request->mp3->store('users/'.auth()->user()->email);
        }
        
        return response()->json($mp3);
    }

}
