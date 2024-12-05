@extends('layouts/contentNavbarLayout')

@section('title', 'Horizontal Layouts - Forms')

@section('content')

<div class="card p-1">
<h4 class="fw-bold py-3 mb-4"><span class="text-muted fw-light">Subscription/</span>Subscription</h4>
</div>
</br>
<div class="card p-2">
    <div id="bootstrapTable_wrapper" class="dataTables_wrapper form-inline dt-bootstrap">
        <div class="row">
            <div class="col-md-12">
                <div class="panel panel-default">
                <div class="demo-inline-spacing-end d-flex justify-content-end m-2">
                    <!-- <a href="" class="btn btn-primary">Add New Subscription</a> -->
                </div>
                    <div class="panel-body">
                        <table class="table table-striped table-bordered dataTable display nowrap" id="dataTables">
                            <thead>
                                <tr>
                                    <th>No</th>
                                    <th>Profile</th>
                                    <th>Subscription</th>
                                    <th>Start Date</th>
                                    <th>End Date</th>
                                    <th>Status</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                @foreach ($subscription as $key => $row)
                                <tr>
                                    <td>{{$key + 1}}</td>
                                    <td><a href="javascript:void(0);" onclick="loadOffcanvasContent('{{ route('ajax.get_profile', $row->profile_id) }}')"> {{$row->profile->name}} (ID:- {{$row->profile_id}})</a></td>
                                    <td><a href="javascript:void(0);" onclick="loadOffcanvasContent('{{ route('ajax.get_subscription', $row->subscription_id) }}')"> {{$row->subscription->plan_name}} (ID:- {{$row->subscription_id}})</a></td>
                                    <td>{{ \Carbon\Carbon::parse($row->strt_date)->format('d-m-Y') }}</td>
                                    <td>{{ \Carbon\Carbon::parse($row->end_date)->format('d-m-Y') }}</td>
                                    <td>{{$row->status}}</td>
                                    <td>
                                        <div class="dropdown">
                                            <button type="button" class="btn p-0 dropdown-toggle hide-arrow" data-bs-toggle="dropdown"><i class="bx bx-dots-vertical-rounded"></i></button>
                                            <div class="dropdown-menu">
                                                <a class="dropdown-item" href="javascript:void(0);" onclick="loadOffcanvasContent('{{ route('subscriptionprofile.show', $row->id) }}')">
                                                    <i class="bx bx-show me-2"></i> Show
                                                </a>
                                                <!-- <a class="dropdown-item" href="{{ route('ajax.update_payment', $row->id) }}"><i class="bx bx-edit-alt me-1"></i>Check Status</a> -->
                                                <a class="dropdown-item" href="javascript:void(0);" onclick="loadModalContent('{{ route('ajax.fetch_subdetail', $row->id) }}')"><i
                                                        class="bx bx-edit-alt me-1"></i>Edit</a>
                                                <!-- <a class="dropdown-item" onclick="deleteRow('{{$row->id}}')"><i class="bx bx-trash me-1"></i> Delete</a> -->
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

<div class="col-lg-6 col-md-8">
        <div class="mt-3">
          <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasEnd" aria-labelledby="offcanvasEndLabel">
            <div class="offcanvas-header">
              <h5 id="offcanvasEndLabel" class="offcanvas-title">User Subscription</h5>
              <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
            </div>
            <div class="offcanvas-body">
            <div class="modal-body">
                <!-- Modal content goes here -->
            </div>
              <button type="button" class="btn btn-outline-secondary d-grid w-100" data-bs-dismiss="offcanvas">Cancel</button>
            </div>
          </div>
        </div>
      </div>

      <div class="modal fade" id="modalCenter" tabindex="-1" aria-hidden="true">
            <div class="modal-dialog modal-dialog-centered" role="document">
              <div class="modal-content">
                <div class="modal-header">
                  <h5 class="modal-title" id="modalCenterTitle">User Subscription Edit</h5>
                  <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="sub-model">

                <div class="modal-footer">
                  <button type="button" class="btn btn-outline-secondary" data-bs-dismiss="modal">Close</button>
                  <button type="button" class="btn btn-primary">Save changes</button>
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

    function loadOffcanvasContent(url) {
        fetch(url)
            .then(response => response.text())
            .then(data => {
                // console.log(data);
                document.querySelector(".offcanvas-body .modal-body").innerHTML = data;
                var offcanvas = new bootstrap.Offcanvas(document.getElementById('offcanvasEnd'));
                offcanvas.show();
            })
            .catch(error => console.error(error));
    }

    function loadModalContent(url) {
        fetch(url)
            .then(response => response.text())
            .then(data => {
                console.log(data);
                document.querySelector(".sub-model").innerHTML = data;
                $('#modalCenter').modal('show');
            })
            .catch(error => console.error(error));
}

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
