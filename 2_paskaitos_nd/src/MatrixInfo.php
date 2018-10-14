<?php

declare(strict_types=1);

namespace vic\src;

use MathPHP\LinearAlgebra\Matrix;
use MathPHP\LinearAlgebra\MatrixFactory;


class MatrixInfo {
  public static $matrixObj;
  public static $matrixSize = [];

  public static function getMatrixSize (array $passedMatrix): array
  {
      self::$matrixObj = new Matrix($passedMatrix);
      MatrixInfo::setMatrixSize();
      return self::$matrixSize;
  }

  public static function setMatrixSize (): void
  {
      array_push (self::$matrixSize, self::$matrixObj->getN(), self::$matrixObj->getM());

  }
  public static function printSize (array $size): void
  {
    if ($size) {
      echo 'Matrix has '.$size[0].' columns and '.$size[1].' rows';
    }
  }

}

?>
