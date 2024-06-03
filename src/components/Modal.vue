<script setup>
  import { Dialog, DialogPanel, DialogTitle, TransitionChild, TransitionRoot } from '@headlessui/vue';
  import { useModalStore } from '../stores/modal';
  import { useDrinksStore } from '../stores/drinks';
  import { useFavouritesStore} from '../stores/favourites';

  const modalStore = useModalStore();
  const drinksStore = useDrinksStore();
  const favouritesStore = useFavouritesStore();

  const formatIngredients = () => {
    const ingredientsContainer = document.createElement('div');

    for (let i = 1; i <= 15; i++) {
      if (drinksStore.recipe[`strIngredient${i}`]) {
        const ingredient = document.createElement('p');
        ingredient.textContent = `${drinksStore.recipe[`strIngredient${i}`]} - ${drinksStore.recipe[`strMeasure${i}`]}`;
        ingredientsContainer.appendChild(ingredient);
      }
    }

    return ingredientsContainer;
  }

</script>

<template>
  <TransitionRoot as="template" :show="modalStore.isOpen" >
    <Dialog as="div" class="relative z-10" @close="modalStore.toggleModal()">
      <TransitionChild as="template" enter="ease-out duration-300" enter-from="opacity-0" enter-to="opacity-100" leave="ease-in duration-200" leave-from="opacity-100" leave-to="opacity-0">
        <div class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
      </TransitionChild>
      <div class="fixed inset-0 z-10 overflow-y-auto">
        <div class="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
          <TransitionChild as="template" enter="ease-out duration-300" enter-from="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95" enter-to="opacity-100 translate-y-0 sm:scale-100" leave="ease-in duration-200" leave-from="opacity-100 translate-y-0 sm:scale-100" leave-to="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95">
            <DialogPanel class="relative transform overflow-hidden rounded-lg bg-white px-4 pt-5 pb-4 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-2xl sm:p-6" >
              <div>
                <div class="mt-3">
                  <DialogTitle as="h3" class="text-4xl font-extrabold my-5 text-gray-900">
                    {{ drinksStore.recipe.strDrink }}
                  </DialogTitle>
                  <img class="mx-auto w-96" :src="drinksStore.recipe.strDrinkThumb" :alt="drinksStore.recipe.strDrink">

                  <DialogTitle as="h3" class="text-4xl font-extrabold my-5 text-gray-900">
                    Ingredientes y cantidades
                  </DialogTitle>

                  <div v-html="formatIngredients().outerHTML"></div>

                  <DialogTitle as="h3" class="text-4xl font-extrabold my-5 text-gray-900">
                    Instrucciones
                  </DialogTitle>

                  <p class="text-lg font-bold my-5 text-gray-600">{{ drinksStore.recipe.strInstructions }}</p>
                </div>
              </div>
              <div class="mt-5 sm:mt-6 flex justify-between gap-4">
                <button
                  @click="modalStore.toggleModal()"
                  type="button"
                  class="w-full rounded bg-gray-600 p-3 font-bold uppercase text-white shadow hover:bg-gray-500"
                >
                  Cerrar ventana
                </button>
                <button
                  type="button"
                  class="w-full rounded bg-orange-500 p-3 font-bold uppercase text-white shadow hover:bg-orange-700"
                  @click="favouritesStore.handleClickFavourite()"
                >
                  Agregar a favoritos
                </button>
              </div>
            </DialogPanel>
          </TransitionChild>
        </div>
      </div>
    </Dialog>
  </TransitionRoot>
</template>
  