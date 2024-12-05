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
        <form method="post" action="{{ route('subscriber.update') }}">
          @csrf
          <input type="hidden" class="form-control" id="id" name="id" value="{{$data->id}}">
          <div class="row mb-3">
            <label class="col-sm-2 col-form-label" for="basic-default-name">Plan Name</label>
            <div class="col-sm-10">
              <input type="text" class="form-control" id="plan_name" name="plan_name" value="{{$data->plan_name}}">
            </div>
          </div>
          <div class="row mb-3">
            <label class="col-sm-2 col-form-label" for="basic-default-company">Amount</label>
            <div class="col-sm-10">
              <input type="number" class="form-control" id="amount" name="amount" value="{{$data->price}}">
            </div>
          </div>
          <div class="row mb-3">
            <label class="col-sm-2 col-form-label" for="basic-default-email">Months</label>
            <div class="col-sm-10">
              <div class="input-group input-group-merge">
                <input type="number" id="months" name="months" class="form-control" value="{{$data->months}}">
              </div>
            </div>
          </div>
          
          <div class="row mb-3">
            <label class="col-sm-2 col-form-label" for="basic-default-message">Description</label>
            <div class="col-sm-10">
            <textarea id="basic-default-message" name="desc" class="form-control" aria-describedby="basic-icon-default-message2">{{$data->description}}</textarea>
            </div>
          </div>

          <div class="row mb-3">
            <label class="col-sm-2 col-form-label" for="basic-default-email">Status</label>
            <div class="col-sm-10">
                <select id="status" name="status" class="form-select">
                    <option value="1" {{ $data->is_active == 1 ? 'selected' : '' }}>Active</option>
                    <option value="0" {{ $data->is_active == 0 ? 'selected' : '' }}>Inactive</option>
                </select>
            </div>
        </div>
         
          <div class="mb-3 row">
          <label for="html5-color-input" class="col-md-2 col-form-label">Color Code</label>
          <div class="col-md-10">
            <input class="form-control" type="color" id="color_code" name="color_code" value="{{$data->color_code}}"/>
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
