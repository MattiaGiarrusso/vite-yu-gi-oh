import { reactive } from 'vue'

export const store = reactive({
    cardInfo: [],
    endpoint: 'https://db.ygoprodeck.com/api/v7/cardinfo.php?',
    archetypes: [],
    searchArchetype: ''
})

