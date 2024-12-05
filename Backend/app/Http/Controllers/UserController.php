<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;
use Illuminate\Contracts\Auth\Authenticatable;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Storage;

class UserController extends Controller
{
    public function index()
    {
        $user = auth()->user();
        // dd($user);
        return view('pages.user.add',compact('user'));
    }

    public function update(Request $request)
    {
        try {
            $info = auth()->user();
            $id = $info->id;
            $user = User::find($id);
    
            $reqData = $request->all();
            $imagePath = $user->image;
    
            if($request->hasFile('upload')){
                $newImage = $request->file('upload');
                if ($newImage->isValid()) {
                    Storage::disk('public')->delete($imagePath);
                    $imagePath = $newImage->store('uploads', 'public');
                }
            }
            // dd($imagePath);
    
            $userData = [
                'name' => $request->input('name'),
                'email' => $request->input('email'),
                'username' => $request->input('username'),
                'image' => $imagePath,
            ];
            // dd($userData);
    
            if ($request->filled('password')) {
                $userData['password'] = bcrypt($request->input('password'));
            }
    
            $user->update($userData);
    
            return redirect()->route('dashboard-analytics');
    
        } catch (\Exception $e) {
            return redirect()->back()->with('error', 'Failed to update account details. Please try again.');
        }
    }
}
