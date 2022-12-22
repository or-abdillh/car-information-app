<template>
  <!-- Fixed layout -->
  <main class="md:w-4/12 md:mx-auto pb-24">
    <Navbar></Navbar>
    <NuxtPage></NuxtPage>
    <BottomBar></BottomBar>
  </main>
  <!-- End of Fixed layout -->
</template>

<style>

.page-enter-active,
.page-leave-active {
  transition: all 0.4s;
}
.page-enter-from,
.page-leave-to {
  opacity: 0;
  transform: translateY(1rem);
}

</style>