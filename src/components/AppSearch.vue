<script>
import { store } from '../store.js';

export default {
    name: 'AppSearch',
    data() {
        return {
            store
        };
    }
}
</script>

<template>

  <section>
    <div class="container bg-black d-flex py-2">

      <select class="form-select" aria-label="Default select example" v-model="store.searchArchetype">
        <option v-for="archetype in store.archetypes" :value="archetype.archetype_name">{{ archetype.archetype_name }}</option>
      </select>
      
      <button type="button" class="btn btn-light" @click="$emit('searchWord')">Cerca</button>

    </div>    
  </section>  

</template>

<style scoped lang="scss">

@use '../style/generic';

section {
  background-color: brown;
}

</style>