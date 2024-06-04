import { onMounted, ref, reactive, computed } from 'vue';
import { defineStore } from 'pinia';
import { APIConsumer } from '../services/APIConsumer';
import { useModalStore } from '../stores/modal';
export const useDrinksStore = defineStore('drinks', () => {
    const modalStore = useModalStore();
    const categories = ref([]);
    const search = reactive({
        name: '',
        category: ''
    });

    const recipes = ref([]);
    const recipe = ref({});

    const noRecipes = computed(() => recipes.value.length === 0);

    onMounted(() => {
        APIConsumer.getCategories()
            .then(response => {
                const { data: { drinks } } = response;
                categories.value = drinks;
            })
            .catch(error => {
                console.log('La petición para obtener las categorías ha fallado', error);
            });
    });

    async function setRecipes () {
        const { data: { drinks }} = await APIConsumer.searchRecipes(search);
        recipes.value = drinks;
    }

    async function setRecipeById (id) {
        const { data: { drinks }} = await APIConsumer.searchRecipeById(id);
        recipe.value = drinks[0];

        modalStore.toggleModal();
    }

    return {
        categories,
        search,
        recipes,
        recipe,
        noRecipes,
        setRecipeById,
        setRecipes
    }
});
