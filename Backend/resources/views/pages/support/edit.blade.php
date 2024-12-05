@extends('layouts/contentNavbarLayout')

@section('title', ' Horizontal Layouts - Forms')

@section('content')
<h4 class="fw-bold py-3 mb-4"><span class="text-muted fw-light">Subscription/</span>Subscription - Create</h4>

<!-- Basic Layout & Basic with Icons -->
<div class="row">
  <!-- Basic Layout -->
  <div class="col-xxl">
    <div class="card mb-4">
      <div class="card-header d-flex align-items-center justify-content-between">
      </div>
      <div class="card-body">
        <form method="post" action="{{route('support.update')}}">
          @csrf
          <input type="hidden" class="form-control" id="id" name="id" value="{{$data->id}}">

          <div class="row mb-3">
            <label class="col-sm-2 col-form-label" for="basic-default-name">Profile</label>
            <div class="col-sm-10">
              <input type="text" class="form-control" id="profile_id" name="profile_id" placeholder="{{$data->profile->name}}" readonly>
            </div>
          </div>

          <div class="row mb-3">
            <label class="col-sm-2 col-form-label" for="basic-default-name">Title</label>
            <div class="col-sm-10">
              <input type="text" class="form-control" id="title" name="title" value="{{$data->title}}">
            </div>
          </div>

          <div class="row mb-3">
            <label class="col-sm-2 col-form-label" for="basic-default-company">Note</label>
            <div class="col-sm-10">
              <input type="text" class="form-control" id="note" name="note" value="{{$data->note}}">
            </div>
          </div>

        <div class="row mb-3">
            <label class="col-sm-2 col-form-label" for="basic-default-email">Status</label>
            <div class="col-sm-10">
                <select id="status" name="status" class="form-select">
                    <option value="pending" {{ $data->status == 'pending' ? 'selected' : '' }}>Pending</option>
                    <option value="resolved" {{ $data->status == 'resolved' ? 'selected' : '' }}>Resolved</option>
                </select>
            </div>
        </div>
          
          <div class="row mb-3">
            <label class="col-sm-2 col-form-label" for="basic-default-message">Resolving Reason</label>
            <div class="col-sm-10">
            <textarea id="basic-default-message" name="resolved" class="form-control" aria-describedby="basic-icon-default-message2">{{$data->resolved_issue}}</textarea>
            </div>
          </div>

          <div class="row justify-content-end">
            <div class="col-sm-10">
              <button type="submit" class="btn btn-primary">Submit</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
</div>
@endsection