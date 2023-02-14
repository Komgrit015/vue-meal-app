<template>
  <main>
    <!-- <h1>test</h1> -->
    <!-- <pre> {{ meals }}</pre> -->
    <div class="flex flex-col p-8 ">
      <input
        type="text"
        class="p-3 rounded border-2 border-gray-200 w-full"
        placeholder="Search for meals"
      />

      <div class="flex gap-1 mt-8 items-center justify-center">
    
        <!-- <RouterLink v-for="letter of letters"> {{ letter }} </RouterLink> -->
        <router-link
          :to="{ name: 'byLetter', params: { letter } }"
          v-for="letter of letters"
          :key="letter"
          class="w-2 h-2 flex items-center justify-center hover:text-orange-500 hover:scale-150 transition-all"
        >
          {{ letter }}
        </router-link>
      </div>
    </div>
  </main>
</template>

<script setup>
import { computed, onMounted, ref } from "vue";
import store from "../store";
import axiosClient from '../axiosClient.js'

const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
const ingredients = ref ([])

onMounted(async () => {
    const response = await axiosClient.get('/list.php?i=list')
    console.log(response.data)
})

</script>
