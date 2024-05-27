<script setup>

</script>

<template>
  <header>
    <div class="mx-auto container px-5 py-16">
      <div>

      </div>

      <form class="md:w-1/2 2xl:w-1/3 bg-orange-400 my-32 p-10 rounded-lg shadow space-y-6">
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
          >
            <option value="">Selecciona una categoría</option>
          </select>
        </div>
        <input type="submit" value="Buscar recetas" class="bg-orange-800 hover:bg-orange-900 cursor-pointer text-white font-extrabold w-full p-2 rounded-lg uppercase">
      </form>
    </div>
  </header>
</template>