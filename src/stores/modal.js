import { ref } from 'vue';
import { defineStore } from 'pinia';

export const useModalStore = defineStore('modal', () => {
    const isOpen = ref(false);

    function toggleModal () {
        isOpen.value = !isOpen.value
    }

    return {
        isOpen,
        toggleModal
    }
});