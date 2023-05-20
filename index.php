<?php
require 'vendor/autoload.php';

$router = new AltoRouter();
$router->setBasePath('/cinetech');

$router->map('GET', '/', function (){
    require_once "src/View/home.php";
});

$router->map('GET', '/movies', function (){
    require_once "src/View/movies.php";
});

$router->map('GET', '/series', function () {
    require_once 'src/View/series.php';
});

$match = $router->match();
// call closure or throw 404 status
if (is_array($match) && is_callable($match['target'])) {
    call_user_func_array($match['target'], $match['params']);
} else {
    // no route was matched
    header($_SERVER['SERVER_PROTOCOL'] . ' 404 Not Found');
}