@extends('layouts.contentNavbarLayout')

@section('title', 'Country')

@section('content')
<h4 class="fw-bold py-3 mb-4"><span class="text-muted fw-light">State/</span> State - Create</h4>
<div class="row">
    <!-- Basic Layout -->
    <div class="col-xxl">
        <div class="card mb-4">
            <div class="card-header d-flex align-items-center justify-content-between">
                <!--  <h5 class="mb-0">Basic Layout</h5> <small class="text-muted float-end">Default label</small> -->
            </div>
            <div class="card-body">
                <form method="post" action="{{ route('collection.state.store') }}">
                    @csrf
                    <div class="row mb-3">
                        <label class="col-sm-2 col-form-label" for="country">Country</label>
                        <div class="col-sm-10">
                            <select class="form-select" id="country" name="country">
                                <option>Select Country</option>
                                @foreach($country as $country)
                                <option value="{{ $country->id }}">{{ $country->name }}</option>
                                @endforeach
                            </select>
                        </div>
                    </div>
                    <div class="row mb-3">
                        <label class="col-sm-2 col-form-label" for="state">Add State - Eng</label>
                        <div class="col-sm-10">
                            <select class="form-control state" id="state" name="state[]" multiple="multiple">
                            </select>
                        </div>
                    </div>
                    <div class="row mb-3">
                        <label class="col-sm-2 col-form-label" for="state">Add State - Ar</label>
                        <div class="col-sm-10">
                            <select class="form-control state" id="state_ar" name="state_ar[]" multiple="multiple">
                            </select>
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
<!-- Basic with Icons -->
<script>
    $(document).ready(function() {
        $("#country").select2({
            tags: true
        });

        $("#state").select2({
            tags: true
        });

        $("#state_ar").select2({
            tags: true
        });
    });
</script>
@endsection
