import { ref, watch, onMounted } from 'vue';
import { defineStore } from 'pinia';
import { useDrinksStore } from '../stores/drinks';
import { useModalStore } from '../stores/modal';

export const useFavouritesStore = defineStore('favourites', () => {
    const drinksStore = useDrinksStore();
    const modalStore = useModalStore();
    const favourites = ref([]);

    onMounted(() => {
        favourites.value = JSON.parse(localStorage.getItem('favourites')) || [];
    });

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
    }

    return {
        favourites,
        handleClickFavourite,
        existsInFavourites
    }
})