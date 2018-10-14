<?php

namespace vic\src;


class StringEditor {
  public $string;

  public function __construct ($passedString) {
    $this->string = $passedString;
  }

  public function stringReverse (){
    if ($this->string) {
      $this->parseString(strrev($this->string));
    }
  }

  public function stringCapitalize () {
    if($this->string) {
      $this->parseString(strtoupper($this->string));
    }
  }
  public function parseString ($editedString){
    echo ('<br />');
    print_r($editedString);
  }
}

?>
