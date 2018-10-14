<?php

require_once(__DIR__ . '/vendor/autoload.php');

use vic\src\MatrixInfo;
use vic\src\StringEditor;

// -------------PART 1-------------------

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

// -------------PART 2-------------------

$myString = "I love to code";
// $myString = 123456;           // converts to string "123456"
// $myString = true;             // true converts to "1"
// $myString = [1, 8, "z"];      // throws error

$stringEditor = new StringEditor($myString);
$stringEditor->stringReverse();
$stringEditor->stringCapitalize();

?>
