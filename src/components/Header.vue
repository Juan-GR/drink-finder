<script setup>
  import { computed } from 'vue';
  import { RouterLink, useRoute } from 'vue-router';
  import { useDrinksStore } from '../stores/drinks';

  const route = useRoute();
  const drinksStore = useDrinksStore();

  const isHomePage = computed(() => {
    return route.name === 'home';
  });

  const handleSubmit = () => {
    drinksStore.obtainRecipes();
  }
</script>

<template>
  <header class="bg-slate-800" :class="{ 'header': isHomePage }">
    <div class="mx-auto container px-5 py-16">
      <div class="flex justify-between items-center">
        <div>
          <RouterLink
            :to="{ name: 'home' }"
          >
            <img
              src="/img/logo.svg"
              alt="Logotipo"
              class="w-32"
            />
          </RouterLink>
        </div>
        <nav class="flex gap-4">
          <RouterLink
            :to="{ name: 'home' }"
            class="text-white font-bold uppercase"
            active-class="text-orange-500"
          >
            Inicio
          </RouterLink>
          <RouterLink
              :to="{ name: 'favourites' }"
              class="text-white font-bold uppercase"
              active-class="text-orange-500"
          >
            Favoritos
          </RouterLink>
        </nav>
      </div>

      <form
        v-if="isHomePage"
        class="md:w-1/2 2xl:w-1/3 bg-orange-400 my-32 p-10 rounded-lg shadow space-y-6"
        @submit.prevent="handleSubmit"
      >
        <div class="space-y-4">
          <label
            class="block text-white font-extrabold uppercase text-lg"
            for="ingredient"
          >
            Nombre o ingredientes
          </label>
          <input
            class="w-full p-3 rounded-lg shadow"
            type="text"
            id="ingredient"
            placeholder="Nombre o ingrediente: Ron, Tequila, Vodka..."
            v-model="drinksStore.search.name"
          >
        </div>
        <div class="space-y-4">
          <label
              class="block text-white font-extrabold uppercase text-lg"
              for="category"
          >
            Categoria
          </label>
          <select
              class="w-full p-3 rounded-lg shadow"
              id="category"
              v-model="drinksStore.search.category"
          >
            <option value="">Selecciona una categoría</option>
            <option
                v-for="category in drinksStore.categories"
                :key="category.strCategory"
                :value="category.strCategory"
            >
              {{ category.strCategory }}
            </option>
          </select>
        </div>
        <input type="submit" value="Buscar recetas" class="bg-orange-800 hover:bg-orange-900 cursor-pointer text-white font-extrabold w-full p-2 rounded-lg uppercase">
      </form>
    </div>
  </header>
</template>

<style>
  .header {
    background-image: url('/img/bg.jpg');
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
  }
</style>