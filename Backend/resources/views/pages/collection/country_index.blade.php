@extends('layouts/contentNavbarLayout')

@section('title', 'Country')

@section('content')
<div class="card p-1">
<h4 class="fw-bold py-3 mb-4"><span class="text-muted fw-light">Country/</span>Country</h4>
</div>
</br>
<div class="card p-2">
    <div id="bootstrapTable_wrapper" class="dataTables_wrapper form-inline dt-bootstrap">
        <div class="row">
            <div class="col-md-12">
                <div class="panel panel-default">
                <div class="demo-inline-spacing-end d-flex justify-content-end m-2">
                    <a href="{{ route('collection.country.add') }}" class="btn btn-primary">Add New Country</a>
                </div>
                    <div class="panel-body">
                        <table class="table table-striped table-bordered dataTable display nowrap" id="dataTables">
                            <thead>
                                <tr>
                                    <th>No</th>
                                    <th>Country Name</th>
                                    <th>Code</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                @foreach ($country as $key => $row)
                                <tr>
                                    <td>{{$row->id}}</td>
                                    <td>{{$row->name}}</td>
                                    <td>{{$row->code}}</td>
                                    <td>
                                        <div class="dropdown">
                                            <button type="button" class="btn p-0 dropdown-toggle hide-arrow" data-bs-toggle="dropdown"><i class="bx bx-dots-vertical-rounded"></i></button>
                                            <div class="dropdown-menu">
                                                <!-- <a class="dropdown-item" onclick="loadOffcanvasContent('{{ route('ajax.get_subscription', $row->id) }}')"><i class="bx bx-show me-1"></i> Show</a> -->
                                                <a class="dropdown-item" href="{{ route('collection.country.edit', ['id' => $row->id]) }}"><i class="bx bx-edit-alt me-1"></i> Edit</a>
                                                <a class="dropdown-item" href="{{ route('collection.country.delete', ['id' => $row->id]) }}"><i class="bx bx-trash me-1"></i> Delete</a>
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
            <h5 id="offcanvasEndLabel" class="offcanvas-title">Subscription Plan</h5>
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

<script>

    function loadOffcanvasContent(url) {
        fetch(url)
            .then(response => response.text())
            .then(data => {
                document.querySelector(".offcanvas-body .modal-body").innerHTML = data;
                var offcanvas = new bootstrap.Offcanvas(document.getElementById('offcanvasEnd'));
                offcanvas.show();
            })
            .catch(error => console.error(error));
    }

    $(document).ready(function() {
        new DataTable('#dataTables');

        $('[id^="change_status"]').change(function() {
            var id = $(this).attr('id').split('_')[2]; 
            var status = $(this).prop('checked') ? 1 : 0;

            var csrfToken = $('meta[name="csrf-token"]').attr('content');
            $.ajax({
                type: "POST",
                url: "{{ route('ajax.change_subscription_status') }}",
                data: {
                    id: id,
                    status: status,
                    _token: csrfToken // Include CSRF token in the request
                },
                success: function(response) {
                    // console.log(response);
                },
                error: function(error) {
                    // console.error('Error: ', error);
                }
            });
        });
    });
</script>
@endsection
