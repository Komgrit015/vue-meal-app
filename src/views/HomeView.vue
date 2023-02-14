<script setup>
import { computed } from 'vue';
import store from '../store';

const meals = computed( () => {
    store.state.meals
});
</script>

<template>
  <main>
    <h1>test</h1>
    <pre> {{ meals }}</pre>
  </main>
</template>
