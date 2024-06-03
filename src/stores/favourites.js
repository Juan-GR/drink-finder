import { defineStore } from 'pinia';

export const useFavouritesStore = defineStore('favourites', () => {
    const handleClickFavourite = () => {
        console.log('Favorito');
    }

    return {
        handleClickFavourite
    }
})