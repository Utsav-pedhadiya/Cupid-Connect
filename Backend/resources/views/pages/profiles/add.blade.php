@extends('layouts/contentNavbarLayout')

@section('title', ' Horizontal Layouts - Forms')

@section('content')
<h4 class="fw-bold py-3 mb-4"><span class="text-muted fw-light">Profiles/</span>Profiles - Create</h4>

<!-- Basic Layout & Basic with Icons -->
<div class="row">
    <!-- Basic Layout -->
    <div class="col-xxl">
        <div class="card mb-4">
            <div class="card-header d-flex align-items-center justify-content-between">
                <!--  <h5 class="mb-0">Basic Layout</h5> <small class="text-muted float-end">Default label</small> -->
            </div>
            <div class="card-body">
                <div class="d-flex justify-content-center">
                    <img src="https://mdbootstrap.com/img/Photos/Others/placeholder-avatar.jpg" class="rounded-circle"
                        alt="example placeholder" style="width: 50px;" />
                </div>
                <form method="post" action="{{ route('profiles.store') }}">
                    @csrf
                    <div class="row mb-3">
                        <div class="col-md-4 mb-3">
                            <label class="col-form-label" for="name">Name</label>
                            <input type="text" class="form-control" id="plan_name" name="name">
                        </div>
                        <div class="col-md mb-3">
                            <label class="col-form-label">Gender</label>
                            <div class="col-sm-10">
                                <select class="form-select" id="gender" name="gender">
                                    <option value="Male">Male</option>
                                    <option value="Female">Female</option>
                                </select>
                            </div>
                        </div>
                        <div class="col-md-3 mb-3">
                            <label for="number" class="col-form-label">Number</label>
                            <input class="form-control" type="tel" value="" id="number" name="number">
                        </div>
                        <div class="col-md-3 mb-3">
                            <label for="dob" class="col-form-label">Date Of Birth</label>
                            <input class="form-control" type="number" id="dob" name="dob">
                        </div>
                        <div class="col-md-3 mb-3">
                            <label for="age" class="col-form-label">Age</label>
                            <input class="form-control" type="text" id="age" name="age" readonly>
                        </div>
                        <div class="col-md-3 mb-3">
                            <label for="nationality" class="col-form-label">Nationality</label>
                            <input class="form-control" type="text" id="nationality" name="nationality">
                        </div>

                        <div class="col-md-3 mb-3">
                            <label for="place_of_residence" class="col-form-label">Place Of Residence</label>
                            <input class="form-control" type="text" id="place_of_residence" name="place_of_residence">
                        </div>
                        <div class="col-md-3 mb-3">
                            <label for="city" class="col-form-label">City</label>
                            <input class="form-control" type="text" id="city" name="city">
                        </div>
                        <div class="col-md-3 mb-3">
                            <label for="job" class="col-form-label">Job</label>
                            <input class="form-control" type="text" id="job" name="job">
                        </div>
                        <div class="col-md-3 mb-3">
                            <label for="lineage" class="col-form-label">Lineage</label>
                            <input class="form-control" type="text" id="lineage" name="lineage">
                        </div>
                        <div class="col-md-3 mb-3">
                            <label for="skin_color" class="col-form-label">Skin Color</label>
                            <input class="form-control" type="text" id="skin_color" name="skin_color">
                        </div>
                        <div class="col-md-3 mb-3">
                            <label for="exampleFormControlSelect1" class="form-label">martial_status</label>
                            <select class="form-select" id="" aria-label="Default select example" name="martial_status">
                                <option selected="">Martial Status</option>
                                <option value="single">Single</option>
                                <option value="married">Married</option>
                                <option value="windowed">Windowed</option>
                                <option value="divorced">Divorced</option>
                            </select>
                        </div>
                        <div class="col-md-3 mb-3">
                            <label for="number_of_children" class="col-form-label">Number Of Children</label>
                            <input class="form-control" type="number" id="number_of_children" name="number_of_children">
                        </div>
                        <div class="col-md-3 mb-3">
                            <label for="exampleFormControlSelect1" class="form-label">are the children with you</label>
                            <select class="form-select" id="" aria-label="Default select example"
                                name="are_the_children_with_you">
                                <option selected="">Select Option</option>
                                <option value="1">Yes</option>
                                <option value="0">No</option>
                            </select>
                        </div>
                        <div class="col-md-3 mb-3">
                            <label class="col-form-label" for="religious_commitment">Religious Commitment<label>
                                    <input type="text" id="religious_commitment" name="religious_commitment"
                                        class="form-control">
                        </div>
                        <div class="col-md-3 mb-3">
                            <label class="col-form-label" for="financial_situation">Financial Situation</label>
                            <input type="text" id="financial_situation" name="financial_situation" class="form-control">
                        </div>
                        <div class="col-md-3 mb-3">
                            <label class="col-form-label" for="height">Height</label>
                            <input type="number" id="height" name="height" class="form-control">
                        </div>
                        <div class="col-md-3 mb-3">
                            <label class="col-form-label" for="width">Width</label>
                            <input type="number" id="width" name="width" class="form-control">
                        </div>
                        <div class="col-md-3 mb-3">
                            <label class="col-form-label" for="body_tone">Body Tone</label>
                            <input type="text" id="body_tone" name="body_tone" class="form-control">
                        </div>
                        <div class="col-md-3 mb-3">
                            <label class="col-form-label" for="health_status">Health Status</label>
                            <input type="text" id="health_status" name="health_status" class="form-control">
                        </div>
                        <div class="col-md-3 mb-3">
                            <label class="col-form-label" for="write_about_yourself">Write About
                                Yourself</label>
                            <input type="text" id="write_about_yourself" name="write_about_yourself"
                                class="form-control">
                        </div>
                        <!-- <div class="col-md-3 mb-3">
                            <label class="col-form-label" for="qualities_you_are_looking_for">Qualities You Are Looking
                                For</label>
                            <input type="text" id="qualities_you_are_looking_for" name="qualities_you_are_looking_for"
                                class="form-control">
                        </div> -->
                        <div class="col-md-3 mb-3">
                            <label class="col-form-label" for="interests">Interests</label>
                            <input type="text" id="interests" name="interests" class="form-control">
                        </div>
                        <div class="col-md-3 mb-3 mb-3">
                            <label class="col-form-label" for="interests">Status</label>
                            <div class="col-sm-10">
                                <select id="status" name="status" class="form-select">
                                    <option value="1">Active</option>
                                    <option value="0">Inactive</option>
                                    <option value="2">Suspended</option>
                                </select>
                            </div>
                        </div>
                        <div class=" justify-content-end">
                            <div class="col-sm-6">
                                <button type="submit" class="btn btn-primary">Submit</button>
                                <a href="{{route('profiles.index')}}"><button type="button" class="btn btn-secondary">Cancel</button></a>
                            </div>
                        </div>
                </form>
            </div>
        </div>
    </div>
    <!-- Basic with Icons -->
</div>
<script>
        $(document).ready(function(){
            $('#dob').on('change', function() {
            var birthYear = parseInt($('#dob').val());
            if (!isNaN(birthYear)) {
                var today = new Date();
                var currentYear = today.getFullYear();
                var age = currentYear - birthYear;
                // $('#result').html('Your age is: ' + age);
                $('#age').val(age);
            } else {
                $('#result').html('Please enter a valid birth year');
            }
            });
        });
    </script>
@endsection