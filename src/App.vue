<script>
  import axios from 'axios';
  import { store } from './store.js';
  import AppHeader from './components/AppHeader.vue';
  import AppMainCards from './components/AppMainCards.vue';
  import AppSearch from './components/AppSearch.vue';
  import AppCard from './components/AppCard.vue';

  export default {
    components: {
      AppHeader,
      AppMainCards,
      AppCard,
      AppSearch
    },
    data () {
      return {
        store,
      };
    },
    methods: {
      getCardFromApi() {

      const queryParams = {
        num: 20,
        offset: 0
      };

      let apiUrl = store.endpoint;
      if (store.searchArchetype !== '') {

        queryParams.archetype = store.searchArchetype

        axios.get(apiUrl, { params: queryParams })
        .then((response) => {
          store.cardInfo = response.data.data;
        });
      }

      else {
        
        delete queryParams.archetype

        axios.get(store.endpoint, { params: queryParams })
        .then((response) => {
          store.cardInfo = response.data.data;
        });
      }
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
