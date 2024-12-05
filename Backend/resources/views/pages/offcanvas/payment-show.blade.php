<h5 id="offcanvasEndLabel" class="offcanvas-title">Payment</h5>
<div class="table-responsive text-wrap ">
    <table class="table">
      <tbody>
        <tr>
          <th>User</th>
          <td>{{$data->profile->name}} ({{$data->profile_id}})</td>
        </tr>
        <tr>
          <th>Subscription</th>
          <td>{{$data->subscription->plan_name}} ({{$data->subscription_id}})</td>
        </tr>
        <tr>
          <th>Payment Date</th>
          <td>{{$data->payment_date}}</td>
        </tr>
        <tr>
          <th>Amount</th>
          <td>{{$data->amount}}</td>
        </tr>
        <tr>
          <th>Payment Method</th>
          <td>{{$data->payment_method}}</td>
        </tr>
        <tr>
          <th>Transaction Id</th>
          <td>{{$data->transaction_id}}</td>
        </tr>
        <tr>
          <th>Status</th>
          <td>{{$data->status}}</td>
        </tr>
      </tbody>
    </table>
  </div>