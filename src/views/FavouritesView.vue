<script setup>
  import { useFavouritesStore } from '../stores/favourites';
  import Recipe from '../components/Recipe.vue';

  const favouritesStore = useFavouritesStore();
</script>

<template>
  <h1 class="text-6xl font-extrabold">Favoritos</h1>
  <p v-if="favouritesStore.noFavourites" class="my-10 text-center text-2xl">No hay favoritos aún</p>
  <div v-else class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 my-10">
    <Recipe
        v-for="recipe in favouritesStore.favourites"
        :key="recipe.idDrink"
        :recipe="recipe"
    />
  </div>
</template>