<?php

require_once(__DIR__ . '/vendor/autoload.php');

use vic\src\MatrixInfo;

$matrix = [
    [1, 1, 1],
    [2, 2, 2],
    [3, 3, 3],
    [4, 4, 1]
];

// $matrix = [1, 2];
// $matrix = "test";
// $matrix = 1;

//if $matrix is wrong sized - BadDataException error is thrown by library;
//if $matrix is not multidimensional array - warning is thrown by library;
//if $matrix is not an array - type error is thrown;
$matrixSizeArr = MatrixInfo::getMatrixSize ($matrix);
MatrixInfo::printSize($matrixSizeArr);


?>
