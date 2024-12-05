@extends('layouts/contentNavbarLayout')

@section('title', 'Horizontal Layouts - Forms')

@section('content')

<div class="card p-1">
<h4 class="fw-bold py-3 mb-4"><span class="text-muted fw-light"><span>Terms & condition</span>
</div>
</br>
<div class="card p-2">
    <div id="bootstrapTable_wrapper" class="dataTables_wrapper form-inline dt-bootstrap">
        <div class="row">
            <div class="col-md-12">
                <div class="panel panel-default">
                <div class="demo-inline-spacing-end d-flex justify-content-end m-2">
                    <a href="{{ route('terms.create') }}" class="btn btn-primary">Add New Terms</a>
                </div>
                    <div class="panel-body">
                        <table class="table table-striped table-bordered dataTable display wrap" id="dataTables">
                            <thead>
                                <tr>
                                    <th>No</th>
                                    <th>Title</th>
                                    <th>Content</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                @foreach ($data as $key => $row)
                                <tr>
                                    <td>{{$key + 1}}</td>
                                    <td>{{$row->title}}</td>
                                    <td>{{$row->content}}</td>
                                    <td>
                                        <div class="dropdown">
                                            <button type="button" class="btn p-0 dropdown-toggle hide-arrow" data-bs-toggle="dropdown"><i class="bx bx-dots-vertical-rounded"></i></button>
                                            <div class="dropdown-menu">
                                                <a class="dropdown-item" href="{{ route('terms.edit', ['id' => $row->id]) }}"><i class="bx bx-edit-alt me-1"></i> Edit</a>
                                                <a class="dropdown-item" href="{{ route('terms.delete', ['id' => $row->id]) }}"><i class="bx bx-trash me-1"></i> Delete</a>
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

    function deleteRow(id) {
        Swal.fire({
                title: 'Are you sure?',
                text: "Once deleted, you will not be able to recover this record!",
                type: 'warning',
                showCancelButton: true,
                confirmButtonText: 'Yes, delete',
                cancelButtonText: 'No, cancel'
            }).then((result) => {
                if (result.value) {
                    $.ajax({
                        type: "POST",
                        url: "{{ url('/support/delete/') }}/" + id,
                        data: {"_token": "{{ csrf_token() }}",}, // serializes the form's elements.
                        success: function (data) {
                            // console.log(data);
                            var response = JSON.parse(data);
                            if (response.IsSuccess) {
                                Swal.fire(
                                    'Deleted!',
                                    'This item has been deleted.',
                                    'success'
                                )
                                location.reload();
                            } else {
                                ShowNotify(response);
                            }
                        }
                    });
                } else if (result.dismiss === swal.DismissReason.cancel) {
                    Swal.fire(
                        'Cancelled',
                        'Your record is safe! :)',
                        'error'
                    )
                }
            })
        }
</script>
@endsection
