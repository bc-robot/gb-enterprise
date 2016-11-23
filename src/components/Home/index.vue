<template>
    this is index page...
    <!--<div class="heart"></div>-->

    <!--<button class="btn btn-warning" :trades="trades">-->
    <button class="btn btn-warning" @click="getTrade()">
        (我的商品)
    </button>

    {{navs}}
    <div v-for="t in navs">
        {{t}}
    </div>
</template>

<style>
    .heart{
        width: 150px;
        height: 100px;
        background-color: #E76464;
        transform: rotate(45deg);
        -moz-transform: rotate(45deg);
        -webkit-transform: rotate(45deg);
        border-top-left-radius: 50px 50px;
        border-bottom-left-radius: 50px 50px;
        position: relative;
        margin-top: 200px;
    }
    .heart::after{
        transform: rotate(-90deg);
        -moz-transform: rotate(-90deg);
        -webkit-transform: rotate(-90deg);
        content: " ";
        display: block;
        position: absolute;
        width: 150px;
        height: 100px;
        background-color: #E76464;
        border-top-right-radius: 50px 50px;
        border-bottom-right-radius: 50px 50px;
        top: -25px;
        right: -25px;
    }
</style>

<script>
    import { getTrade } from '../../vuex/actions'

    export default {
        components: {

        },
        vuex: {
            getters: {
                teacher: state => state.trades,
                navs: [
                    {
                        name: '网页'
                    },
                    {
                        name: '新闻'
                    },
                    {
                        name: '贴吧'
                    },
                    {
                        name: '知道'
                    },
                    {
                        name: '音乐'
                    },
                    {
                        name: '图片'
                    },
                ]
            },
            actions: {
                getTrade
            }
        }
    }
</script>