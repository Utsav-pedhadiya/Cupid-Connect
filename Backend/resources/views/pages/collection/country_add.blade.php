@extends('layouts/contentNavbarLayout')

@section('title', 'Country')

@section('content')
<h4 class="fw-bold py-3 mb-4"><span class="text-muted fw-light">Country/</span>Country - Create</h4>
<div class="row">
    <!-- Basic Layout -->
    <div class="col-xxl">
        <div class="card mb-4">
            <div class="card-header d-flex align-items-center justify-content-between">
                <!--  <h5 class="mb-0">Basic Layout</h5> <small class="text-muted float-end">Default label</small> -->
            </div>
            <div class="card-body">
                <form method="post" action="{{ route('collection.country.store') }}">
                    @csrf
                    <div class="row mb-3">
                        <label class="col-sm-2 col-form-label" for="basic-default-name">Name</label>
                        <div class="col-sm-10">
                            <input type="text" class="form-control" id="name" name="name">
                        </div>
                    </div>
                    <div class="row mb-3">
                        <label class="col-sm-2 col-form-label" for="basic-default-name">Name - AR</label>
                        <div class="col-sm-10">
                            <input type="text" class="form-control" id="name_ar" name="name_ar">
                        </div>
                    </div>
                    <div class="row mb-3">
                        <label class="col-sm-2 col-form-label" for="basic-default-company">Code</label>
                        <div class="col-sm-10">
                            <input type="text" class="form-control" id="code" name="code">
                        </div>
                    </div>
                    <div class="row mb-3">
                        <label class="col-sm-2 col-form-label" for="is_gcc">IS GCC</label>
                        <div class="col-sm-10">
                            <div class="form-check">
                                <input type="checkbox" class="form-check-input" id="is_gcc" name="is_gcc" >
                            </div>
                        </div>
                    </div>
                    <div class="row justify-content-end">
                        <div class="col-sm-10">
                            <button type="submit" class="btn btn-primary">Submit</button>
                        </div>
                    </div>
            </div>
            </form>
        </div>
    </div>
</div>
<!-- Basic with Icons -->
</div>
@endsection