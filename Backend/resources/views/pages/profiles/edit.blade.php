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
                <div class="d-flex justify-content-center">
                <img src="https://mdbootstrap.com/img/Photos/Others/placeholder-avatar.jpg" class="rounded-circle" alt="example placeholder" style="width: 100px;" />
                </div>
                <form method="post" action="{{ route('profiles.update') }}">
                    @csrf
                    <input type="hidden" name="id" value="{{$data->id}}">
                    <div class="row mb-3">
                        <div class="col-md-4 mb-3">
                            <label class="col-form-label" for="name">Name</label>
                            <input type="text" class="form-control" id="plan_name" name="name" value="{{$data->name}}">
                        </div>
                        <div class="col-md mb-3">
                            <label class="col-form-label">Gender</label>
                            <div class="col-sm-10">
                                <select class="form-select" id="gender" name="gender">
                                    <option value="male" {{ $data->gender == 'male' ? 'selected' : '' }}> Male</option>
                                    <option value="female" {{ $data->gender == 'female' ? 'selected' : '' }}> Female</option>
                                </select>
                            </div>
                        </div>
                        <div class="col-md-3 mb-3">
                            <label for="number" class="col-form-label">Number</label>
                            <input class="form-control" type="tel" value="{{$data->number}}" id="number" name="number">
                        </div>
                        <!-- <div class="col-md-3 mb-3">
                            <label for="dob" class="col-form-label">Date Of Birth</label>
                            <input class="form-control" type="number" id="dob" name="dob" min="1900" max="9999" placeholder="YYYY" value="{{$data->dob}}">
                        </div> -->
                        <div class="col-md-3 mb-3">
                            <label for="age" class="col-form-label">Age</label>
                            <input class="form-control" type="text" id="age" name="age" readonly value="{{$data->age}}">
                        </div>
                        <!-- <div class="col-md-3 mb-3">
                            <label for="nationality" class="col-form-label">Nationality</label>
                            <input class="form-control" type="text" id="nationality" name="nationality"  value="{{$data->nationality}}">
                        </div> -->
                        <div class="col-md-3 mb-3">
                            <label for="exampleFormControlSelect1" class="form-label">Nationality</label>
                            <select class="country" id="country" aria-label="Default select example" name="nationality">
                                @foreach($countrylist as $country)
                                <option value="{{ $country->name }}" {{ $data->nationality == $country->name ? 'selected' : '' }}>{{ $country->name }}</option>
                                @endforeach
                            </select>
                        </div>
                        <div class="col-md-3 mb-3">
                            <label for="exampleFormControlSelect1" class="form-label">Place Of Residence</label>
                            <select class="por" id="por" aria-label="Default select example" name="place_of_residence">
                                @foreach($porlist as $list)
                                <option value="{{ $list->name}}" {{ $data->place_of_residence == $list->name ? 'selected' : ''}}>{{ $list->name }}</option>
                                @endforeach
                            </select>
                        </div>
                        <div class="col-md-3 mb-3">
                            <label for="exampleFormControlSelect1" class="form-label">City</label>
                            <select class="city" id="city" aria-label="Default select example" name="city">
                                @foreach($citylist as $city)
                                <option value="{{ $city->name}}" {{ $data->city == $city->name ? 'selected' : ''}}>{{ $city->name }}</option>
                                @endforeach
                            </select>
                        </div>
                        <div class="col-md-3 mb-3">
                            <label for="job" class="col-form-label">Job</label>
                            <input class="form-control" type="text" id="job" name="job" value="{{$data->job}}">
                        </div>
                        <div class="col-md-3 mb-3">
                            <label for="name_ar" class="col-form-label">Nationality AR</label>
                            <input class="form-control" id="country_ar" name="nationality_ar" type="text" value="{{$data->nationality_ar}}" readonly>
                        </div>
                        <div class="col-md-3 mb-3">
                            <label for="name_ar" class="col-form-label">PLACE OF RESIDENCE AR</label>
                            <input class="form-control" type="text"  id="por_ar" name="por_ar" value="{{$data->por_ar}}" readonly>
                        </div>
                        <div class="col-md-3 mb-3">
                            <label for="name_ar" class="col-form-label">City AR</label>
                            <input class="form-control" type="text"  id="city_ar" name="city_ar" value="{{$data->city_ar}}" readonly>
                        </div>
                        <div class="col-md-3 mb-3">
                            <label for="lineage" class="col-form-label">Lineage</label>
                            <input class="form-control" type="text" id="lineage" name="lineage" value="{{$data->lineage}}">
                        </div>
                        <div class="col-md-3 mb-3">
                            <label for="skin_color" class="col-form-label">Skin Color</label>
                            <input class="form-control" type="text" id="skin_color" name="skin_color" value="{{$data->skin_color}}">
                        </div>
                        <div class="col-md-3 mb-3">
                            <label for="exampleFormControlSelect1" class="form-label">martial_status</label>
                            <select class="form-select" id="martial_status" aria-label="Default select example" name="martial_status">
                                <option selected="">Martial Status</option>
                                <option value="single" {{ $data->martial_status == 'single' ? 'selected' : '' }}>Single</option>
                                <option value="married" {{ $data->martial_status == 'married' ? 'selected' : '' }}>Married</option>
                                <option value="windowed" {{ $data->martial_status == 'windowed' ? 'selected' : '' }}>Windowed</option>
                                <option value="divorced" {{ $data->martial_status == 'divorced' ? 'selected' : '' }}>Divorced</option>
                            </select>
                        </div>
                        <div class="col-md-3 mb-3">
                            <label for="exampleFormControlSelect1" class="form-label">are the children with you</label>
                            <select class="form-select" id="" aria-label="Default select example" name="are_the_children_with_you">
                                <option selected="">Select Option</option>
                                <option value="1" {{ $data->are_the_children_with_you == '1' ? 'selected' : '' }}>Yes</option>
                                <option value="0" {{ $data->are_the_children_with_you == '0' ? 'selected' : '' }}>No</option>
                            </select>
                        </div>
                        <div class="col-md-3 mb-3">
                            <label for="number_of_children" class="col-form-label">Number Of Children</label>
                            <input class="form-control" type="number" id="number_of_children" name="number_of_children" value="{{$data->number_of_children}}">
                        </div>
                        <div class="col-md-3 mb-3">
                            <label class="col-form-label" for="religious_commitment">Religious Commitment<label>
                            <input class="form-control" type="text" id="religious_commitment" name="religious_commitment" value="{{$data->religious_commitment}}">
                        </div>
                        <div class="col-md-3 mb-3">
                            <label class="col-form-label" for="financial_situation">Financial Situation</label>
                            <input type="text" id="financial_situation" name="financial_situation" class="form-control" value="{{$data->financial_situation}}">
                        </div>
                        <div class="col-md-3 mb-3">
                            <label class="col-form-label" for="height">Height</label>
                            <input type="number" id="height" name="height" class="form-control" value="{{$data->height}}">
                        </div>
                        <div class="col-md-3 mb-3">
                            <label class="col-form-label" for="width">Width</label>
                            <input type="number" id="width" name="width" class="form-control" value="{{$data->width}}">
                        </div>
                        <div class="col-md-3 mb-3">
                            <label class="col-form-label" for="body_tone">Body Tone</label>
                            <input type="text" id="body_tone" name="body_tone" class="form-control" value="{{$data->body_tone}}">
                        </div>
                        <div class="col-md-3 mb-3">
                            <label class="col-form-label" for="health_status">Health Status</label>
                            <input type="text" id="health_status" name="health_status" class="form-control" value="{{$data->health_status}}">
                        </div>
                        <div class="col-md-3 mb-3">
                            <label class="col-form-label" for="write_about_yourself">Write About
                                Yourself</label>
                            <input type="text" id="write_about_yourself" name="write_about_yourself" class="form-control" value="{{$data->write_about_yourself}}">
                        </div>
                        <!-- <div class="col-md-3 mb-3">
                            <label class="col-form-label" for="qualities_you_are_looking_for">Qualities You Are Looking
                                For</label>
                            <input type="text" id="qualities_you_are_looking_for" name="qualities_you_are_looking_for"
                                class="form-control" value="{{$data->qualities_you_are_looking_for}}">
                        </div> -->
                        <div class="col-md-3 mb-3">
                            <label class="col-form-label" for="interests">Interests</label>
                            <input type="text" id="interests" name="interests" class="form-control" value="{{$data->interests}}">
                        </div>

                        <div class="col-md-3 mb-3">
                            <label class="col-form-label">Type of marriage </label>
                                <select class="form-select" id="type_of_marriage" name="type_of_marriage">
                                    <option value="the only wife" {{ $data->type_of_marriage == 'the only wife' ? 'selected' : '' }}> The only wife</option>
                                    <option value="no objection of married person" {{ $data->type_of_marriage == 'no objection of married person' ? 'selected' : '' }}> No objection of married person </option>
                                </select>
                        </div>

                        <div class="col-md-3 mb-3">
                            <label class="col-form-label">Type of marriage AR </label>
                                <select class="form-select" id="type_of_marriage_ar" name="type_of_marriage_ar">
                                    <option value="الزوجة الوحيدة" {{ $data->type_of_marriage == 'الزوجة الوحيدة' ? 'selected' : '' }}> الزوجة الوحيدة</option>
                                    <option value="لا مانع من المتزوج" {{ $data->type_of_marriage == 'لا مانع من المتزوج' ? 'selected' : '' }}> لا مانع من المتزوج </option>
                                </select>
                        </div>
                        
                        <div class="col-md-3 mb-3">
                            <label class="col-form-label">Type of Hijab </label>
                                <select class="form-select" id="type_of_hijab" name="type_of_hijab">
                                    <option value="niqab" {{ $data->type_of_hijab == 'niqab' ? 'selected' : '' }}> Niqab</option>
                                    <option value="covered face" {{ $data->type_of_hijab == 'covered face' ? 'selected' : '' }}> Covered face</option>
                                    <option value="hijab & abaya shown face" {{ $data->type_of_hijab == 'hijab & abaya shown face' ? 'selected' : '' }}> hijab & abaya shown face</option>
                                    <option value="only hijab" {{ $data->type_of_hijab == 'only hijab' ? 'selected' : '' }}>only hijab </option>
                                    <option value="no hijab" {{ $data->type_of_hijab == 'no hijab' ? 'selected' : '' }}> No hijab</option>
                                </select>
                        </div>

                        <div class="col-md-3 mb-3">
                            <label class="col-form-label">Type of Hijab AR </label>
                                <select class="form-select" id="type_of_hijab_ar" name="type_of_hijab_ar">
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
                                <select id="status" name="status" class="form-select">
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
                </form>
            </div>
        </div>
    </div>
    <!-- Basic with Icons -->
</div>
<script>
    $(document).ready(function() {
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
        $(".country").select2({
            theme: "bootstrap-5",
            width: $(this).data('width') ? $(this).data('width') : $(this).hasClass('w-100') ? '100%' : 'style',
            placeholder: $(this).data('placeholder'),
        });
        $(".city").select2({
            theme: "bootstrap-5",
            width: $(this).data('width') ? $(this).data('width') : $(this).hasClass('w-100') ? '100%' : 'style',
            placeholder: $(this).data('placeholder'),
        });
        $(".por").select2({
            theme: "bootstrap-5",
            width: $(this).data('width') ? $(this).data('width') : $(this).hasClass('w-100') ? '100%' : 'style',
            placeholder: $(this).data('placeholder'),
        });

        $('#country').on('change', function() {
            var csrfToken = $('meta[name="csrf-token"]').attr('content');
            var countryName = $('#country').val();
            // var countryName_ar = $('#country_ar').val();
            // console.log(countryName);
            $.ajax({
                type: "POST",
                url: "{{ route('ajax.nationality_ar') }}",
                data: {
                    countryName: countryName,
                    _token: csrfToken 
                },
                success: function(response) {
                    // console.log(response.res);
                    $('#country_ar').val(response.res.name_ar);
                },
                error: function(error) {
                    
                }
            });
        });

        $('#por').on('change', function() {
            var csrfToken = $('meta[name="csrf-token"]').attr('content');
            var por = $('#por').val();
            $.ajax({
                type: "POST",
                url: "{{ route('ajax.nationality_ar') }}",
                data: {
                    countryName: por,
                    _token: csrfToken 
                },
                success: function(response) {
                    // console.log(response.name_ar);
                    $('#por_ar').val(response.res.name_ar);
                },
                error: function(error) {
                    
                }
            });
        });

        $('#city').on('change', function() {
            var csrfToken = $('meta[name="csrf-token"]').attr('content');
            var cityName = $('#city').val();
            $.ajax({
                type: "POST",
                url: "{{ route('ajax.nationality_ar') }}",
                data: {
                    cityName: cityName,
                    _token: csrfToken 
                },
                success: function(response) {
                    // console.log(response.city_ar);
                    $('#city_ar').val(response.city_ar.name_ar);
                },
                error: function(error) {  
                }
            });
        });

        $('#martial_status').on('change', function(){
            var status = $('#martial_status').val();
            console.log(status);
            if(status == 'single'){
                console.log('incondion');
                $('#number_of_children').prop('disabled', true);
                $('#number_of_children').val(0);
            }
            else{
                $('#number_of_children').prop('disabled', false);
            }
        });

        function syncMarriageType() {
            var englishValue = $('#type_of_marriage').val();
            if (englishValue === 'the only wife') {
                $('#type_of_marriage_ar').val('الزوجة الوحيدة');
            } else if (englishValue === 'no objection of married person') {
                $('#type_of_marriage_ar').val('لا مانع من المتزوج');
            }
        }

        function syncHijabType() {
            var englishValue = $('#type_of_hijab').val();
            switch (englishValue) {
                case 'niqab':
                    $('#type_of_hijab_ar').val('النقاب');
                    break;
                case 'covered face':
                    $('#type_of_hijab_ar').val('وجه مغطى');
                    break;
                case 'hijab & abaya shown face':
                    $('#type_of_hijab_ar').val('الحجاب والعباءة مبينة الوجه');
                    break;
                case 'only hijab':
                    $('#type_of_hijab_ar').val('الحجاب فقط');
                    break;
                case 'no hijab':
                    $('#type_of_hijab_ar').val('لا الحجاب');
                    break;
            }
        }

        $('#type_of_marriage').change(function() {
            syncMarriageType();
        });

        $('#type_of_hijab').change(function() {
            syncHijabType();
        });

        // Call the functions on page load to synchronize the initial values
        syncMarriageType();
        syncHijabType();
    });
</script>

@endsection