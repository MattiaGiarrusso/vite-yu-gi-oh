<script>
  import AppHeader from './components/AppHeader.vue';
  import AppMainCards from './components/AppMainCards.vue';

  export default {
    components: {
      AppHeader,
      AppMainCards,
    }
  }
</script>

<template>
  <AppHeader></AppHeader>
  <AppMainCards></AppMainCards>
</template>

<style lang="scss">

@use './style/generic';

</style>
