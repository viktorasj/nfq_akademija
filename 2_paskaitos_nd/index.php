<?php
// declare(strict_types=1);
require_once(__DIR__ . '/vendor/autoload.php');

use vic\src\functions\function1;


$labas = new function1();
$number = $labas->AddInts("1",5);
echo $number;

?>
