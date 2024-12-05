<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;

class AdminUserController extends Controller
{
    public function index()
    {
        $auth = auth()->user();
        $data = User::whereNot('id',$auth->id)->get();
        return view('pages.admin-user.index',compact('data'));
    }

    public function update(Request $request)
    {
        try {
            $id = $request->input('id');
            $user = User::find($id);
    
            $reqData = $request->all();
            $imagePath = $user->image;
            $pass = $reqData['password'];
    
            if ($request->hasFile('image')) {
                $newImage = $request->file('image');
                if ($newImage->isValid()) {
                    Storage::disk('public')->delete($imagePath);
                    $imagePath = $newImage->store('uploads', 'public');
                }
            }
    
            $userData = [
                'name' => $request->input('name'),
                'email' => $request->input('email'),
                'username' => $request->input('username'),
                'image' => $imagePath, // Include this line for image update
            ];
    
            if ($pass) {
                $userData['password'] = bcrypt($request->input('password'));
            }
    
            foreach ($userData as $key => $value) {
                $user->{$key} = $value;
            }
            $user->save();
    
            return redirect()->route('adminuser')->with('success', 'User Updated successfully.');
    
        } catch (\Exception $e) {
            return redirect()->back()->with('error', 'Failed to update account details. Please try again.');
        }
    }
    public function store(Request $request)
    {
        $reqData = $request->all();
        // dd($reqData);
        $imagePath = $reqData['image']??null;

        if($request->hasFile('image')){
            $newImage = $request->file('image');
            if ($newImage->isValid()) {
                Storage::disk('public')->delete($imagePath);
                $imagePath = $newImage->store('uploads', 'public');
            }
        }
        // dd($imagePath);

        $user= new User();
        $user->name = $reqData['name'];
        $user->email = $reqData['email'];
        $user->username = $reqData['username'];
        $user->image =  $imagePath;
        $user->mobile_no =  $reqData['mobile_no'];
        $user->password =  bcrypt($request->input('password'));
        $user->save();

        return redirect()->route('adminuser')->with('success', 'User Added successfully.');

    }

    public function delete($id)
    {
        $user = User::find($id);
        if($user->image)
        {
            Storage::disk('public')->delete($user->image);
        }
        $user->delete();

        return redirect()->route('adminuser')->with('success', 'User Deleted successfully.');
    }
}
