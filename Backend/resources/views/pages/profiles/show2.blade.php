@extends('layouts/contentNavbarLayout')

@section('title', 'Horizontal Layouts - Forms')

@section('content')
<!-- Content -->

<div class="container">


    <h4 class="py-3 breadcrumb-wrapper mb-4">
        <span class="text-muted fw-light">User Profile /</span> Profile
    </h4>


    <!-- Header -->
    <div class="row">
        <div class="col-12">
            <div class="card mb-6">
                <div class="user-profile-header-banner">
                    <img src="/datingapp/storage/app/public/profile-banner.png" alt="Banner image" class="rounded-top h-auto" width="100%">
                </div>
                <div class="user-profile-header d-flex flex-column flex-sm-row text-sm-start text-center mb-4">
                    <div class="flex-shrink-0 mt-n2 mx-sm-0 mx-auto">
                        <img src="/datingapp/storage/app/public/1.png" alt="user image" class="d-block ms-0 ms-sm-4 rounded-3 user-profile-img" width="60%">
                    </div>
                    <div class="flex-grow-1 mt-3 mt-sm-5">
                        <div class="d-flex align-items-md-end align-items-sm-start align-items-center justify-content-md-between justify-content-start mx-4 flex-md-row flex-column gap-4">
                            <div class="user-profile-info">
                                <h4>{{$data->name}}</h4>
                                <ul class="list-inline mb-0 d-flex align-items-center flex-wrap justify-content-sm-start justify-content-center gap-2">
                                    <li class="list-inline-item fw-medium">
                                        <i class='bx bx-pen'></i> {{$data->views}}
                                    </li>
                                    <li class="list-inline-item fw-medium">
                                        <i class='bx bx-map'></i> {{$data->likes}}
                                    </li>
                                    <li class="list-inline-item fw-medium">
                                        <i class='bx bx-calendar-alt'></i> {{$requestCount}}
                                    </li>
                                </ul>
                            </div>
                            @if($data->profile_status == '1')
                            <a href="javascript:void(0)" class="btn btn-primary text-nowrap">
                                <i class='bx bx-user-check me-1'></i> Active
                            </a>
                            @elseif($data->profile_status == '0')
                            <a href="javascript:void(0)" class="btn btn-secondary text-nowrap">
                                <i class='bx bx-user-check me-1'></i> Inactive
                            </a>
                            @else
                            <a href="javascript:void(0)" class="btn btn-danger text-nowrap">
                                <i class='bx bx-user-check me-1'></i> Suspended
                            </a>
                            @endif
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!--/ Header -->
</br>
    <!-- Navbar pills -->
    <div class="row">
        <div class="col-md-12">
            <ul class="nav nav-pills flex-column flex-sm-row mb-4">
                <li class="nav-item"><a class="nav-link active" href="javascript:void(0);"><i class='bx bx-user me-1'></i> Profile</a></li>
                <!-- <li class="nav-item"><a class="nav-link" href="pages-profile-teams.html"><i class='bx bx-group me-1'></i> Teams</a></li> -->
                <!-- <li class="nav-item"><a class="nav-link" href="pages-profile-projects.html"><i class='bx bx-grid-alt me-1'></i> Projects</a></li> -->
                <!-- <li class="nav-item"><a class="nav-link" href="pages-profile-connections.html"><i class='bx bx-link-alt me-1'></i> Connections</a></li> -->
            </ul>
        </div>
    </div>
    <!--/ Navbar pills -->

    <!-- User Profile Content -->
    <div class="row">
        <div class="col-xl-4 col-lg-5 col-md-5">
            <!-- About User -->
            <div class="card mb-4">
                <div class="card-body">
                    <p class="card-text text-uppercase">About</p>
                    <ul class="list-unstyled mb-4">
                        <li class="d-flex align-items-center mb-3"><i class="bx bx-user bx-xs"></i><span class="fw-medium mx-2">Full Name:</span> <span>{{$data->name}}</span></li>
                        <li class="d-flex align-items-center mb-3"><i class="bx bx-check bx-xs"></i><span class="fw-medium mx-2">Martial Status:</span> <span>{{ $data->martial_status }}</span></li>
                        <li class="d-flex align-items-center mb-3"><i class="bx bx-star bx-xs"></i><span class="fw-medium mx-2">Children With You:</span> <span>
                            @if($data->are_the_children_with_you)
                            Yes
                            @else
                            No
                            @endif
                        </span></li>
                        <li class="d-flex align-items-center mb-3"><i class="bx bx-flag bx-xs"></i><span class="fw-medium mx-2">Gender:</span> <span>{{ $data->gender }}</span></li>
                        <li class="d-flex align-items-center mb-3"><i class="bx bxs-calendar"></i><span class="fw-medium mx-2">Date Of Birth:</span> <span>{{ $data->dob }}</span></li>
                        <li class="d-flex align-items-center mb-3"><i class="bx bx-detail bx-xs"></i><span class="fw-medium mx-2">Nationality:</span> <span>{{$data->nationality}}</span></li>
                        <li class="d-flex align-items-center mb-3"><i class="bx bx-detail bx-xs"></i><span class="fw-medium mx-2">Place Of Residence:</span> <span>{{$data->place_of_residence}}</span></li>
                        <li class="d-flex align-items-center mb-3"><i class="bx bx-detail bx-xs"></i><span class="fw-medium mx-2">City:</span> <span>{{$data->city}}</span></li>
                        <li class="d-flex align-items-center mb-3"><i class="bx bx-detail bx-xs"></i><span class="fw-medium mx-2">Job:</span> <span>{{$data->job}}</span></li>
                        <li class="d-flex align-items-center mb-3"><i class="bx bx-detail bx-xs"></i><span class="fw-medium mx-2">Lineage:</span> <span>{{$data->lineage}}</span></li>
                        <li class="d-flex align-items-center mb-3"><i class="bx bx-detail bx-xs"></i><span class="fw-medium mx-2">Skin Color:</span> <span>{{$data->skin_color}}</span></li>
                        <li class="d-flex align-items-center mb-3"><i class="bx bx-detail bx-xs"></i><span class="fw-medium mx-2">Religious Commitment:</span> <span>{{$data->religious_commitment}}</span></li>
                        <li class="d-flex align-items-center mb-3"><i class="bx bx-detail bx-xs"></i><span class="fw-medium mx-2">Financial Situation:</span> <span>{{$data->financial_situation}}</span></li>
                        <li class="d-flex align-items-center mb-3"><i class="bx bx-detail bx-xs"></i><span class="fw-medium mx-2">Height:</span> <span>{{$data->height}}</span></li>
                        <li class="d-flex align-items-center mb-3"><i class="bx bx-detail bx-xs"></i><span class="fw-medium mx-2">Weight:</span> <span>{{$data->width}}</span></li>
                        <li class="d-flex align-items-center mb-3"><i class="bx bx-detail bx-xs"></i><span class="fw-medium mx-2">Body Tone:</span> <span>{{$data->body_tone}}</span></li>
                        <li class="d-flex align-items-center mb-3"><i class="bx bx-detail bx-xs"></i><span class="fw-medium mx-2">Health Status:</span> <span>{{$data->health_status}}</span></li>
                    </ul>
                    <p class="card-text text-uppercase">Contacts</p>
                    <ul class="list-unstyled mb-4">
                        <li class="d-flex align-items-center mb-3"><i class="bx bx-phone bx-xs"></i><span class="fw-medium mx-2">Contact:</span> <span>{{$data->number}}</span></li>
                        <li class="d-flex align-items-center mb-3"><i class="bx bx-envelope bx-xs"></i><span class="fw-medium mx-2">Email:</span> <span>john.doe@example.com</span></li>
                    </ul>
                    <p class="card-text text-uppercase">Interests</p>
                        <ul class="list-unstyled mb-4">
                            @php
                                $interests = json_decode($data->interests);
                            @endphp
                            <span>{{ $data->interests }}</span>
                        </ul>
                    <p class="card-text text-uppercase">About Self </p>
                    <ul class="list-unstyled mb-4">
                        <li class="d-flex align-items-center mb-3"><i class="bx bx-phone bx-xs"></i><span class="fw-medium mx-2"></span> <span>{{$data->write_about_yourself}}</span></li>
                    </ul>
                </div>
            </div>
            <!--/ About User -->
            <!-- Profile Overview -->
            <div class="card mb-4">
                <div class="card-body">
                    <p class="card-text text-uppercase">Overview</p>
                    <ul class="list-unstyled mb-0">
                        <li class="d-flex align-items-center mb-3"><i class="bx bx-check bx-xs"></i><span class="fw-medium mx-2">Views:</span> <span>{{$data->views}}</span></li>
                        <li class="d-flex align-items-center mb-3"><i class="bx bx-star bx-xs"></i><span class="fw-medium mx-2">Likes:</span> <span>{{$data->likes}}</span></li>
                    </ul>
                </div>
            </div>
            <!--/ Profile Overview -->
        </div>
        <div class="col-xl-8 col-lg-7 col-md-7">
            <!-- Activity Timeline -->
            <div class="card card-action mb-4">
                <div class="card-header align-items-center">
                    <h5 class="card-action-title mb-0"><i class='bx bx-list-ul bx-sm me-2'></i>Notifiactions</h5>
                    <div class="card-action-element btn-pinned">
                        <div class="dropdown">
                            <button type="button" class="btn dropdown-toggle hide-arrow p-0" data-bs-toggle="dropdown" aria-expanded="false"><i class="bx bx-dots-vertical-rounded"></i></button>
                            <ul class="dropdown-menu dropdown-menu-end">
                                <li><a class="dropdown-item" href="javascript:void(0);">Share timeline</a></li>
                                <li><a class="dropdown-item" href="javascript:void(0);">Suggest edits</a></li>
                                <li>
                                    <hr class="dropdown-divider">
                                </li>
                                <li><a class="dropdown-item" href="javascript:void(0);">Report bug</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div class="card-body">
                    <ul class="timeline ms-2">
                        @foreach($notification as $notify)
                        <li class="timeline-item timeline-item-transparent">
                            <span class="timeline-point timeline-point-info"></span>
                            <div class="timeline-event">
                                <div class="timeline-header mb-1">
                                    <h6 class="mb-0">{{$notify->opp_profile->name}}</h6>
                                    <small class="text-muted">
                                   
                                    </small>
                                </div>
                                @if($notify->type == 'profile_visit')
                                <p class="mb-0">Type: Profile Visit</p>
                                @elseif($notify->type == 'profile_like')
                                <p class="mb-0">Type: Profile Like</p>
                                @elseif($notify->type == 'profile_contact_request')
                                <p class="mb-0">Type: Profile Contacts Request</p>
                                @elseif($notify->type == 'contact_request_accepted')
                                <p class="mb-0">Type: Profile Contacts Request Accepted</p>
                                @endif
                            </div>
                        </li>
                        @endforeach
                    </ul>
                </div>
            </div>
            <!--/ Activity Timeline -->
            <div class="row">
                <!-- Connections -->
                <div class="col-lg-12 col-xl-6">
                    <div class="card card-action mb-4">
                        <div class="card-header align-items-center">
                            <h5 class="card-action-title mb-0">Contact Details</h5>
                            <div class="card-action-element btn-pinned">
                                <div class="dropdown">
                                    <button type="button" class="btn dropdown-toggle hide-arrow p-0" data-bs-toggle="dropdown" aria-expanded="false"><i class="bx bx-dots-vertical-rounded"></i></button>
                                    <ul class="dropdown-menu dropdown-menu-end">
                                        <li><a class="dropdown-item" href="javascript:void(0);">Share connections</a></li>
                                        <li><a class="dropdown-item" href="javascript:void(0);">Suggest edits</a></li>
                                        <li>
                                            <hr class="dropdown-divider">
                                        </li>
                                        <li><a class="dropdown-item" href="javascript:void(0);">Report bug</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div class="card-body">
                            <ul class="list-unstyled mb-0">
                            @foreach($profile_contact as $contact)
                                <li class="mb-3">
                                    <div class="d-flex align-items-start">
                                        <div class="d-flex align-items-start">
                                            <div class="me-2">
                                                <h6 class="mb-0">Mobile No:-{{$contact->number}}</h6>
                                                <small class="text-muted"> Notes:- {{$contact->note}}</small>
                                            </div>
                                        </div>
                                        <div class="ms-auto">
                                            <button class="btn btn-label-primary p-1 btn-sm"><i class="bx bx-user"></i></button>
                                        </div>
                                    </div>
                                </li>
                                @endforeach
                            </ul>
                        </div>
                    </div>
                </div>
                <!--/ Connections -->
                <!-- Teams -->
                <div class="col-lg-12 col-xl-6">
                    <div class="card card-action mb-4">
                        <div class="card-header align-items-center">
                            <h5 class="card-action-title mb-0">Requests</h5>
                            <div class="card-action-element btn-pinned">
                                <div class="dropdown">
                                    <button type="button" class="btn dropdown-toggle hide-arrow p-0" data-bs-toggle="dropdown" aria-expanded="false"><i class="bx bx-dots-vertical-rounded"></i></button>
                                    <ul class="dropdown-menu dropdown-menu-end">
                                        <li><a class="dropdown-item" href="javascript:void(0);">Share teams</a></li>
                                        <li><a class="dropdown-item" href="javascript:void(0);">Suggest edits</a></li>
                                        <li>
                                            <hr class="dropdown-divider">
                                        </li>
                                        <li><a class="dropdown-item" href="javascript:void(0);">Report bug</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div class="card-body">
                            <ul class="list-unstyled mb-0">
                            @foreach($request as $req)
                                <li class="mb-3">
                                    <div class="d-flex align-items-center">
                                        <div class="d-flex align-items-start">
                                            
                                            <div class="me-2">
                                                <h6 class="mb-0">Requester Name:- {{$req->request_view->name}}</h6>
                                                <!-- <small class="text-muted">72 Members</small> -->
                                            </div>
                                        </div>
                                        <div class="ms-auto">
                                            @if($req->status == 'accepted')
                                            <a href="javascript:;"><span class="badge bg-label-success">{{$req->status}}</span></a>
                                            @elseif($req->status == 'pending')
                                            <a href="javascript:;"><span class="badge bg-label-secondary">{{$req->status}}</span></a>
                                            @else
                                            <a href="javascript:;"><span class="badge bg-label-danger">{{$req->status}}</span></a>
                                            @endif
                                        </div>
                                    </div>
                                </li>
                            @endforeach
                            </ul>
                        </div>
                    </div>
                </div>
                <!--/ Teams -->
            </div>
            <!-- Projects table -->
            <div class="card mb-4">
                <h5 class="card-header">Subscription Detials</h5>
                <div class="table-responsive mb-3">
                    <table class="table datatable-project">
                        <thead class="table-light">
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
                                <td>
                                    @if($profile->subscription->plan_name)
                                    {{ $profile->subscription->plan_name }}
                                    @endif                                    
                                </td>
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
            <!--/ Projects table -->
        </div>
    </div>
    <!--/ User Profile Content -->


</div>
<!--/ Content -->
@endsection