<script setup>
  import Recipe from '../components/Recipe.vue';
  import { useDrinksStore } from '../stores/drinks';

  const drinksStore = useDrinksStore();
</script>

<template>
  <h1 class="text-6xl font-extrabold">Recetas</h1>
  <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 my-10">
    <Recipe
      v-for="recipe in drinksStore.recipes"
      :key="recipe.idDrink"
      :recipe="recipe"
    />
  </div>
</template>