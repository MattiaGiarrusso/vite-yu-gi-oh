<script>
   export default {
    name: 'AppHeader',
    data () {
        return {
            logo: 'yugioh_anime_logo.png'
            }
        },
        methods: {
        getImageUrl(logo) {
            return new URL('../assets/img/' + logo, import.meta.url).href;
            }
        },
    }
</script>

<template>
    <header>
        <div class="ms-logo">
            <div>
                <img :src="getImageUrl(logo)" alt="">
            </div>
            <h2>Yu-Gi-Oh! API</h2>
        </div>
    </header>
</template>

<style scoped lang="scss">

@use '../style/generic';

header {
    width: 100%;
    height: 70px;
    background-color: burlywood;
    padding: 5px 20px;

    div {
        height: 100%;
        display: flex;
        align-items: center;
        gap: 10px;
        img {
            height: 100%;
        }
    }
}

</style>