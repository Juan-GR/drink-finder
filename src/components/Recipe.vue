<script setup>
  import { useDrinksStore} from '../stores/drinks';
  const drinksStore = useDrinksStore();

defineProps({
    recipe: {
      type: Object
    }
  })
</script>

<template>
  <div class="border shadow-lg">
    <div class="overflow-hidden">
      <img
        class="hover:scale-125 transition-transform hover:rotate-2"
        :src="recipe.strDrinkThumb"
        :alt="recipe.strDrink"
      >
    </div>
    <div class="p-5">
      <h2 class="text-2xl font-extrabold truncate">{{ recipe.strDrink }}</h2>
      <button
        type="button"
        class="text-white bg-orange-500 hover:bg-orange-600 px-4 py-2 mt-4 rounded font-bold uppercase w-full"
        @click="drinksStore.obtainRecipeById(recipe.idDrink)"
      >
        Ver receta
      </button>
    </div>
  </div>
</template>