<?php

declare(strict_types=1);

namespace vic\src;

use MCordingley\LinearAlgebra\Matrix;

class MatrixInfo {
  public $matrixObj;
  public $matrixSize = [];
  public $isMatrixSquare;
  public $matrixDeterminant;


  public function __construct($passedMatrix)
  {
    $this->matrixObj = new Matrix($passedMatrix);
    $this->validateMatrixObj();
  }

  public function validateMatrixObj(): Matrix
  {
    return $this->matrixObj;
  }

  public function matrixSize (): array
  {
      $this->matrixSize['rows'] = $this->matrixObj->getRowCount();
      $this->matrixSize['columns'] = $this->matrixObj->getColumnCount();
      if ($this->matrixSize['columns'] === $this->matrixSize['rows'])
      {
        $this->isMatrixSquare = true;
      }
      else
      {
        $this->isMatrixSquare = false;
      }
      return $this->matrixSize;
  }

  public function matrixDeterminant (): ?float
  {
    if ($this->isMatrixSquare) {
      $this->matrixDeterminant = $this->matrixObj->determinant();
    }
    else {
      $this->matrixDeterminant = NULL;
    }
    return $this->matrixDeterminant;
  }

  public function getMatrixElement (array $coord): float
  {
    $element = $this->matrixObj->get($coord[0]-1, $coord[1]-1);
    return $element;
  }



}

?>
