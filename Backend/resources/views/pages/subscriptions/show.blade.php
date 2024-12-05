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
          <th>Start Date</th>
          <td>{{$data->strt_date}}</td>
        </tr>
        <tr>
          <th>End Date</th>
          <td>{{$data->end_date}}</td>
        </tr>
        <tr>
          <th>Renewal Date</th>
          <td>{{$data->renewal_date}}</td>
        </tr>
        <tr>
          <th>Auto Renewal</th>
            <td>@if($data->auto_renewal == 0)
                No
                @else
                Yes
                @endif
            </td>
        </tr>
        <tr>
          <th>Status</th>
          <td>{{$data->status}}</td>
        </tr>
        <tr>
          <th>Is Upgraded</th>
          <td>@if($data->is_upgraded == 0)
                No
                @else
                Yes
                @endif
            </td>
        </tr>
        <tr>
          <th>Last Amount</th>
          <td>{{$data->last_amount}}</td>
        </tr>
      </tbody>
    </table>
  </div>