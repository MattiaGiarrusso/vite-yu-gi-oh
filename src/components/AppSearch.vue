<script>
import axios from 'axios';
import { store } from '../store.js';

export default {
    name: 'AppSearch',
    data() {
        return {
            store
        };
    },
    methods: {
        getArchetypeList() {
          axios.get("https://db.ygoprodeck.com/api/v7/archetypes.php")
				    .then((response) => {
					  this.store.archetypes = response.data;
				  })
        }
    },
    mounted() {
        this.getArchetypeList();
    }
}
</script>

<template>

  <section>
    <div class="container bg-black d-flex py-2">

      <select class="form-select" v-model="store.searchArchetype">
        <option value="" selected>Seleziona l'archetype</option>
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