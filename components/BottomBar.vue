<template>
    <main class="fixed bottom-0 left-0 right-0">
        <section class="w-full md:w-4/12 mx-auto p-5 flex gap-3 bg-gray-50">
            <template v-for="bottom in bottoms" :key="bottom">
                <button
                    @click="bottomActive = bottom.name"
                    :class="bottomActive === bottom.name ? 'bg-gray-900 text-gray-100 rounded-2xl' : ''" 
                    class="w-full flex items-center gap-2 duration-300 px-3 py-2">
                    <i :class="bottom.icon"></i>
                    <p v-if="bottomActive === bottom.name">{{ bottom.name }}</p>
                </button>
            </template>
        </section>
    </main>
</template>

<script setup>

const bottoms = [
    { name: 'Home', icon: 'fa-solid fa-house' },
    { name: 'Search', icon: 'fa-solid fa-magnifying-glass' },
    { name: 'Like', icon: 'fa-solid fa-heart' },
    { name: 'Saved', icon: 'fa-solid fa-bookmark' },
]

const bottomActive = ref('Home')

</script>