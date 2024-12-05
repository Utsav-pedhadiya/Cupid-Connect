<div class="d-flex justify-content-center">
    <img src="https://mdbootstrap.com/img/Photos/Others/placeholder-avatar.jpg"
    class="rounded-circle" alt="example placeholder" style="width: 200px;" />
</div>
<div class="table-responsive text-nowrap ">
    <table class="table">
      <tbody>
        <tr>
          <th>Name</th>
          <td>{{$result->name}}</td>
        </tr>
        <tr>
          <th>Gender</th>
          <td>{{$result->gender}}</td>
        </tr>
        <tr>
          <th>Number</th>
          <td>{{$result->number}}</td>
        </tr>
        <tr>
          <th>Age</th>
          <td>{{$result->age}}</td>
        </tr>
        <tr>
          <th>City</th>
          <td>{{$result->city}}</td>
        </tr>
        <tr>
          <th>Mirtual Status</th>
          <td>{{$result->martial_status}}</td>
        </tr>
        <tr>
          <th>Views</th>
          <td>{{$result->views}}</td>
        </tr>
        <tr>
          <th>Likes</th>
          <td>{{$result->likes}}</td>
        </tr>
      </tbody>
    </table>
  </div>