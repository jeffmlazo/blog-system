@extends('layouts.base')
@section('scripts')

@endsection

@section('content')
<script>
    // Global user data variables
    var userId = {{ $id }};
    var username = "{{$username}}";
    var userType = "{{$user_type}}";
</script>
<div id="dashboard"></div>
@endsection