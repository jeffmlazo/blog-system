@extends('layouts.base')
@section('scripts')

@endsection

@section('content')
<div id="dashboard"></div>
<h1 id="dashboard-heading">
    Hello I'm a dashboard
    {{ $id }}
    {{ $user_type }}
</h1>
@endsection