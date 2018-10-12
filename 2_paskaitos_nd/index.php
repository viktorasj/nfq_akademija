<?php
require_once(__DIR__ . '/vendor/autoload.php');

use \vic\functions\test;


$labas = new test();
$number = $labas->AddInts("1",5);
echo $number;

?>
