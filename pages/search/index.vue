<template>
    <main class="container">
        <!-- search bar -->
        <section class="flex justify-between gap-6">
            <!-- search input -->
            <section class="w-10/12 rounded-2xl overflow-hidden bg-gray-100 pl-5 flex justify-between items-center">
                <i class="fa-solid fa-magnifying-glass text-xl"></i>
                <input type="search" placeholder="Search products" class="rounded-2xl pl-2 w-11/12 py-4 bg-gray-100">
            </section>
            <!-- filter -->
            <button @click="showBottomSheet = true" class="w-2/12 bg-gray-800 text-gray-100 rounded-full">
                <i class="fa-solid fa-sliders text-xl"></i>
            </button>
        </section>
        <!-- end of search bar -->
        <!-- popular segments -->
        
        <section class="mt-4 mb-6">
            <p class="text-xl font-medium">Popular Segments</p>
            <!-- list of all segments -->
            <section class="flex flex-wrap gap-2 mt-3">
                <template v-for="segment in segments" :key="segment">
                    <button @click="addingSelecteds(segment)"
                        :class="ifExist(segment.id) ? 'bg-gray-800 text-gray-200' : 'bg-gray-100 text-gray-500'"
                        class="text-sm px-3 py-2 rounded-xl">
                        {{ segment.name }}
                    </button>
                </template>
            </section>
        </section>
        <!-- end of popular segments -->
        <!-- all brands -->
        <section class="mt-4 mb-6">
            <p class="text-xl font-medium">All Brands</p>
            <!-- list of all logo brand -->
            <section class="no-scrollbar flex overflow-x-scroll gap-6 mt-3">
                <template v-for="brand in 8" :key="brand">
                    <section>
                        <button class="mx-auto mb-2 bg-gray-100 w-12 h-12 rounded-full grid place-items-center">
                            <img class="w-9/12" src="~/assets/img/toyota.png" alt="">
                        </button>
                        <p class="uppercase font-medium text-gray-800">Toyota</p>
                    </section>
                </template>
            </section>
        </section>
        <!-- end of all brands -->
        <!-- fuel type -->
        <section class="mt-4 mb-6">
            <p class="text-xl font-medium">All Brands</p>
            <!-- list of all fuels -->
            <section class="no-scrollbar flex overflow-x-scroll gap-3 mt-3">
                <template v-for="fuel in fuels" :key="fuel">
                    <button @click="addingSelecteds(fuel)"
                        :class="ifExist(fuel.id) ? 'bg-gray-800 text-gray-200' : 'bg-gray-100 text-gray-500'"
                        class="text-sm px-3 py-2 rounded-xl">
                        {{ fuel.name }}
                    </button>
                </template>
            </section>
        </section>
        <!-- end of fuel type -->
        <!-- List all card -->
        <section class="flex gap-2 flex-wrap justify-between">
            <template v-for="card in 6" :key="card">
                <Card></Card>
            </template>
        </section>
        <!-- End of List all card -->
        <!-- Bottom sheet -->
        <BottomSheet v-if="showBottomSheet" @bottom-sheet:filter="showBottomSheet = false"></BottomSheet>
        <!-- end of Bottom sheet -->
    </main>
</template>

<script setup>

definePageMeta({
    title: 'Search'
})

const showBottomSheet = ref(false)

const segments = [
    { name: 'SUV', id: 1 },
    { name: 'Sedan', id: 2 },
    { name: 'Hatchback', id: 3 },
    { name: 'Convertible', id: 4 },
    { name: 'Minivan', id: 5 },
    { name: 'Compact SUV', id: 6 },
    { name: 'Truck', id: 7 },
]

const fuels = [
    { name: 'CNG', id: 8 },
    { name: 'Petrol', id: 9 },
    { name: 'Diesel', id: 10 },
    { name: 'Electric', id: 11 },
    { name: 'Hybrid', id: 12 }
]

const selecteds = ref([])

const ifExist = id => {
    if ( selecteds.value.filter( item => item.id === id ).length > 0 ) return true
    return false
}

const removeItem = id => {
    selecteds.value = selecteds.value.filter( item => item.id !== id )
}

const addingSelecteds = obj => {
    const { id } = obj
    if ( !ifExist(id) ) selecteds.value.push(obj)
    else removeItem(id)
}

</script>