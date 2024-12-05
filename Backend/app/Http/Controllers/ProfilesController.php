<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Models\DeviceToken;
use Illuminate\Http\Request;
use App\Models\Profile;
use App\Models\Qualitie;
use App\Models\Notification;
use App\Models\Payment;
use App\Models\Country;
use App\Models\Cities;
use App\Models\Request as Req;
use App\Models\ProfileContact;
use App\Models\ProfileLike;
use App\Models\ProfileView;
use App\Models\Report;
use App\Models\Subscription;
use App\Models\SubscriptionHistorie;
use App\Models\SubscriptionProfileDetail;
use Psy\Readline\Hoa\Console;

class ProfilesController extends Controller
{
    
    public function index()
    {
        $profiles = Profile::get();
        return view('pages.profiles.index',compact('profiles'));
    }

    public function create(Request $request)
    {
        return view('pages.profiles.add');
    }

    public function store(Request $request)
    {
        $reqData = $request->all();
        
        // $validatedData = $request->validate([
        //     'name' => 'required|string',
        //     'gender' => 'required|string',
        //     'number' => 'required|string',
        //     'dob' => 'required|date',
        //     'age' => 'required|integer',
        //     'nationality' => 'required|string',
        //     'place_of_residence' => 'required|string',
        //     'city' => 'required|string',
        //     'job' => 'required|string',
        //     'lineage' => 'required|string',
        //     'skin_color' => 'required|string',
        //     'martial_status' => 'required|string',
        //     'number_of_children' => 'required|integer',
        //     'are_the_children_with_you' => 'required|string',
        //     'religious_commitment' => 'required|string',
        //     'financial_situation' => 'required|string',
        //     'height' => 'required|string',
        //     'width' => 'required|string',
        //     'body_tone' => 'required|string',
        //     'health_status' => 'required|string',
        //     'write_about_yourself' => 'required|string',
        //     'interests' => 'required|string',
        //     'status' => 'required|integer',
        // ]);

        $profile = new Profile();
        $profile->name = $reqData['name'];
        $profile->gender = $reqData['gender'];
        $profile->number = $reqData['number'];
        // $profile->dob = $reqData['dob'];
        $profile->age = $reqData['age'];
        $profile->nationality = $reqData['nationality'];
        $profile->place_of_residence = $reqData['place_of_residence'];
        $profile->city = $reqData['city'];
        $profile->job = $reqData['job'];
        $profile->lineage = $reqData['lineage'];
        $profile->skin_color = $reqData['skin_color'];
        $profile->martial_status = $reqData['martial_status'];
        $profile->number_of_children = $reqData['number_of_children'];
        $profile->are_the_children_with_you = $reqData['are_the_children_with_you'];
        $profile->religious_commitment = $reqData['religious_commitment'];
        $profile->financial_situation = $reqData['financial_situation'];
        $profile->height = $reqData['height'];
        $profile->width = $reqData['width'];
        $profile->body_tone = $reqData['body_tone'];
        $profile->health_status = $reqData['health_status'];
        $profile->write_about_yourself = $reqData['write_about_yourself'];
        // $profile->qualities_you_are_looking_for = $reqData['qualities_you_are_looking_for'];
        $profile->interests = $reqData['interests'];
        $profile->type_of_marriage = $reqData['type_of_marriage'];
        $profile->type_of_hijab = $reqData['type_of_hijab'];
        $profile->type_of_marriage_ar = $reqData['type_of_marriage_ar'];
        $profile->type_of_hijab_ar = $reqData['type_of_hijab_ar'];

        $profile->profile_status = $reqData['status'];
        $profile->save();
        // dd($profile);
        // exit();
        return redirect()->route('profiles.index')->with('success', 'Profiles Created successfully.');
    }

    public function edit($id)
    {
        $data = Profile::find($id);
        $countrylist = Country::select('name','name_ar')->get();
        $citylist = Cities::select('name','name_ar')->get(); 
        $porlist =Country::where('is_gcc','1')->select('name','name_ar')->get();
        return view('pages.profiles.edit',compact('data','countrylist','citylist','porlist'));
    }

    public function update(Request $request)
{
    // dd($request);
    $reqData = $request->all();
    // $validatedData = $request->validate([
    //     'name' => 'required|string',
    //         'gender' => 'required|string',
    //         'number' => 'required|string',
    //         'dob' => 'required|date',
    //         'age' => 'required|integer',
    //         'nationality' => 'required|string',
    //         'place_of_residence' => 'required|string',
    //         'city' => 'required|string',
    //         'job' => 'required|string',
    //         'lineage' => 'required|string',
    //         'skin_color' => 'required|string',
    //         'martial_status' => 'required|string',
    //         'number_of_children' => 'required|integer',
    //         'are_the_children_with_you' => 'required|string',
    //         'religious_commitment' => 'required|string',
    //         'financial_situation' => 'required|string',
    //         'height' => 'required|string',
    //         'width' => 'required|string',
    //         'body_tone' => 'required|string',
    //         'health_status' => 'required|string',
    //         'write_about_yourself' => 'required|string',
    //         'interests' => 'required|string',
    //         'status' => 'required|integer',

    // ]);
    $reqData = $request->all();
    $id = $reqData['id'];
    $profile = Profile::findOrFail($id); // Retrieve the profile to update

    // Update each field with the validated data
        $profile->name = $reqData['name'];
        $profile->gender = $reqData['gender'];
        $profile->number = $reqData['number'];
        // $profile->dob = $reqData['dob'];
        $profile->age = $reqData['age'];
        $profile->nationality = $reqData['nationality'];
        $profile->place_of_residence = $reqData['place_of_residence'];
        $profile->city = $reqData['city'];
        $profile->job = $reqData['job'];
        $profile->lineage = $reqData['lineage'];
        $profile->skin_color = $reqData['skin_color'];
        $profile->martial_status = $reqData['martial_status'];
        $profile->number_of_children = $reqData['number_of_children'];
        $profile->are_the_children_with_you = $reqData['are_the_children_with_you'];
        $profile->religious_commitment = $reqData['religious_commitment'];
        $profile->financial_situation = $reqData['financial_situation'];
        $profile->height = $reqData['height'];
        $profile->width = $reqData['width'];
        $profile->body_tone = $reqData['body_tone'];
        $profile->health_status = $reqData['health_status'];
        $profile->write_about_yourself = $reqData['write_about_yourself'];
        // $profile->qualities_you_are_looking_for = $reqData['qualities_you_are_looking_for'];
        $profile->interests = $reqData['interests'];
        $profile->type_of_marriage = $reqData['type_of_marriage'];
        $profile->type_of_hijab = $reqData['type_of_hijab'];
        $profile->type_of_marriage_ar = $reqData['type_of_marriage_ar'];
        $profile->type_of_hijab_ar = $reqData['type_of_hijab_ar'];
        $profile->profile_status = $reqData['status'];
        $profile->save(); 
        
     return redirect()->route('profiles.index')->with('success', 'Profile updated successfully.');
    }

    public function delete($id)
    {
        Qualitie::where('profile_id', $id)->delete();
        Notification::where('profile_id', $id)->delete();
        Notification::where('opp_profile_id', $id)->delete();
        Req::where('profile_id', $id)->delete();
        Req::where('requester_id', $id)->delete();
        ProfileView::where('profile_id', $id)->delete();
        ProfileView::where('viewer_id', $id)->delete();
        ProfileLike::where('liked_profile_id', $id)->delete();
        ProfileLike::where('liker_id', $id)->delete();
        ProfileContact::where('profile_id', $id)->delete();
        SubscriptionHistorie::where('profile_id', $id)->delete();
        SubscriptionProfileDetail::where('profile_id', $id)->delete();
        Payment::where('profile_id', $id)->delete();
        Report::where('profile_id',$id)->delete();
        DeviceToken::where('profile_id',$id)->delete();

        $profile = Profile::findOrFail($id);
        $profile->delete();
        return redirect()->route('profiles.index')->with('success', 'Profile deleted successfully.');
    }

    public function show($id){
        $data = Profile::findOrFail($id);
        $notification = Notification::with('opp_profile')->where('profile_id',$id)->orderBy('id','desc')->limit(10)->get(); 

        $request = Req::where('profile_id',$id)->orderBy('id','desc')->limit(5)->get();
        $requestCount = Req::where('profile_id',$id)->where('status','accepted')->count();

        $profile_contact = ProfileContact::where('profile_id',$id)->get();

        $subscription = SubscriptionProfileDetail::with('subscription')->where('profile_id',$id)->get();
        // dd($subscription);

        return view('pages.profiles.show',compact('data','notification','request','profile_contact','subscription','requestCount'));
    }

    public function demoprofile()
    {
        return view('pages.demoprofile.profile');
    }
    
}