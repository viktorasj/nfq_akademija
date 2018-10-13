<?php

// autoload_static.php @generated by Composer

namespace Composer\Autoload;

class ComposerStaticInit4cd525c527c8ad3a9e799fbb2de34beb
{
    public static $prefixLengthsPsr4 = array (
        'v' => 
        array (
            'vic\\src\\functions\\' => 18,
        ),
    );

    public static $prefixDirsPsr4 = array (
        'vic\\src\\functions\\' => 
        array (
            0 => __DIR__ . '/../..' . '/src/functions',
        ),
    );

    public static $classMap = array (
        'vic\\src\\functions\\function1' => __DIR__ . '/../..' . '/src/functions/Function1.php',
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