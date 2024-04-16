<script>
  import axios from 'axios';
  import { store } from './store.js';
  import AppHeader from './components/AppHeader.vue';
  import AppMainCards from './components/AppMainCards.vue';
  import AppSearch from './components/AppSearch.vue';

  export default {
    components: {
      AppHeader,
      AppMainCards,
      AppSearch
    },
    data () {
      return {
        store,
      };
    },
    methods: {
      getCardFromApi() {
        let apiUrl = "https://db.ygoprodeck.com/api/v7/cardinfo.php?num=20&offset=0";

        const queryParams = {};

        // if(store.searchArchetype === 'Archetype') {
        // }

        axios.get(apiUrl, {
        params: queryParams
        })
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
    <AppSearch @searchWord="getCardFromApi"></AppSearch>
    <AppMainCards></AppMainCards>
  </main>
</template>

<style lang="scss">

@use './style/generic';

</style>
