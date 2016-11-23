<template>
    <div class="zhifuzhongxin">
        <span>
            支付中心
        </span>
    </div>

    <div class="zhifubox">
        <div class="dingdandiv">
            <span class="dingdan">订单:</span>
            <span class="dingdanid">1611072014172170</span>
        </div>

        <div class="zhifufangshi">
            <div>
                支付方式
            </div>
            <div class="weixin">
                <span>微信支付</span>
                <a><img src="../../assets/img/WePayLogo.png" title="微信支付"></a>

                <img id="qr" src="/pay/create_verification"/>
                <a class="advise">
                    请在00:00时间内完成支付✅
                </a>

                <p>商品编号:{{$route.params.trade_number}}</p>
                <a>应付金额: ￥ 88.88</a>

                <button class="btn btn-warning">立即支付</button>
            </div>
        </div>
    </div>

    <!--<button class="btn btn-warning" :trades="trades">-->
        <!--(我的商品)-->
    <!--</button>-->
</template>

<style lang="less">
    .zhifuzhongxin {
        color: black;
        font-size: 30px;
        font-weight: 700;
        span {
            margin-top: 20px;
            display: block;
            margin-left: 150px;
        }
    }

    .zhifubox {
        border: 1px solid #ccc;
        width: 80%;
        height: 600px;
        margin: 20px auto;
        .dingdandiv {
            margin-top: 20px;
        }
        .dingdan {
            margin-left: 20px;
            font-weight: 700;
        }
        .dingdanid {
            color: #9AA0A5;
        }

        .zhifufangshi {
            margin-top: 20px;
            margin-left: 20px;
            font-weight: 700;
            .weixin {
                span {
                    color: green;
                    border: 1px solid red;
                }
            }
        }
    }
</style>

<script>
import {} from '../../vuex/actions'
</script>