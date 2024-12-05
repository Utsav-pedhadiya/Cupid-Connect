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
        <!--  <h5 class="mb-0">Basic Layout</h5> <small class="text-muted float-end">Default label</small> -->
      </div>
      <div class="card-body">
        <form method="post" action="{{ route('subscriber.store') }}">
          @csrf
          <div class="row mb-3">
            <label class="col-sm-2 col-form-label" for="basic-default-name">Plan Name</label>
            <div class="col-sm-10">
              <input type="text" class="form-control" id="plan_name" name="plan_name">
            </div>
          </div>
          <div class="row mb-3">
            <label class="col-sm-2 col-form-label" for="basic-default-company">Amount</label>
            <div class="col-sm-10">
              <input type="number" class="form-control" id="amount" name="amount">
            </div>
          </div>
          <div class="row mb-3">
            <label class="col-sm-2 col-form-label" for="basic-default-email">Months</label>
            <div class="col-sm-10">
              <div class="input-group input-group-merge">
                <input type="number" id="months" name="months" class="form-control">
              </div>
            </div>
          </div>
          
          <div class="row mb-3">
            <label class="col-sm-2 col-form-label" for="basic-default-message">Description</label>
            <div class="col-sm-10">
              <textarea id="basic-default-message" id="desc" name="desc" class="form-control" placeholder="Details About Plan" aria-describedby="basic-icon-default-message2"></textarea>
            </div>
          </div>
          <div class="row mb-3">
            <label class="col-sm-2 col-form-label" for="basic-default-email">Status</label>
            <div class="col-sm-10">
              <select id="status" class="form-select">
                    <option value="1">Active</option>
                    <option value="0">Inactive</option>
                </select>
            </div>
          </div>
          <div class="mb-3 row">
          <label for="html5-color-input" class="col-md-2 col-form-label">Color Code</label>
          <div class="col-md-10">
            <input class="form-control" type="color" id="color_code" name="color_code" value="#563d7c"/>
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
  <!-- Basic with Icons -->
</div>
@endsection
