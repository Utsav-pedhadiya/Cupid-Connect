<div class="table-responsive text-wrap ">
    <table class="table">
      <tbody>
        <tr>
          <th>Plan Name</th>
          <td>{{$result->plan_name}}</td>
        </tr>
        <tr>
          <th>Price</th>
          <td>{{$result->price}}</td>
        </tr>
        <tr>
          <th>Months</th>
          <td>{{$result->months}}</td>
        </tr>
        <tr>
          <th>Description</th>
          <td>{{$result->description}}</td>
        </tr>
        <tr>
          <th>Color Code</th>
          <td><div style="width: 20px; height: 20px; background-color: {{$result->color_code}};"></div> {{$result->color_code}}</td>
        </tr>
        <tr>
          <th>Is Active</th>
          <td>{{$result->is_active}}</td>
        </tr>
      </tbody>
    </table>
  </div>