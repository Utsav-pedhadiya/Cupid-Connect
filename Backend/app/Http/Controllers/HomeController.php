<?php

namespace App\Http\Controllers;

use App\Models\Payment;
use App\Models\Profile;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Auth; 

class HomeController extends Controller
{
    /**
     * Create a new controller instance.
     *
     * @return void
     */
    // public function __construct()
    // {
    //     $this->middleware('auth');
    // }

    /**
     * Show the application dashboard.
     *
     * @return \Illuminate\Contracts\Support\Renderable
     */
    public function index()
    {

        $results = Profile::select('city', DB::raw('COUNT(*) as people_count'))
                  ->groupBy('city')
                  ->orderBy('people_count', 'desc')
                  ->limit(5)
                  ->get();

        $transaction = Payment::with('profile')->limit(5)->get();

        return view('content.dashboard.dashboards-analytics',compact('results','transaction'));

        return view('content.dashboard.dashboards-analytics');

    }

    public function logout()
    {
        Auth::logout();

        return redirect('/');
    }
}
