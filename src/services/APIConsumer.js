import api from '../lib/axios';

export const APIConsumer = {
    getCategories () {
        return api.get('/list.php?c=list');
    },
    searchRecipes ({ category, name }) {
        const params = `i=${name}&c=${category}`;
        return api.get(`/filter.php?${params}`);
    },
    searchRecipeById (id) {
        return api.get(`/lookup.php?i=${id}`);
    }
}