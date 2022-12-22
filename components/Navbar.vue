<template>
    <main class="z-20 sticky top-0 left-0 right-0 bg-white">
        <nav class="container md:w-4/12 mx-auto flex items-center justify-between text-lg">
            <!-- icon -->
            <span>
                <i class="fa-solid fa-boxes-stacked"></i>
            </span>
            <!-- title -->
            <span>
                <h2 class="first-letter:uppercase font-medium">{{ $route.meta.title || 'page' }}</h2>
            </span>
            <!-- notification -->
            <span>
                <i class="absolute fa-solid fa-bell"></i>
                <!-- dots -->
                <div class="relative -right-2 -top-1 h-3 w-3 bg-red-500 rounded-full"></div>
            </span>
        </nav>
    </main>
</template>