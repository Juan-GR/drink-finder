import { ref, watch, onMounted, computed } from 'vue';
import { defineStore } from 'pinia';
import { useDrinksStore } from '../stores/drinks';
import { useModalStore } from '../stores/modal';
import { useNotificationsStore } from '../stores/notifications.js';

export const useFavouritesStore = defineStore('favourites', () => {
    const drinksStore = useDrinksStore();
    const modalStore = useModalStore();
    const notificationsStore = useNotificationsStore();
    const favourites = ref([]);

    onMounted(() => {
        favourites.value = JSON.parse(localStorage.getItem('favourites')) || [];
    });

    const noFavourites = computed(() => favourites.value.length === 0);

    watch(favourites, () => {
        setFavouritesLocalStorage();
    }, { deep: true });
    function handleClickFavourite (){
        if (existsInFavourites()) {
            removeFavourite();
        } else {
            addFavourite();
        }
        modalStore.toggleModal();
    }

    function addFavourite () {
        favourites.value.push(drinksStore.recipe);
        notificationsStore.show = true;
        notificationsStore.text = 'Añadido a favoritos';
    }

    function setFavouritesLocalStorage (){
        localStorage.setItem('favourites', JSON.stringify(favourites.value));
    }

    function existsInFavourites () {
        const favsLocalStorage = JSON.parse(localStorage.getItem('favourites')) || [];
        return favsLocalStorage.some(favourite => favourite.idDrink === drinksStore.recipe.idDrink);
    }

    function removeFavourite () {
        favourites.value = favourites.value.filter(favourite => favourite.idDrink !== drinksStore.recipe.idDrink);
        notificationsStore.show = true;
        notificationsStore.text = 'Eliminado de favoritos';
    }

    return {
        favourites,
        handleClickFavourite,
        existsInFavourites,
        noFavourites
    }
})