<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class SubscriberController extends Controller
{
    //

    public function create(Request $request)
    {
        return view('pages.subscriber.add');
    }
}
