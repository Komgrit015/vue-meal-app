<template>
    <div
        class="bg-white shadow rounded-xl hover:scale-105 transition-all"
    >
        <router-link :to="{ name: 'mealDetails', params: { id: meal.idMeal } }">
            <img :src="meal.strMealThumb" :alt="meal.strMeal" class="rounded-t-xl w-full h-48 object-cover">
            </router-link>
            <div class="px-3">
                <h3 class="mt-3 font-semibold"> {{ meal.strMeal }} </h3>
                <p class="mb-4">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Mollitia vitae officiis consequuntur autem repellat repudiandae rerum, quasi pariatur incidunt commodi blanditiis ut ex ullam ipsam quae recusandae cupiditate voluptas vel?
                </p>
        
                <div class="my-3 flex items-center justify-between">
                    <YouTubeButton :href="meal.strYoutube"/>
                </div>
            </div>
    </div>
</template>

<script setup>
import YouTubeButton from './YouTubeButton.vue';

const { meal } = defineProps({
    meal: {
        required: true,
        type: Object
    }
  })
</script>

