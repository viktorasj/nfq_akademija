<?php

// autoload_static.php @generated by Composer

namespace Composer\Autoload;

class ComposerStaticInit4cd525c527c8ad3a9e799fbb2de34beb
{
    public static $prefixLengthsPsr4 = array (
        'v' => 
        array (
            'vic\\testavimas\\' => 15,
        ),
        'M' => 
        array (
            'Moontoast\\Math\\' => 15,
        ),
    );

    public static $prefixDirsPsr4 = array (
        'vic\\testavimas\\' => 
        array (
            0 => __DIR__ . '/../..' . '/src',
        ),
        'Moontoast\\Math\\' => 
        array (
            0 => __DIR__ . '/..' . '/moontoast/math/src/Moontoast/Math',
        ),
    );

    public static $classMap = array (
        'Moontoast\\Math\\BigNumber' => __DIR__ . '/..' . '/moontoast/math/src/Moontoast/Math/BigNumber.php',
        'Moontoast\\Math\\Exception\\ArithmeticException' => __DIR__ . '/..' . '/moontoast/math/src/Moontoast/Math/Exception/ArithmeticException.php',
        'vic\\testavimas\\test' => __DIR__ . '/../..' . '/src/function1.php',
    );

    public static function getInitializer(ClassLoader $loader)
    {
        return \Closure::bind(function () use ($loader) {
            $loader->prefixLengthsPsr4 = ComposerStaticInit4cd525c527c8ad3a9e799fbb2de34beb::$prefixLengthsPsr4;
            $loader->prefixDirsPsr4 = ComposerStaticInit4cd525c527c8ad3a9e799fbb2de34beb::$prefixDirsPsr4;
            $loader->classMap = ComposerStaticInit4cd525c527c8ad3a9e799fbb2de34beb::$classMap;

        }, null, ClassLoader::class);
    }
}
