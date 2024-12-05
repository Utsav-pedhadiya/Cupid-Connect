<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Subscription;

class SubscriptionController extends Controller
{
    //
    public function index(Request $request)
    {
        $data = Subscription::get();
        return view('pages.subscriber.index',compact('data'));
    }

    public function create(Request $request)
    {
        return view('pages.subscriber.add');
    }

    public function store(Request $request)
    {
        $reqData = $request->all();
        
        $sub = new Subscription;
        $sub->plan_name = $reqData['plan_name'];
        $sub->price=$reqData['amount'];
        $sub->months=$reqData['months'];
        $sub->description=$reqData['desc'];
        $sub->color_code=$reqData['color_code'];
        $sub->is_active = '1';
        $sub->save();

        return redirect()->route('subscriber')->with('success', 'Subscription updated successfully.');
    }
    public function edit($id)
    {
        $data = Subscription::find($id);
        return view('pages.subscriber.edit',compact('data'));
    }

    public function update(Request $request)
    {
        $reqData = $request->all();
        $id = $reqData['id'];

        $validatedData = $request->validate([
            'plan_name' => 'required|string',
            'amount' => 'required|numeric',
            'months' => 'required|integer',
            'desc' => 'required|string',
            'color_code' => 'required|string',
            'status' => 'required|integer',
        ]);
        
    
        $sub = Subscription::findOrFail($id);
    
        $sub->update([
            'plan_name' => $validatedData['plan_name'],
            'price' => $validatedData['amount'],
            'months' => $validatedData['months'],
            'description' => $validatedData['desc'],
            'color_code' => $validatedData['color_code'],
            'is_active' => $validatedData['status'],
        ]);
    
        return redirect()->route('subscriber')->with('success', 'Subscription updated successfully.');
    }

    public function delete($id)
    {
        $sub = Subscription::findOrFail($id);
        $sub->delete();

        return redirect()->route('subscriber')->with('success', 'Subscription Deleted successfully.');
    } 
}
