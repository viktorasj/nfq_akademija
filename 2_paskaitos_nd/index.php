<?php
require_once(__DIR__ . '/vendor/autoload.php');

use \Moontoast\Math\BigNumber;
use \vic\testavimas\test;

$number = new BigNumber('10');
$number->multiply(35);

var_dump($number->getValue());

echo ('<br />');

new test();

?>
