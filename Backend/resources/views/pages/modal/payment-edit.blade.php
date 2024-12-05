<div class="form p-2">
<form method="post" action="{{route('payment.update')}}">
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
      <select class="form-select" id="subscription_id" name="subscription_id" disabled>
      @foreach($subscription as $profiles)
      <option  value="{{$profiles->id}}"  {{ $result->subscription_id == $profiles->id ? 'selected' : '' }}>{{$profiles->plan_name}}</option>
      @endforeach
      </select>
    </div>
  </div>
  <div class="row g-2">
    <div class="col-6">
      <label for="payment_date" class="form-label">Payment Date</label>
      <input type="date" name="payment_date" id="payment_date" class="form-control" value="{{$result->payment_date}}" readonly>
    </div>
    <div class="col-6">
      <label for="amount" class="form-label">Amount</label>
      <input type="text" name="amount" id="amount" class="form-control" value="{{$result->amount}}" readonly>
    </div>
  </div>
  <div class="row g-2">
    <div class="col-6">
      <label for="strt_date" class="form-label">Payment Method</label>
      <input type="text" name="payment_method" id="payment_method" class="form-control" value="{{$result->payment_method}}" readonly>
    </div>
    <div class="col-6">
      <label for="dobWithTitle" class="form-label">Transaction ID</label>
      <input type="text" name="transaction_id" id="transaction_id" class="form-control" value="{{$result->transaction_id}}" readonly>
    </div>
  </div>
  <div class="row g-2">
    <div class="col-12">
    <label for="dobWithTitle" class="form-label">Status</label>
      <select class="form-select" id="status" name="status">
        <option value="Succeeded" {{ $result->status == 'Succeeded' ? 'selected' : '' }}>Succeeded</option>
        <option value="Pending" {{ $result->status == 'Pending' ? 'selected' : '' }}>Pending</option>
        <option value="Failed" {{ $result->status == 'Failed' ? 'selected' : '' }}>Failed</option>
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