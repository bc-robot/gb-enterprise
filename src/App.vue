<template>
    <div class="top-box">
        <Navbar></Navbar>
        <router-view></router-view>
        <Footerbar></Footerbar>
    </div>
</template>

<script>
    import store from './vuex/store'
    import Navbar from './components/Home/nav.vue'
    import Footerbar from './components/Home/footer.vue'

    export default {
        store,
        components: {
            Navbar, Footerbar
        },
    }
</script>

<style>
    @import './assets/css/normalize.css';
    @import './assets/css/index.css';
</style>