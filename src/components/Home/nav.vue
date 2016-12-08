<template>
    <div class="all-wrapper">
        <div class="header">
            <!--导航-->
            <nav id="navbar-top" class="navbar navbar-default" role="navigation">
                <div class="container-fluid">
                    <div class="navbar-header">
                        <!--<a class="navbar-brand" href="#">菜鸟教程</a>-->
                        <img src="../../assets/img/xiangmugongchang2.png">
                    </div>
                    <div class="category">
                        <ul class="nav navbar-nav">

                            <li v-for="nav in navs" :class="{'dropdown': nav.child}">
                                <a v-if="nav.child" href="#" class="dropdown-toggle" data-toggle="dropdown">
                                    更多
                                    <b class="caret"></b>
                                </a>
                                <a v-else v-link="{ path: nav.url }" @mouseover="showNavDown(nav.name, $event)">{{nav.name}}</a>
                                <ul v-if="nav.child" class="dropdown-menu">
                                    <li v-for="nav1 in nav.child">
                                        <a v-link="{ path: nav1.url }">{{ nav1.name }}</a></li>
                                </ul>
                            </li>
                        </ul>

                        <ul class="nav navbar-nav navbar-right">
                            <li class="dropdown userinfo">
                                <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button">
                            <span>
                                <img src="http://www.xmgc360.com/files/user/2015/10-12/171044464b75564591.png">
                                <span class="badge">17</span>
                            </span>
                                    <span>杰米诺</span>
                                    <b class="caret"></b>
                                </a>
                                <ul class="dropdown-menu">
                                    <li><a v-link="{ path: '/' }">我的首页</a></li>
                                    <li role="separator" class="divider"></li>
                                    <li><a v-link="{ path: '/class' }">我的班级</a></li>
                                    <li role="separator" class="divider"></li>
                                    <li class="notice">
                                        <span>通知(15)</span>
                                        <span>私信(2)</span>
                                    </li>
                                    <li role="separator" class="divider"></li>
                                    <li>
                                        <a>
                                            <p>我的名片</p>
                                            <img class="gold" src="http://www.xmgc360.com//_imgs/金币.png">金币: 33713</a>

                                    </li>
                                    <li role="separator" class="divider"></li>
                                    <li><a>签到</a></li>
                                    <li role="separator" class="divider"></li>
                                    <li><a>资料设置</a></li>
                                    <li role="separator" class="divider"></li>
                                    <li><a>退出账号</a></li>
                                </ul>
                            </li>
                            <li class="dropdown share">
                                <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button">
                                    <img src="http://www.xmgc360.com//_imgs/share.png">
                                    <b class="caret"></b>
                                </a>
                                <ul class="dropdown-menu shareto">
                                    <li> <a><img src="http://www.xmgc360.com//_imgs/QQclr.png">QQ消息</a> </li>
                                    <li role="separator" class="divider"></li>
                                    <li> <a><img src="http://www.xmgc360.com//_imgs/qzone.png">QQ空间</a> </li>
                                    <li role="separator" class="divider"></li>
                                    <li> <a><img src="http://www.xmgc360.com//_imgs/新浪微博.png">新浪微博</a> </li>
                                    <li role="separator" class="divider"></li>
                                    <li> <a><img src="http://www.xmgc360.com//_imgs/wechat.png">扫一扫</a> </li>
                                </ul>
                            </li>
                            <li class="dropdown buggy" @click="showBuggy1">
                                <a href="#" role="button">
                                    <img src="http://www.xmgc360.com//_imgs/buggray.png">
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
            <!--项目库下拉-->
            <div class="nav-hide-drop" v-show="dropShow == 'xmkShow'" @mouseleave="dropShow = false">
                <div class="">
                    <div class="nav-hide-drop-left">
                        <p>项目分类</p>
                    </div>
                    <div class="nav-hide-drop-right">
                        <button class="btn btn-xs xmfl">
                            C语言
                        </button>
                        <button class="btn btn-xs xmfl">
                            C++
                        </button>
                    </div>
                </div>
            </div>

            <!--视频库下拉-->
            <div class="nav-hide-drop-sp" v-show="dropShow == 'videoShow'" @mouseleave="dropShow = false">
                <div class="">
                    <div class="nav-hide-drop-left">
                        <p>课程分类</p>
                        <p>共有9个大类</p>
                    </div>
                    <div class="nav-hide-drop-right">
                        <div class="row">
                            <button class="btn btn-xs xmfl-sp">
                                项目配套课程
                            </button>
                            <button class="btn btn-xs xmfl">
                                C++
                            </button>
                            <button class="btn btn-xs xmfl">
                                C++
                            </button>
                            <button class="btn btn-xs xmfl">
                                C++
                            </button>
                        </div>
                        <div class="row">
                            <button class="btn btn-xs xmfl-sp" style="background: #954350">
                                基础开发
                            </button>
                            <button class="btn btn-xs xmfl">
                                C
                            </button>
                            <button class="btn btn-xs xmfl">
                                C++
                            </button>
                            <button class="btn btn-xs xmfl">
                                JAVA
                            </button>
                        </div>
                        <div class="row">
                            <button class="btn btn-xs xmfl-sp" style="background: #B8712B">
                                后端开发
                            </button>
                            <button class="btn btn-xs xmfl">
                                C
                            </button>
                            <button class="btn btn-xs xmfl">
                                C++
                            </button>
                            <button class="btn btn-xs xmfl">
                                JAVA
                            </button>

                        </div>
                        <div class="row">
                            <button class="btn btn-xs xmfl-sp" style="background: #417B35">
                                数据分析
                            </button>
                            <button class="btn btn-xs xmfl">
                                C
                            </button>
                            <button class="btn btn-xs xmfl">
                                C++
                            </button>
                            <button class="btn btn-xs xmfl">
                                JAVA
                            </button>
                        </div>
                        <div class="row">
                            <button class="btn btn-xs xmfl-sp" style="background: #15758A">
                                技术前沿
                            </button>
                            <button class="btn btn-xs xmfl">
                                C
                            </button>
                            <button class="btn btn-xs xmfl">
                                C++
                            </button>
                            <button class="btn btn-xs xmfl">
                                JAVA
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            <!--bug下拉框-->
            <modal title="buggy" :show.sync="showModal" ok-text="hahah" backdrop="false"  width="60%">
                <div slot="modal-header" class="modal-header mheader">
                    <div class="modal-title">添加BUG问题反馈或建议</div>
                </div>
                <div slot="modal-body" class="modal-body mbody">
                    <div class="row buggy-input-div">
                        <div class="col-xs-3">
                            <span class="pull-right">标题</span>
                        </div>
                        <div class="col-xs-7">
                            <input type="buggy-text" v-model="buggyTitle">
                        </div>
                    </div>
                    <div class="row buggy-textarea-div">
                        <div class="col-xs-3">
                            <span class="pull-right">内容</span>
                        </div>
                        <div class="col-xs-7">
                            <textarea class="buggy-content" v-model="buggyContent"></textarea>
                        </div>
                    </div>

                    <div class="row">
                        <div class="col-xs-offset-3 col-xs-7">
                            <button class="btn btn-sm buggy-add-pic">
                                添加图片
                            </button>
                        </div>
                    </div>
                </div>

                <div slot="modal-footer" class="modal-footer">
                    <button type="button" class="btn btn-primary" @click="buggySubmit">提交</button>
                    <button type="button" class="btn btn-default" @click="showModal = false">取消</button>
                </div>
            </modal>
        </div>

        <div class="wrap-content" id="wrap-content">
            <div class="wrap-page-content">
                <div id="page-content-left" class="page-content-left">
                    <div class="l-page">

                    </div>
                </div>
            </div>

        </div>
    </div>

</template>

<style lang="less">
    /*@import '../../assets/css/nav.css';*/
    .all-wrapper {
        background: #eee none repeat scroll 0 0;
        height: auto;
        min-height: 100%;
        position: relative;
        .header {
            position: relative;
            top: 0;
            z-index: 999;
        }
        .wrap-content {
            margin: 0 auto;
            min-width: 1200px;
            position: relative;
            .page-content-left {
                background: #1c758a;
                float: left;
                margin-bottom: -10000px;
                padding-bottom: 10060px;
                width:60%;
                .l-page {
                    color: #FFFFFF;
                    margin: 0 auto;
                    padding: 60px 50px;
                    word-break: break-all;
                }
            }
        }
    }

    .mh5 {
        min-height: 750px;
    }

    #navbar-top {
        border-radius: 0px;
        background: #FFFFFF;
        height: 52px;

        img {
            margin-top: -15px;
            cursor: pointer;
            margin-right: 20px;
        }

        .category {
            ul {

            }
            li {
                &:hover {
                    background: #D9D9D9
                 }
            }

            .navbar-right {

                &>li {
                      height: 50px;
                }

                .userinfo {
                    .badge {
                        margin-top: -16px;font-size: 10px;background: #AF3330
                    }
                    img {
                        height:32px;border-radius:24px;margin-top: -8px;margin-right: 0px;
                    }
                    ul .notice span{
                        margin-left: 20px;
                        color: #2E79B9;
                    }
                    ul {
                        .gold {
                            width:14px;height:14px;margin-top:-2px
                        }
                       li {
                            a:hover{
                                background: #00CCC8;
                                cursor: pointer;
                            }
                            span:hover {
                                cursor: pointer;
                            }
                       }
                    }
                }
                .share {
                    .dropdown-toggle {
                        padding-left: 0;
                        padding-right: 0;

                        img {
                            height: 22px;margin: 0;
                        }

                    }
                    .shareto {
                        img {
                            height: 22px;
                            margin: 0;margin-right: 4px
                        }
                    }
                }
                .buggy {
                    img {
                        height: 32px;
                        margin-top: -5px;
                    }
                }
            }
        }
    }

    .nav-hide-drop {
        position: absolute;
        top: 52px;
        width: 100%;
        .nav-hide-drop-left {
            height: 170px;
            background: #1C8271;
            width: 25%;
            float: left;
            p {
                text-align: right;
                margin-top: 5px;
                margin-right: 10px;
                color: #FFFFFF;
                &:first-child {
                     margin-top: 20px;
                 }
            }
        }
        .nav-hide-drop-right {
            width: 75%;
            float: right;
            height: 170px;
            background: #FFFFFF;
            padding-left: 8%;
            padding-top: 25px;
            button {
                margin-left: 10px;
                margin-bottom: 5px;
            }
        }
        .xmfl-sp {
            border: 1px solid #CCCCCC;
            background: #197491;
            color: #FFFFFF;
        }
        .xmfl {
            border: 1px solid #CCCCCC;
            background: #FFFFFF;
            color: #3975A8;
            &:hover {
                 background: #E6E6E6;
                 color: #3E4A64;
             }
        }
    }

    .nav-hide-drop-sp {
        position: absolute;
        top: 52px;
        width: 100%;
        .nav-hide-drop-left {
            height: 170px;
            background: #1C8271;
            width: 25%;
            float: left;
            p {
                text-align: right;
                margin-top: 5px;
                margin-right: 10px;
                color: #FFFFFF;
                &:first-child {
                 margin-top: 40px;
                 }
            }
        }
        .nav-hide-drop-right {
            width: 75%;
            float: right;
            height: 170px;
            background: #FFFFFF;
            padding-left: 8%;
            padding-top: 25px;
            button {
                margin-left: 10px;
                margin-bottom: 5px;
            }
        }
        .xmfl-sp {
            border: 1px solid #CCCCCC;
            background: #197491;
            color: #FFFFFF;
        }
        .xmfl {
            border: 1px solid #CCCCCC;
            background: #FFFFFF;
            color: #3975A8;
            &:hover {
                 background: #E6E6E6;
                 color: #3E4A64;
            }
        }
    }

    .modal {
        .mheader {
            height: 80px;
            padding-left: 40px;
            padding-top: 20px;
            font-size: 18px;
            color: #AAAAAC;
            background: #F5F5F5;
            border-top-left-radius: 5px;
            border-top-right-radius: 5px;
        }
        .mbody {
            color: #888888;
            span {
                font-size: 16px;
                font-weight: 600;
            }
            input {
                width: 100%;
                border: none;
                border: 1px solid #CCCCCC;
                border-radius: 3px;
                padding: 2px 5px;
            }
            textarea {
                width: 100%;
                height: 80px;
                border: none;
                border: 1px solid #CCCCCC;
                border-radius: 3px;
                padding: 2px 5px;
            }
            .buggy-input-div {
                /*margin-top: 20px;*/
            }

            .buggy-textarea-div {
                margin-top: 20px;

            }

            .buggy-add-pic {
                margin-top: 10px;
                border: 1px solid #CCCCCC;
                background: #FFFFFF;
                &:hover {
                    background: #E6E6E6;
                }
            }
        }
    }
    
    .page-content {
        .page-l {
            width: 60%;
            background: #14758B;
        }
        .page-r {
            width: 40%;
            background: red;
        }
    }
</style>

<script>
//    import { alert } from 'vue-strap'
    import modal from '../Vuestrap/src/Modal.vue'

    import {
        showBuggy
    } from '../../vuex/actions'

    export default {
        components: {
            modal
        },
        vuex: {
            getters: {
                showModal: function (state) {
                    console.log(state)
                    return state.buggy.showModal
                }
            },
            actions: {
                showBuggy
            }
        },
        data() {
            return {
                navs:
                    [
                        { name: '我的首页', url: '/' },
                        { name: '项目库', url: '/xmk' },
                        { name: '视频库', url: '/spk' },
                        { name: '双选会', url: '/sxh' },
                        { name: 'Todomvc', url: '/todomvc',
                            child: [
                                { name: 'sub1', url: '/where' },
                                { name: 'sub2', url: '/there' }
                            ]
                        }
                    ],
                //bug开关
                showModal: false,

                // 提交bug的内容
                buggyTitle: '',
                buggyContent: '',

                //导航下拉

                dropShow: false,
            }
        },
        computed: {

        },
        beforeCompile() {
            console.log('before  complie')
        },
        created() {
            console.log('created - - - - - - ')
        },
        methods: {
            buggySubmit(event) {
                console.log(event.target, this.buggyTitle, this.buggyContent)
            },
            showBuggy1() {
                this.showModal = true
                console.log('methods, show buggy')
                this.showBuggy(true)
            },
            showNavDown(name, $event) {
                if(name == '项目库') {
                    this.dropShow = 'xmkShow'
                }else if(name == '视频库') {
                    this.dropShow = 'videoShow'
                }else {
                    this.dropShow = false
                }
                console.log(name, $event)
                console.log('hehe i am hover!',$event.target)
            }
        }
    }
</script>