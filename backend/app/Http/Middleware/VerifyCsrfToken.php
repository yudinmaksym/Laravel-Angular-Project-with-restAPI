<?php

namespace App\Http\Middleware;

use Illuminate\Foundation\Http\Middleware\VerifyCsrfToken as Middleware;

class VerifyCsrfToken extends Middleware
{
    /**
     * The URIs that should be excluded from CSRF verification.
     *
     * @var array
     */
    protected $except = [
        "/post-users",
        "/all-users",
        "/post-trans",
        "/all-trans",
        "/update-trans",
        "/delete-trans",
        "/api/login",
        "/login",
    ];
}
