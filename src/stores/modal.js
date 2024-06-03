import { ref, computed } from 'vue';
import { defineStore } from 'pinia';
import { useFavouritesStore } from '../stores/favourites.js';

export const useModalStore = defineStore('modal', () => {
    const favouritesStore = useFavouritesStore();
    const isOpen = ref(false);


    function toggleModal () {
        isOpen.value = !isOpen.value
    }

    const textButton = computed(() => {
        if (favouritesStore.existsInFavourites()) {
            return 'Quitar de favoritos'
        } else {
            return 'Añadir a favoritos'
        }
    });

    return {
        isOpen,
        textButton,
        toggleModal
    }
});