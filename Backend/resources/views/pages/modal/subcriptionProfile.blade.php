<div class="form p-2">
<form method="post" action="{{route('subscriptionprofile.update')}}">
  @csrf
<div class="row">
    <div class="col-3">
      <input type="hidden" id="id" name="id" class="form-control" value="{{$result->id}}">
    </div>
  </div>
  <div class="row g-2">
    <div class="col-6">
      <label for="strt_date" class="form-label">User Name</label>
      <select class="form-select" disabled id="profile_id" name="profile_id">
      @foreach($profile as $profiles)
      <option value="{{$profiles->id}}" {{ $result->profile_id == $profiles->id ? 'selected' : '' }}>{{$profiles->name}}</option>
      @endforeach
      </select>
    </div>
    <div class="col-6">
    <label for="strt_date" class="form-label">Subscription</label>
      <select class="form-select" id="subscription_id" name="subscription_id">
      @foreach($subscription as $profiles)
      <option  value="{{$profiles->id}}"  {{ $result->subscription_id == $profiles->id ? 'selected' : '' }}>{{$profiles->plan_name}}</option>
      @endforeach
      </select>
    </div>
  </div>
  <div class="row g-2">
    <div class="col-6">
      <label for="strt_date" class="form-label">Start Dtae</label>
      <input type="date" name="strt_date" id="strt_date" class="form-control" value="{{$result->strt_date}}">
    </div>
    <div class="col-6">
      <label for="dobWithTitle" class="form-label">End Date</label>
      <input type="date" name="end_date" id="end_date" class="form-control" value="{{$result->end_date}}">
    </div>
  </div>
  <div class="row g-2">
    <div class="col-6">
      <label for="strt_date" class="form-label">Renewal Dtae</label>
      <input type="date" name="renewal_date" id="renew_date" class="form-control" value="{{$result->renewal_date}}">
    </div>
    <div class="col-6">
      <label for="dobWithTitle" class="form-label">Auto Renew</label>
      <select class="form-select" name="auto_renewal" id="auto_renewal">
        <option value="1" {{ $result->auto_renewal == 1 ? 'selected' : '' }}>Yes</option>
        <option value="0" {{ $result->auto_renewal == 0 ? 'selected' : '' }}>No</option>
      </select>
    </div>
  </div>
  <div class="row g-2">
    <div class="col-12">
    <label for="dobWithTitle" class="form-label">Status</label>
      <select class="form-select" id="status" name="status">
        <option value="active" {{ $result->status == 'active' ? 'selected' : '' }}>Active</option>
        <option value="deactive" {{ $result->status == 'deactive' ? 'selected' : '' }}>Deactive</option>
      </select>
    </div>
  </div>
</br>
  <div class="row">
    <div class="col-6">
      <button class="btn btn-primary" type="submit" value="Submit">Submit</button>
      <button class="btn btn-secondary" value="Submit">Cancel</button>
    </div>
  </div>
</div>
</form>
</div>