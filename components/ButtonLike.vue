<template>
    <button @click="clicked = !clicked">
        <i :class="clicked ? 'fa-solid' : 'fa-regular'" class="fa-heart text-orange-400 text-xl"></i>
    </button>
</template>

<script setup>

const clicked = ref(false)

</script>