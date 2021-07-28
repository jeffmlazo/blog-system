@extends('layouts.base')

@section('scripts')

@endsection

@section('content')

<div id="app" data-isloggedin={{$isLoggedIn ?? ""}}></div>
@endsection