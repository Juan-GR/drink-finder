import { ref, watch, watchEffect } from 'vue';
import { defineStore } from 'pinia';

export const useNotificationsStore = defineStore('notifications', () => {
    const text = ref('');
    const error = ref(false);
    const show = ref(false);

    watchEffect(() => {
        if (show.value) {
            setTimeout(() => {
                text.value = '';
                error.value = false;
                show.value = false;
            }, 2000);
        }
    });

    return {
        text,
        error,
        show
    }
});
