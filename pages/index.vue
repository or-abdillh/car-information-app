<template>
    <main class="container">
        <!-- wellcome -->
        <section class="mb-3">
            <h1 class="text-3xl font-medium">Hi Jenifer!</h1>
            <p class="text-gray-400">Search your favourite car here</p>
        </section>
        <!-- end of wellcome -->
        <!-- CTA -->
        <section class="px-6 py-12 flex items-center bg-orange rounded-3xl mb-5">
            <!-- copywriter -->
            <section class="w-6/12">
                <h2 class="text-gray-900 text-xl font-medium">Explore Latest</h2>
                <p class="text-gray-600">Cars with price</p>
                <button class="mt-2 bg-dark text-gray-100 px-6 py-2 rounded-2xl text-sm">Explore</button>
            </section>
            <!-- image -->
            <section class="w-6/12">
                <img class="scale-150 translate-x-1" src="~/assets/svg/car.svg">
            </section>
        </section>
        <!-- end of CTA -->
        <!-- Most searched -->
        <section class="mb-6">
            <span class="flex justify-between mb-2">
                <h2 class="text-xl font-medium">The most searched cars</h2>
                <p class="text-gray-400">View all</p>
            </span>
            <!-- List all card -->
            <section class="flex gap-2">
                <template v-for="card in 2" :key="card">
                    <Card></Card>
                </template>
            </section>
            <!-- End of List all card -->
        </section>
        <!-- end of Most searched -->
        <!-- Recomended Cars For You -->
        <section>
            <span class="flex justify-between mb-2">
                <h2 class="text-xl font-medium">Recomended Cars For You</h2>
                <p class="text-gray-400">View all</p>
            </span>
            <!-- List all card -->
            <section class="flex gap-2">
                <template v-for="card in 2" :key="card">
                    <Card></Card>
                </template>
            </section>
            <!-- End of List all card -->
        </section>
        <!-- end of Recomended Cars For You -->
    </main>
</template>