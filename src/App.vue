<template>
    <div class="top-box">
        <Navbar></Navbar>
        <router-view></router-view>
        <Footerbar></Footerbar>
        <div id="demo">
            <p>{{message}}</p>
            <input v-model="message">
        </div>
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
        data() {
            return {
                message: 'Hello Vue.js!'
            }
        }
    }
</script>

<style>
    @import './assets/css/normalize.css';
    @import './assets/css/index.css';
</style>