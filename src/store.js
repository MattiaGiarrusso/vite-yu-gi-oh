import { reactive } from 'vue'

export const store = reactive({
    cardInfo: [],
    loading: true,
    archetypes: [],
    searchArchetype: ''
})

