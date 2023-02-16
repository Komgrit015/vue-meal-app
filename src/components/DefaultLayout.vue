<template>
  <Navbar/>
    <main class="pt-[88px] max-w-[1200px] mx-auto w-full flex-grow">
      <RouterView />
    </main>
    <Footer></Footer>
</template>

<script setup>
import Footer from "../components/Footer.vue";
import Navbar from "../components/Navbar.vue";
</script>
