<div class="form p-2">
    <form id="formAccountSettings" method="POST" action="{{ route('adminuser.store') }}" enctype="multipart/form-data">
        @csrf
        <div class="row g-2">
            <div class="col-12">
                <label for="name" class="form-label">Name</label>
                <input type="text" name="name" id="name" class="form-control">
            </div>
        </div>
        <div class="row g-2">
            <div class="col-6">
                <label for="email" class="form-label">E-Mail</label>
                <input type="email" name="email" id="email" class="form-control">
            </div>
            <div class="col-6">
                <label for="dobWithTitle" class="form-label">Mobile No</label>
                <input type="number" name="mobile_no" id="mobile_no" class="form-control">
            </div>
        </div>
        <div class="row g-2">
            <div class="col-6">
                <label for="username" class="form-label">Username</label>
                <input type="text" name="username" id="username" class="form-control">
            </div>
            <div class="col-6">
                <label for="password" class="form-label">Password</label>
                <input type="password" name="password" id="password" class="form-control">
            </div>
        </div>
        <div class="row g-2">
            <div class="col-12">
                <label for="image" class="form-label">Select Image</label>
                <input type="file" id="image" name="image" class="form-control" accept="image/png, image/jpeg" />
            </div>
            </br>
        </div>
        <div class="row p-2">
            <div class="col-12">
                <center> <button class="btn btn-primary" type="submit" value="Submit">Submit</button></center>
                <!-- <button class="btn btn-secondary" value="Submit">Cancel</button> -->
            </div>
        </div>
    </form>
</div>