@extends('layouts/contentNavbarLayout')
@section('title', 'Horizontal Layouts - Forms')
@section('content')

<div class="card p-1">
    <div class="container">
        <h4 class="fw-bold py-3 mb-4"><span class="text-muted fw-light">Profiles/</span>Profiles</h4>
    </div>
</div>
<!-- @if(session('success'))
<div class="alert alert-danger" role="alert">
    {{ session('success') }}
</div>
@endif -->
</br>
<div class="card p-2">
    <div id="bootstrapTable_wrapper" class="dataTables_wrapper form-inline dt-bootstrap">
        <div class="row">
            <div class="col-md-12">
                <div class="panel panel-default">
                    <div class="demo-inline-spacing-end d-flex justify-content-end m-2">
                        <a href="{{route('profiles.create')}}" class="btn btn-primary">Add New Profiles</a>
                    </div>
                    <div class="panel-body">
                        <table class="table table-striped table-bordered dataTable display nowrap" id="dataTables">
                            <thead>
                                <tr>
                                    <th>ID</th>
                                    <th>Name</th>
                                    <th>Gender</th>
                                    <th>Number</th>
                                    <th>Age</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                @foreach ($profiles as $key => $profile)
                                <tr>
                                    <td>{{$key + 1}}</td>
                                    <td>{{ $profile->name }}</td>
                                    <td>{{ $profile->gender }}</td>
                                    <td>{{ $profile->number }}</td>
                                    <td>{{ $profile->age }}</td>
                                    <td>
                                        <div class="dropdown">
                                            <button type="button" class="btn p-0 dropdown-toggle hide-arrow"
                                                data-bs-toggle="dropdown"><i
                                                    class="bx bx-dots-vertical-rounded"></i></button>
                                            <div class="dropdown-menu">
                                                <a class="dropdown-item"
                                                    href="{{ route('profiles.edit', ['id' => $profile->id]) }}"><i
                                                        class="bx bx-edit-alt me-1"></i> Edit</a>
                                                <a class="dropdown-item"
                                                    href="{{ route('profiles.delete', ['id' => $profile->id]) }}"><i
                                                        class="bx bx-trash me-1"></i> Delete</a>
                                                <a class="dropdown-item"
                                                    href="{{ route('profiles.show', ['id' => $profile->id]) }}"><i
                                                        class='bx bxs-show'></i> View</a>
                                            </div>
                                        </div>
                                    </td>
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
<script>
$(document).ready(function() {
    new DataTable('#dataTables');
});
</script>
@endsection