<?php

require_once(__DIR__ . '/vendor/autoload.php');

use vic\src\MatrixInfo;
use vic\src\StringEditor;

// -------------Su strict_types=1-------------------

$matrix = [
    [1, 12, 1],
    [2, 8, 2],
    [6, 8, 9],
];

$matrix_info_obj = new MatrixInfo($matrix);
// $matrix_info_obj->matrixDeterminant();
$matrix_info_obj->printInfo();

// -------------Be strict_types=1-------------------

$myString = "I love to code";
$stringEditor = new StringEditor($myString);
$stringEditor->stringReverse();
$stringEditor->stringCapitalize();

?>
