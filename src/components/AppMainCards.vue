<script>
import { store } from '../store.js';
import AppCard from './AppCard.vue';

export default {
    name: 'AppMainCards',
    components: {
        AppCard,
    },
    data () {
        return {
            store
        };
    }
}
</script>

<template>
    <section>
        <div class="container bg-black d-flex flex-wrap py-2">
            <AppCard v-for="card in store.cardInfo" :key="card.id" :cardList="card"></AppCard>
        </div>
    </section>
</template>

<style scoped lang="scss">

@use '../style/generic';

section {
    background-color: brown;
}


</style>