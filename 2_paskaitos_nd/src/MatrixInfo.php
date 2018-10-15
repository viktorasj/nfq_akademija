<?php

declare(strict_types=1);

namespace vic\src;

use MCordingley\LinearAlgebra\Matrix;

class MatrixInfo {
  public $matrixObj;

  public function __construct($passedMatrix)
  {
    $this->matrixObj = new Matrix($passedMatrix);
  }

  public function getMatrixSize (): array
  {
      $matrixSize['rows'] = $this->matrixObj->getRowCount();
      $matrixSize['columns'] = $this->matrixObj->getColumnCount();
      return $matrixSize;
  }

  public function printSize (array $size): void
  {
    if ($size)
    {
      echo 'Matrix has '.$size['columns'].' columns and '.$size['rows'].' rows';
    }
  }

}

?>
