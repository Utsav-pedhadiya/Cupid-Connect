<?php

namespace App\Http\Controllers\authentications;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Http\RedirectResponse;

class LoginBasic extends Controller
{
  public function index()
  {
    return view('content.authentications.auth-login-basic');
  }

  public function authenticate(Request $request): RedirectResponse
  {
    // dd($request);
      $credentials = $request->validate([
          'username' => ['required'],
          'password' => ['required'],
      ]);

      if (Auth::attempt($credentials)) {
          $request->session()->regenerate();

          return redirect()->intended('/');
      }

      return back()->withErrors([
          'username' => 'The provided credentials do not match our records.',
      ])->onlyInput('username');
  }
  
}
