<?php

require_once(__DIR__ . '/vendor/autoload.php');

use vic\src\MatrixInfo;
use vic\src\StringEditor;

echo('-------------With strict_types=1-------------------');
echo nl2br("\n");

$matrix = [
    [1, 12, 1],
    [2, 8, 2],
    [6, 8, 9]
  ];

//creating matrix object
$matrix_info_obj = new MatrixInfo($matrix);

//getting matrix size in array;
print_r($matrix_info_obj->matrixSize());
echo nl2br("\n");

//getting matrix determinant, if matrix is square. If not - nothing is parsed;
print_r($matrix_info_obj->matrixDeterminant());
echo nl2br("\n");

//getting desired element of matrix by sending array of element corrdinates [x, y] in matrix;
print_r($matrix_info_obj->getMatrixElement([2, 3]));
echo nl2br("\n");


echo('-------------Without strict_types=1-------------------');

$myString = "I love to code";
$stringEditor = new StringEditor($myString);
$stringEditor->stringReverse();
$stringEditor->stringCapitalize();

?>
