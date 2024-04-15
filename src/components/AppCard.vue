<script>
   import { store } from '../store.js';
   export default {
    name: 'AppCard',
    props: {
        cardList: Object,
    }
   }
</script>

<template>

    <div class="card my-2" style="width: calc(100%/5);">
        <img :src="cardList.card_images[0].image_url_small" class="card-img-top" :alt="cardList.name">
        <div class="card-body">
            <h5 class="card-title "><strong>{{ cardList.name }}</strong></h5>
            <span class="card-text">{{ cardList.type }}</span>
            <p class="card-text"><small>{{ cardList.desc }}</small></p>
        </div>
    </div>
 
</template>

<style scoped lang="scss">

@use '../style/generic';

</style>