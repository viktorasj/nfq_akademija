<?php

// This file has been auto-generated by the Symfony Dependency Injection Component for internal use.

if (\class_exists(\Container3cgcSQ3\srcDevDebugProjectContainer::class, false)) {
    // no-op
} elseif (!include __DIR__.'/Container3cgcSQ3/srcDevDebugProjectContainer.php') {
    touch(__DIR__.'/Container3cgcSQ3.legacy');

    return;
}

if (!\class_exists(srcDevDebugProjectContainer::class, false)) {
    \class_alias(\Container3cgcSQ3\srcDevDebugProjectContainer::class, srcDevDebugProjectContainer::class, false);
}

return new \Container3cgcSQ3\srcDevDebugProjectContainer(array(
    'container.build_hash' => '3cgcSQ3',
    'container.build_id' => '4e8d550d',
    'container.build_time' => 1542664540,
), __DIR__.\DIRECTORY_SEPARATOR.'Container3cgcSQ3');
