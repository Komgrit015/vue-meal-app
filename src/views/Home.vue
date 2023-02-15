<template>
  <main >
    <!-- <h1>test</h1> -->
    <!-- <pre> {{ meals }}</pre> -->
    <div class="flex flex-col p-8 ">

    </div>
  </main>
</template>

<script setup>
import { computed, onMounted, ref } from "vue";
import store from "../store";
import axiosClient from '../axiosClient.js'

const ingredients = ref ([])

onMounted(async () => {
    const response = await axiosClient.get('/list.php?i=list')
    console.log(response.data)
})

</script>
