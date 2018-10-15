<?php

declare(strict_types=1);

namespace vic\src;

use MCordingley\LinearAlgebra\Matrix;

class MatrixInfo {
  public $matrixObj;
  public $matrixSize = [];
  public $matrixDeterm;
  public $isMatrixSquare;
  public $determFailMessage;


  public function __construct($passedMatrix)
  {
    $this->matrixObj = new Matrix($passedMatrix);
    $this->validateMatrixObj();
    $this->matrixSize();
  }

  public function validateMatrixObj(): Matrix
  {
    return $this->matrixObj;
  }

  public function matrixSize (): void
  {
      $this->matrixSize['rows'] = $this->matrixObj->getRowCount();
      $this->matrixSize['columns'] = $this->matrixObj->getColumnCount();
      $this->matrixSize['columns'] === $this->matrixSize['rows'] ? $this->isMatrixSquare = true : $this->isMatrixSquare = false;
  }

  // public function printMatrixDeterminant (): void
  // {
  //   $this->isMatrixSquare ? echo 'Matrix determinant: '.$matrixObj->determinant() : echo 'Matrix is not square and hasn\'t determinant'
  // }

  public function printInfo (): void
  {
    if ($this->matrixObj)
    {
      echo 'Matrix has '.$this->matrixSize['columns'].' columns and '.$this->matrixSize['rows'].' rows and matrix determinant is'.$this->matrixDeterm;
    }
  }

}

?>
