<?php

require_once(__DIR__ . '/vendor/autoload.php');

use vic\src\MatrixInfo;
use vic\src\StringEditor;

// -------------Su strict_types=1-------------------

$matrix = [
    [1, 1, 1],
    [2, 2, 2],
    [3, 3, 3],
    [4, 4, 1]
];
$matrix_info_obj = new MatrixInfo($matrix);
$matrix_info_obj->printSize($matrix_info_obj->getMatrixSize());

// -------------Be strict_types=1-------------------

$myString = "I love to code";
$stringEditor = new StringEditor($myString);
$stringEditor->stringReverse();
$stringEditor->stringCapitalize();

?>
