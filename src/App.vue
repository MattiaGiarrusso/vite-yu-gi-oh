<script>
  import axios from 'axios';
  import { store } from './store.js';
  import AppHeader from './components/AppHeader.vue';
  import AppMainCards from './components/AppMainCards.vue';

  export default {
    components: {
      AppHeader,
      AppMainCards,
    },
    data () {
      return {
        store,
      };
    },
    methods: {
      getCardFromApi() {
        axios.get('https://db.ygoprodeck.com/api/v7/cardinfo.php?banlist=tcg&level=4&sort=name&num=20&offset=0')
        .then((response) => {
          store.cardInfo = response.data.data
        });
      }
    },
    mounted() {
      this.getCardFromApi ();
    }
  }
</script>

<template>
  <AppHeader></AppHeader>

  <main>
    <AppMainCards></AppMainCards>
  </main>
</template>

<style lang="scss">

@use './style/generic';

</style>
