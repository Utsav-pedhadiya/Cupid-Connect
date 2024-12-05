@extends('layouts/contentNavbarLayout')

@section('title', 'Account settings - Account')

@section('page-script')
<script src="{{asset('assets/js/pages-account-settings-account.js')}}"></script>
@endsection

@section('content')
<h4 class="fw-bold py-3 mb-4">
  <span class="text-muted fw-light">Account Settings /</span> Account
</h4>

<div class="row">
  <div class="col-md-12">
    <ul class="nav nav-pills flex-column flex-md-row mb-3">
      <li class="nav-item"><a class="nav-link active" href="javascript:void(0);"><i class="bx bx-user me-1"></i> Account</a></li>
    </ul>
    <div class="card mb-4">
      <h5 class="card-header">Profile Details</h5>
      <!-- Account -->
      <form id="formAccountSettings" method="POST" action="{{ route('users.update') }}" enctype="multipart/form-data">
        @csrf
      <div class="card-body">
        <div class="d-flex align-items-start align-items-sm-center gap-4">
          <img src='/datingapp/storage/app/public/{{$user->image}}' alt="user-avatar" class="d-block rounded" height="100" width="100" id="uploadedAvatar" />
          <div class="button-wrapper">
            <label for="upload" class="btn btn-primary me-2 mb-4" tabindex="0">
              <span class="d-none d-sm-block">Upload new photo</span>
              <i class="bx bx-upload d-block d-sm-none"></i>
              <input type="file" id="upload" name="upload" class="account-file-input" hidden accept="image/png, image/jpeg" />
            </label>
            <button type="button" class="btn btn-outline-secondary account-image-reset mb-4">
              <i class="bx bx-reset d-block d-sm-none"></i>
              <span class="d-none d-sm-block">Reset</span>
            </button>

            <p class="text-muted mb-0">Allowed JPG, GIF or PNG. Max size of 800K</p>
          </div>
        </div>
      </div>
      <hr class="my-0">
      <div class="card-body">
          <div class="row">
            <div class="mb-3 col-md-6">
              <label for="firstName" class="form-label">Name</label>
              <input class="form-control" type="text" id="firstName" name="name" 
              value="{{!empty($user['name']) ? $user['name'] : ''}}" 
              autofocus />
            </div>
            <div class="mb-3 col-md-6">
              <label for="email" class="form-label">E-mail</label>
              <input class="form-control" type="text" id="email" name="email" 
              value="{{!empty($user['email']) ? $user['email'] : ''}}"/>
            </div>
            <div class="mb-3 col-md-6">
              <label for="usernmae" class="form-label">Username</label>
              <input type="text" class="form-control" id="username" name="username" 
              value="{{!empty($user['username']) ? $user['username'] : ''}}"/>
            </div>
            <div class="mb-3 col-md-6">
              <label for="password" class="form-label">Password</label>
              <input type="password" class="form-control" id="password" name="password" 
              />
              <span>If dont want to change Password then leave it blank</span>
            </div>
          </div>
          <div class="mt-2">
            <button type="submit" class="btn btn-primary me-2">Save changes</button>
            <button type="reset" class="btn btn-outline-secondary">Cancel</button>
          </div>
        </form>
      </div>
      <!-- /Account -->
    </div>
@endsection
