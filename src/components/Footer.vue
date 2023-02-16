<template>
    <footer class="bg-white px-8 sm:px-0">
    <div class="flex flex-wrap w-full mx-auto sm:justify-center py-10 gap-y-5">
        <div class="flex-item sm:w-3/12 w-3/6 flex-row">
            <div class="flex flex-col gap-8">
                <h1 class="font-bold text-3xl">LINKS</h1>
                <ul class="flex flex-col gap-4">
                    <li>
                    <router-link 
                    :to="{ name: 'byName' }" class="text-xl py-2 pr-4  transition-colors hover:bg-orange-500 hover:text-white">Search Meals</router-link>
                    </li>
                    <li>
                    <router-link 
                    :to="{ name: 'byLetter' }" class="text-xl py-2 pr-4  transition-colors hover:bg-orange-500 hover:text-white">Meals By Letter</router-link>
                    </li>
                    <li>
                    <router-link 
                    :to="{ name: 'ingredients' }" class="text-xl py-2 pr-4  transition-colors hover:bg-orange-500 hover:text-white">Meals By Ingredients</router-link>
                    </li>
                </ul>
            </div>
            
        </div>
        <div class="flex-item sm:w-3/12 w-3/6">Test1</div>
        <div class="flex-item sm:w-3/12 w-3/6">Test1</div>

    </div>
</footer>
</template>