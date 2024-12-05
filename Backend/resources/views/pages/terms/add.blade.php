@extends('layouts/contentNavbarLayout')

@section('title', ' Horizontal Layouts - Forms')

@section('content')
<h4 class="fw-bold py-3 mb-4"><span class="text-muted fw-light">Terms & Condition/</span>Terms & Condition - Create</h4>

<!-- Basic Layout & Basic with Icons -->
<div class="row">
  <!-- Basic Layout -->
  <div class="col-xxl">
    <div class="card mb-4">
      <div class="card-header d-flex align-items-center justify-content-between">
        <!--  <h5 class="mb-0">Basic Layout</h5> <small class="text-muted float-end">Default label</small> -->
      </div>
      <div class="card-body">
        <form method="post" action="{{ route('terms.store') }}">
          @csrf
          <div class="row mb-3">
            <label class="col-sm-2 col-form-label" for="basic-default-name">Title</label>
            <div class="col-sm-10">
              <input type="text" class="form-control" id="title" name="title">
            </div>
          </div>
          <div class="row mb-3">
            <label class="col-sm-2 col-form-label" for="basic-default-message">Content</label>
            <div class="col-sm-10">
              <textarea id="basic-default-message" id="content" name="content" class="form-control" placeholder="Details About Plan" aria-describedby="basic-icon-default-message2"></textarea>
            </div>
          </div>
          <!-- <div class="row mb-3">
            <label class="col-sm-2 col-form-label" for="basic-default-email">Status</label>
            <div class="col-sm-10">
              <select id="status" class="form-select">
                    <option value="1">Active</option>
                    <option value="0">Inactive</option>
                </select>
            </div>
          </div> -->
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
