@extends('layouts/contentNavbarLayout')

@section('title', ' Horizontal Layouts - Forms')

@section('content')
<h4 class="fw-bold py-3 mb-4"><span class="text-muted fw-light">Profiles/</span>Profiles - Edit</h4>

<!-- Basic Layout & Basic with Icons -->
<div class="row">
    <!-- Basic Layout -->
    <div class="col-xxl">
        <div class="card mb-4">
            <div class="card-header d-flex align-items-center justify-content-between">
                <!--  <h5 class="mb-0">Basic Layout</h5> <small class="text-muted float-end">Default label</small> -->
            </div>
            <div class="card-body">
                <div class="col-xl-12">
                    <h6 class="text-muted">Profiles Details</h6>
                    <div class="nav-align-top mb-4">
                        <ul class="nav nav-pills mb-3 nav-fill" role="tablist">
                            <li class="nav-item">
                                <button type="button" class="nav-link active" role="tab" data-bs-toggle="tab" data-bs-target="#navs-pills-justified-home" aria-controls="navs-pills-justified-home" aria-selected="true"><i class="tf-icons bx bx-home"></i> Profile <span class="badge rounded-pill badge-center h-px-20 w-px-20 "></span></button>
                            </li>
                            <li class="nav-item">
                                <button type="button" class="nav-link" role="tab" data-bs-toggle="tab" data-bs-target="#navs-pills-justified-profile" aria-controls="navs-pills-justified-profile" aria-selected="false"><i class="tf-icons bx bx-user"></i> Details</button>
                            </li>
                            <li class="nav-item">
                                <button type="button" class="nav-link" role="tab" data-bs-toggle="tab" data-bs-target="#navs-pills-justified-messages" aria-controls="navs-pills-justified-messages" aria-selected="false"><i class="tf-icons bx bx-message-square"></i> Subscriptions</button>
                            </li>
                        </ul>
                        <div class="tab-content">
                            <div class="tab-pane fade show active" id="navs-pills-justified-home" role="tabpanel">

                                <div class="d-flex justify-content-center p-2">
                                    <img src="https://mdbootstrap.com/img/Photos/Others/placeholder-avatar.jpg" class="rounded-circle" alt="example placeholder" style="width: 100px;" />
                                </div>
                                <form method="post" action="">
                                    @csrf
                                    <input type="hidden" value="{{$data->id}}">
                                    <div class="row mb-3">
                                        <div class="col-md-4 mb-3">
                                            <label class="col-form-label" for="name">Name</label>
                                            <input type="text" class="form-control" id="plan_name" name="name" value="{{$data->name}}" readonly>
                                        </div>
                                        <div class="col-md mb-3">
                                            <label class="col-form-label">Gender</label>
                                            <div class="col-sm-10">
                                                <select class="form-select" id="gender" name="gender" disabled>
                                                    <option value="male" {{ $data->gender == 'male' ? 'selected' : '' }}> Male</option>
                                                    <option value="female" {{ $data->gender == 'female' ? 'selected' : '' }}> Female
                                                    </option>
                                                </select>
                                            </div>
                                        </div>
                                        <div class="col-md-3 mb-3">
                                            <label for="number" class="col-form-label">Number</label>
                                            <input class="form-control" type="tel" value="{{$data->number}}" id="number" name="number" readonly>
                                        </div>
                                        <!-- <div class="col-md-3 mb-3">
                                            <label for="dob" class="col-form-label">Date Of Birth</label>
                                            <input class="form-control" type="date" id="dob" name="dob"
                                                value="{{$data->dob}}" readonly>
                                        </div> -->
                                        <div class="col-md-3 mb-3">
                                            <label for="age" class="col-form-label">Age</label>
                                            <input class="form-control" type="text" id="age" name="age" readonly value="{{$data->age}}" readonly>
                                        </div>
                                        <div class="col-md-3 mb-3">
                                            <label for="nationality" class="col-form-label">Nationality</label>
                                            <input class="form-control" type="text" id="nationality" name="nationality" value="{{$data->nationality}}" readonly>
                                        </div>

                                        <div class="col-md-3 mb-3">
                                            <label for="place_of_residence" class="col-form-label">Place Of
                                                Residence</label>
                                            <input class="form-control" type="text" id="place_of_residence" name="place_of_residence" value="{{$data->place_of_residence}}" readonly>
                                        </div>
                                        <div class="col-md-3 mb-3">
                                            <label for="city" class="col-form-label">City</label>
                                            <input class="form-control" type="text" id="city" name="city" value="{{$data->city}}" readonly>
                                        </div>
                                        <div class="col-md-3 mb-3">
                                            <label for="job" class="col-form-label">Job</label>
                                            <input class="form-control" type="text" id="job" name="job" value="{{$data->job}}" readonly>
                                        </div>
                                        <div class="col-md-3 mb-3">
                                            <label for="name_ar" class="col-form-label">Nationality AR</label>
                                            <input class="form-control" id="country_ar" name="nationality_ar" type="text" value="{{$data->nationality_ar}}" readonly>
                                        </div>
                                        <div class="col-md-3 mb-3">
                                            <label for="name_ar" class="col-form-label">PLACE OF RESIDENCE AR</label>
                                            <input class="form-control" type="text" id="por_ar" name="por_ar" value="{{$data->por_ar}}" readonly>
                                        </div>
                                        <div class="col-md-3 mb-3">
                                            <label for="name_ar" class="col-form-label">City AR</label>
                                            <input class="form-control" type="text" id="city_ar" name="city_ar" value="{{$data->city_ar}}" readonly>
                                        </div>
                                        <div class="col-md-3 mb-3">
                                            <label for="lineage" class="col-form-label">Lineage</label>
                                            <input class="form-control" type="text" id="lineage" name="lineage" value="{{$data->lineage}}" readonly>
                                        </div>
                                        <div class="col-md-3 mb-3">
                                            <label for="skin_color" class="col-form-label">Skin Color</label>
                                            <input class="form-control" type="text" id="skin_color" name="skin_color" value="{{$data->skin_color}}" readonly>
                                        </div>
                                        <div class="col-md-3 mb-3">
                                            <label for="exampleFormControlSelect1" class="form-label">martial_status</label>
                                            <select class="form-select" id="" aria-label="Default select example" name="martial_status" disabled>
                                                <option selected="">Martial Status</option>
                                                <option value="single" {{ $data->martial_status == 'single' ? 'selected' : '' }}>Single
                                                </option>
                                                <option value="married" {{ $data->martial_status == 'married' ? 'selected' : '' }}>
                                                    Married</option>
                                                <option value="windowed" {{ $data->martial_status == 'windowed' ? 'selected' : '' }}>
                                                    Windowed</option>
                                                <option value="divorced" {{ $data->martial_status == 'divorced' ? 'selected' : '' }}>
                                                    Divorced</option>
                                            </select>
                                        </div>
                                        <div class="col-md-3 mb-3">
                                            <label for="number_of_children" class="col-form-label">Number Of
                                                Children</label>
                                            <input class="form-control" type="number" id="number_of_children" name="number_of_children" value="{{$data->number_of_children}}" readonly>
                                        </div>
                                        <div class="col-md-3 mb-3">
                                            <label for="exampleFormControlSelect1" class="form-label">are the children
                                                with you</label>
                                            <select class="form-select" id="" aria-label="Default select example" name="are_the_children_with_you" disabled>
                                                <option selected="">Select Option</option>
                                                <option value="1" {{ $data->are_the_children_with_you == '1' ? 'selected' : '' }}>Yes
                                                </option>
                                                <option value="0" {{ $data->are_the_children_with_you == '0' ? 'selected' : '' }}>No
                                                </option>
                                            </select>
                                        </div>
                                        <div class="col-md-3 mb-3">
                                            <label class="col-form-label" for="religious_commitment">Religious
                                                Commitment<label>
                                                    <input type="text" id="religious_commitment" name="religious_commitment" class="form-control" value="{{$data->religious_commitment}}" readonly>
                                        </div>
                                        <div class="col-md-3 mb-3">
                                            <label class="col-form-label" for="financial_situation">Financial
                                                Situation</label>
                                            <input type="text" id="financial_situation" name="financial_situation" class="form-control" value="{{$data->financial_situation}}" readonly>
                                        </div>
                                        <div class="col-md-3 mb-3">
                                            <label class="col-form-label" for="height">Height</label>
                                            <input type="number" id="height" name="height" class="form-control" value="{{$data->height}}" readonly>
                                        </div>
                                        <div class="col-md-3 mb-3">
                                            <label class="col-form-label" for="width">Width</label>
                                            <input type="number" id="width" name="width" class="form-control" value="{{$data->width}}" readonly>
                                        </div>
                                        <div class="col-md-3 mb-3">
                                            <label class="col-form-label" for="body_tone">Body Tone</label>
                                            <input type="text" id="body_tone" name="body_tone" class="form-control" value="{{$data->body_tone}}" readonly>
                                        </div>
                                        <div class="col-md-3 mb-3">
                                            <label class="col-form-label" for="health_status">Health Status</label>
                                            <input type="text" id="health_status" name="health_status" class="form-control" value="{{$data->health_status}}" readonly>
                                        </div>
                                        <div class="col-md-3 mb-3">
                                            <label class="col-form-label" for="write_about_yourself">Write About
                                                Yourself</label>
                                            <input type="text" id="write_about_yourself" name="write_about_yourself" class="form-control" value="{{$data->write_about_yourself}}" readonly>
                                        </div>
                                        <!-- <div class="col-md-3 mb-3">
                                            <label class="col-form-label" for="qualities_you_are_looking_for">Qualities
                                                You Are Looking
                                                For</label>
                                            <input type="text" id="qualities_you_are_looking_for"
                                                name="qualities_you_are_looking_for" class="form-control"
                                                value="{{$data->qualities_you_are_looking_for}}" readonly>
                                        </div> -->
                                        <div class="col-md-3 mb-3">
                                            <label class="col-form-label" for="interests">Interests</label>
                                            <input type="text" id="interests" name="interests" class="form-control" value="{{$data->interests}}" readonly>
                                        </div>
                                        <div class="col-md-3 mb-3">
                            <label class="col-form-label">Type of marriage </label>
                                <select class="form-select" id="type_of_marriage" name="type_of_marriage" disabled>
                                    <option value="the only wife" {{ $data->type_of_marriage == 'the only wife' ? 'selected' : '' }}> The only wife</option>
                                    <option value="no objection of married person" {{ $data->type_of_marriage == 'no objection of married person' ? 'selected' : '' }}> No objection of married person </option>
                                </select>
                        </div>

                        <div class="col-md-3 mb-3">
                            <label class="col-form-label">Type of marriage AR </label>
                                <select class="form-select" id="type_of_marriage_ar" name="type_of_marriage_ar" disabled>
                                    <option value="الزوجة الوحيدة" {{ $data->type_of_marriage == 'الزوجة الوحيدة' ? 'selected' : '' }}> الزوجة الوحيدة</option>
                                    <option value="لا مانع من المتزوج" {{ $data->type_of_marriage == 'لا مانع من المتزوج' ? 'selected' : '' }}> لا مانع من المتزوج </option>
                                </select>
                        </div>
                        
                        <div class="col-md-3 mb-3">
                            <label class="col-form-label">Type of Hijab </label>
                                <select class="form-select" id="type_of_hijab" name="type_of_hijab" disabled>
                                    <option value="niqab" {{ $data->type_of_hijab == 'niqab' ? 'selected' : '' }}> Niqab</option>
                                    <option value="covered face" {{ $data->type_of_hijab == 'covered face' ? 'selected' : '' }}> Covered face</option>
                                    <option value="hijab & abaya shown face" {{ $data->type_of_hijab == 'hijab & abaya shown face' ? 'selected' : '' }}> hijab & abaya shown face</option>
                                    <option value="only hijab" {{ $data->type_of_hijab == 'only hijab' ? 'selected' : '' }}>only hijab </option>
                                    <option value="no hijab" {{ $data->type_of_hijab == 'no hijab' ? 'selected' : '' }}> No hijab</option>
                                </select>
                        </div>

                        <div class="col-md-3 mb-3">
                            <label class="col-form-label">Type of Hijab AR </label>
                                <select class="form-select" id="type_of_hijab_ar" name="type_of_hijab_ar" disabled>
                                    <option value="النقاب" {{ $data->type_of_hijab == 'النقاب' ? 'selected' : '' }}> النقاب</option>
                                    <option value="وجه مغطى" {{ $data->type_of_hijab == 'وجه مغطى' ? 'selected' : '' }}> وجه مغطى</option>
                                    <option value="الحجاب والعباءة مبينة الوجه" {{ $data->type_of_hijab == 'الحجاب والعباءة مبينة الوجه' ? 'selected' : '' }}> الحجاب والعباءة مبينة الوجه</option>
                                    <option value="الحجاب فقط" {{ $data->type_of_hijab == 'الحجاب فقط' ? 'selected' : '' }}>الحجاب فقط </option>
                                    <option value="لا الحجاب" {{ $data->type_of_hijab == 'لا الحجاب' ? 'selected' : '' }}> لا الحجاب</option>
                                </select>
                        </div>
                                        <div class="col-md-3 mb-3 mb-3">
                                            <label class="col-form-label" for="interests">Status</label>
                                            <div class="col-sm-10">
                                                <select id="status" class="form-select" disabled>
                                                    <option value="1" {{ $data->profile_status == '1' ? 'selected' : '' }}>Active</option>
                                                    <option value="0" {{ $data->profile_status == '0' ? 'selected' : '' }}>Inactive</option>
                                                    <option value="2" {{ $data->profile_status == '2' ? 'selected' : '' }}>Suspended</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div class=" justify-content-end">
                                            <div class="col-sm-6">
                                                <button type="submit" class="btn btn-primary">Submit</button>
                                                <a href="{{route('profiles.index')}}"><button type="button" class="btn btn-secondary">Cancel</button></a>
                                            </div>
                                        </div>
                                    </div>
                                </form>
                            </div>
                            <div class="tab-pane fade" id="navs-pills-justified-profile" role="tabpanel">
                                <div class="">
                                    <div class="row">
                                        <div class="col-md-6">
                                            <div class="card border">
                                                <div class="card-header">
                                                    <h5 class="card-title">Notification</h5>
                                                </div>
                                                <div class="demo-inline-spacing mt-3">
                                                    <div class="list-group list-group list-group-flush">
                                                        @foreach($notification as $notify)
                                                        <a href="javascript:void(0);" class="list-group-item list-group-item-action">
                                                            <b>{{$notify->opp_profile->name}}</b></br>@if($notify->type
                                                            == 'profile_visit')
                                                            <p>Type: Profile Visit</p>
                                                            @elseif($notify->type == 'profile_like')
                                                            <p>Type: Profile Like</p>
                                                            @elseif($notify->type == 'profile_contact_request')
                                                            <p>Type: Profile Contacts Request</p>
                                                            @elseif($notify->type == 'contact_request_accepted')
                                                            <p>Type: Profile Contacts Request Accepted</p>
                                                            @endif
                                                            <p>{{$notify->created_at}}</p>
                                                        </a>
                                                        @endforeach
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-md-6">
                                            <div class="card border mb-4">
                                                <div class="card-header">
                                                    <strong>
                                                        <h5 class="card-title">REQUEST</h5>
                                                    </strong>
                                                </div>
                                                <div class="demo-inline-spacing ">
                                                    <div class="list-group list-group list-group-flush">
                                                        @foreach($request as $req)
                                                        <a href="javascript:void(0);" class="list-group-item list-group-item-action">
                                                            <b>Requester Name:- {{$req->request_view->name}}</b>
                                                            <br>
                                                            Request Status:- {{$req->status}}
                                                            <br>
                                                            Date:- {{$req->created_at}}
                                                        </a>
                                                        @endforeach
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="card border mb-4">
                                                <div class="card-header">
                                                    <h5 class="card-title">PROFILE CONTACTS</h5>
                                                </div>
                                                <div class="demo-inline-spacing ">
                                                    <div class="list-group list-group list-group-flush">
                                                        @foreach($profile_contact as $contact)
                                                        <a href="javascript:void(0);" class="list-group-item list-group-item-action">
                                                            <b>Mobile No:-{{$contact->number}}</b><br>
                                                            Notes:- {{$contact->note}}
                                                            <br>
                                                        </a>
                                                        @endforeach
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="tab-pane fade" id="navs-pills-justified-messages" role="tabpanel">
                                <div class="col-md-12">
                                    <div class="card border p-2">
                                        <div class="card-header">
                                            <h5 class="card-title">Subscription Detials</h5>
                                        </div>


                                        <table class="table table-striped table-bordered dataTable display nowrap" id="dataTables">
                                            <thead>
                                                <tr>
                                                    <th>No</th>
                                                    <th>Subscription Name</th>
                                                    <th>Start Date</th>
                                                    <th>End Date</th>
                                                    <th>Renewal Date</th>
                                                    <th>Status</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                @foreach ($subscription as $key => $profile)
                                                <tr>
                                                    <td>{{$key + 1}}</td>
                                                    <td>{{ $profile->subscriptions->plan_name }}</td>
                                                    <td>{{ \Carbon\Carbon::parse($profile->strt_date)->format('d-m-Y') }}</td>
                                                    <td>{{ \Carbon\Carbon::parse($profile->end_date)->format('d-m-Y') }}</td>
                                                    <td>{{ \Carbon\Carbon::parse($profile->renewal_date)->format('d-m-Y') }}</td>
                                                    <td>{{ $profile->status }}</td>
                                                </tr>
                                                @endforeach
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!-- Basic with Icons -->
</div>
<script>
    $(document).ready(function() {
        new DataTable('#dataTables');
    });

    $(document).ready(function() {
        $('#dob').on('change', function() {
            var birthdate = $('#dob').val();
            if (birthdate != '') {
                var today = new Date();
                var dob = new Date(birthdate);
                var age = today.getFullYear() - dob.getFullYear();
                var m = today.getMonth() - dob.getMonth();
                if (m < 0 || (m === 0 && today.getDate() < dob.getDate())) {
                    age--;
                }
                console.log(age);
                $('#age').val(age);
            } else {
                $('#result').html('Please enter your birthdate');
            }
        });
    });
</script>
@endsection