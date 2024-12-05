@if(session('success'))
    <div class="alert alert-success alert-block">
        <strong>{{ session('success') }}</strong>
    </div>
    <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
    <script>
        $(document).ready(function () {
            setTimeout(function () {
                $("div.alert").fadeOut("slow", function () {
                    $(this).remove();
                });
            }, 3000); // 5 seconds
        });
    </script>
@endif
@if(session('error'))
    <div class="alert alert-danger alert-block">
        <strong>{{ session('error') }}</strong>
    </div>
    <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
    <script>
        $(document).ready(function () {
            setTimeout(function () {
                $("div.alert").fadeOut("slow", function () {
                    $(this).remove();
                });
            }, 3000); // 5 seconds
        });
    </script>
@endif

