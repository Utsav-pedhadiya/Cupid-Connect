<?php

namespace App\Http\Controllers;

use App\Models\Cities;
use App\Models\Country;
use App\Models\State;
use Illuminate\Http\Request;

class CollectionController extends Controller
{
    public function country_index()
    {
        $country = Country::get();
        return view('pages.collection.country_index',compact('country'));
    }

    public function country_add()
    {
        return view('pages.collection.country_add');
    }

    public function country_store(Request $request)
    {
        // dd($request);
        $is_gcc = $request->input('is_gcc');
        if($is_gcc == 'on')
        {
            $is_gcc = 1;
        }
        $data = new Country();
        $data->name = $request->input('name');
        $data->name_ar = $request->input('name_ar');
        $data->code = $request->input('code');
        $data->is_gcc = $is_gcc ?? 0;
        $data->save();

        return redirect()->route('collection.country.index')->with('success', 'Country Added successfully.');
    }

    public function country_edit($id)
    {
        $data = Country::find($id);
        return view('pages.collection.country_edit',compact('data'));
    }

    public function country_update(Request $request)
    {
        $country = Country::find($request->input('id'));
        $country->name = $request->input('name') ?? $country->name;
        $country->name_ar = $request->input('name_ar') ?? $country->name_ar;
        $country->code = $request->input('code') ?? $country->code;
        $country->is_gcc = $request->input('is_gcc') ? $request->input('is_gcc') : 0;
        $country->save();
        
        return redirect()->route('collection.country.index')->with('success', 'Country Added successfully.');
    }
    public function country_delete(Request $request, $id)
    {
        $data = Country::find($id);
        if ($data){
            Cities::where('country_id',$id)->delete();
            state::where('country_id',$id)->delete();
            $data->delete();
        }
        return redirect()->route('collection.country.index')->with('success', 'Country Deleted successfully.');
    }

    public function state_index()
    {
        $country = State::with('country')->get();
        return view('pages.collection.state_index',compact('country'));
    }

    public function state_add()
    {
        $country = Country::get();
        return view('pages.collection.state_add',compact('country'));
    }

    public function state_store(Request $request)
    {
        $reqData = $request->all();
        // dd($reqData);
        $country_id = $reqData['country'];
        $states = $reqData['state'];
        $states_ar = $reqData['state_ar'];

        foreach ($states as $key => $value){
            $data=new State;
            $data->name=$states[$key];
            $data->name_ar=$states_ar[$key];
            $data->country_id=$country_id;
            $data->save();
        }

        return redirect()->route('collection.state.index')->with('success', 'State Added successfully.');
    }

    public function state_delete(Request $request, $id)
    {
        $data = State::find($id);
        if ($data){
            Cities::where('state_id',$id)->delete();
            $data->delete();
        }
        return redirect()->route('collection.state.index')->with('success', 'State Deleted successfully.');
    }


    public function city_index()
    {
        $country = Cities::with('country')->get();
        // $country_new = $country->country->name;
        // dd($country_new);
        return view('pages.collection.city_index',compact('country'));
    }

    public function city_add()
    {
        $country = Country::get();
        $state = State::get();
        return view('pages.collection.city_add',compact('country','state'));
    }

    public function city_store(Request $request)
    {
        $reqData = $request->all();
        // dd($reqData);
        $country_id = $reqData['country'];
        // $state_id = $reqData['state'];
        $city = $reqData['city'];
        $city_ar = $reqData['city_ar'];

        foreach ($city as $key => $value){
            $data=new Cities();
            $data->name=$city[$key];
            $data->name_ar=$city_ar[$key];
            $data->country_id=$country_id;
            // $data->state_id=$state_id;
            $data->save();
        }

        return redirect()->route('collection.city.index')->with('success', 'City Added successfully.');
    }

    public function city_delete(Request $request, $id)
    {
        $data = Cities::find($id);
        if ($data){
            $data->delete();
        }
        return redirect()->route('collection.city.index')->with('success', 'City Deleted successfully.');
    }
}
