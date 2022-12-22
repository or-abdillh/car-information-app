<style scoped>

@keyframes animated-show {
    from {
        bottom: -100%;
    } to {
        bottom: 0;
    }
}

.bottom--sheets {
    animation: animated-show .5s forwards;
}

</style>

<template>
    <!-- layer -->
    <main class="fixed bg-gray-800 bg-opacity-50 inset-0 z-30">
        <!-- bottom sheets -->
        <main class="w-full rounded-2xl bg-gray-50 px-6 py-4 fixed bottom--sheets">
            <!-- ruler -->
            <div class="h-2 w-24 rounded-2xl bg-gray-200 mx-auto mb-6"></div>
            <!-- header -->
            <section class="flex justify-end mb-4">
                <section class="w-7/12 flex justify-between items-center">
                    <!-- title -->
                    <h2 class="text-2xl font-medium">Filters</h2>
                    <!-- reset -->
                    <button class="text-gray-400 text-sm">RESET</button>
                </section>
            </section>
            <!-- end of header -->
            <!-- seats -->
            <section class="mb-4">
                <!-- label -->
                <p class="text-lg mb-2">Seats</p>
                <section class="flex gap-2 overflow-x-scroll no-scrollbar">
                    <template v-for="seat in 5" :key="seat">
                        <button @click="seatSelect = seat"
                            :class="seatSelect === seat ? 'bg-gray-800 text-gray-100' : 'border border-gray-400'" 
                            class="min-w-[100px] break-normal p-4 rounded-2xl">{{ seat + 1 }} Seats</button>
                    </template>
                </section>
            </section>
            <!-- end of seats -->
            <!-- transmisions -->
            <section class="mb-4">
                <!-- label -->
                <p class="text-lg mb-2">Transmissions</p>
                <section class="flex no-scrollbar overflow-x-scroll gap-2">
                    <template v-for="transmission in transmissions" :key="transmision">
                        <button @click="transmisionSelect = transmission" 
                            :class="transmisionSelect === transmission ? 'bg-gray-800 text-gray-100' : 'border border-gray-400'" 
                            class="min-w-[100px] break-normal p-4 rounded-2xl">{{ transmission }}</button>
                    </template>
                </section>
            </section>
            <!-- end of transmisions -->
            <!-- choose colour -->
            <section class="mb-4">
                <!-- label -->
                <p class="text-lg mb-2">Choose Colour</p>
                <section class="flex justify-between gap-4">
                    <template v-for="colour in colours" :key="colour">
                        <button @click="colourSelect = colour"
                            :class="colourSelect === colour ? `ring ring-gray-600 ${ colour }` : colour"
                            class="h-10 w-10 rounded-full duration-300" ></button>
                    </template>
                </section>
            </section>
            <!-- end of choose colour -->
            <!-- arrange by -->
            <section class="mb-4">
                <!-- label -->
                <p class="text-lg mb-2">Arrange By</p>
                <section class="flex no-scrollbar overflow-x-scroll gap-2">
                    <template v-for="arrange in arranges" :key="arrange">
                        <button @click="arrangeSelect = arrange" 
                            :class="arrangeSelect === arrange ? 'bg-gray-800 text-gray-100' : 'border border-gray-400'" 
                            class="min-w-[100px] break-normal p-4 rounded-2xl">{{ arrange }}</button>
                    </template>
                </section>
            </section>
            <!-- end of transmisions -->
            <!-- offer -->
            <section class="mb-4">
                <!-- label -->
                <p class="text-lg mb-2">Offer</p>
                <section>
                    <input @input="rangeHandler" type="range" class="w-full" min="100" max="1000000" step="100">
                    <!-- indicator -->
                    <section class="flex justify-between text-gray-500">
                        <p>IDR 100 K</p>
                        <p>IDR {{ range }} K</p>
                    </section>
                </section>
            </section>
            <!-- end of offer -->
            <!-- cta -->
            <button @click="emits('bottom-sheet:filter')" class="w-full bg-gray-800 rounded-full text-gray-50 font-medium py-3 text-lg">Filter</button>
            <!-- end of cta -->
        </main>
        <!-- end of bottom sheets -->
    </main>
</template>

<script setup>

const seatSelect = ref(1)
const transmisionSelect = ref('Manual')
const arrangeSelect = ref('A - Z')
const colourSelect = ref('bg-gray-300')
const range = ref(0)
const transmissions = ['Manual', 'Automatic']
const colours = ['bg-gray-300', 'bg-red-400', 'bg-slate-400', 'bg-sky-400', 'bg-yellow-500', 'bg-indigo-600']
const arranges = ['High Sales', 'A - Z', 'Z - A']

const emits = defineEmits(['bottom-sheet:filter'])

const rangeHandler = e => range.value = e.target.value

</script>