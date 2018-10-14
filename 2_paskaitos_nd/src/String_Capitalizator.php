<?php

declare(strict_types=1);

namespace vic\src;


class Capitalize {
  public static $rawStr;

  public static function capFirst (): void
  {
      self::$rawStr = ucfirst(self::$rawStr);
  }

  public static function getMyString (): string
  {
      return self::$rawStr;
  }
}

?>
