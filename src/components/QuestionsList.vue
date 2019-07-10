<template>
    <div class="question">
        <div class="header">
            <div class="header-left">
                <a href="/"><img  src="../assets/img/返 回.png"  width="30px" height="23px"></a>
            </div>
            <div class="header-center"><span>一病多问</span></div>
            <div class="header-right"><span>我的提问</span></div>
        </div>
        <div class="center">
            <img src="../assets/img/3.jpg" alt="" width="100%">
            <!-- <img src="../assets/img/4.jpg" alt="" width="50%"> -->
        </div>
        <div class="div1">
            <group>
                <cell title="向主治医生提问" inline-desc="5-10 名医生回复， ￥68" is-link="www.baidu.com">
                    <p>￥68</p>
                </cell>
            </group>
            <group>
                <cell title="向主任专家提问" inline-desc="5-10 名医生回复， ￥128" is-link="www.baidu.com">
                    <p>￥128</p>
                </cell>
            </group>
        </div>
        <div class="div2">
            <p><strong class="stro">患者提问</strong>已有183773位患者获得帮助</p>
        </div>
        <div class="div3">
            <group>
                <cell is-link="www.baidu.com"  title="￥68">
                    <p><span style="margin-right: 6px; color: blue;">7</span>名医生回答</p>
                </cell>
                <p style="margin-top: -23px">年龄30，之前没有生过小孩和怀孕过，9月份做
                    了药流，11月份检查子宫内膜厚15mm，且回声
                    不均匀。12月份月经前吃了黄体酮，月经干净...</p>
            </group>
            
        </div>
        
    </div>
</template>

<script>
import {Group,Cell} from 'vux'
export default {
    name: ' QuestionsList',
    components: {
        Group,
        Cell
    },
    data() {
        return {
            
        }
    },
    }
</script>

<style>
.header{
  display: flex;
  background: #fff;
  line-height: 29px;
  width: 100%;
  position: fixed;
  top: 0;
}
.header-left{
    float: left;
    text-align: center;
    /* background-color: aqua; */
    margin-top: 6px;
}
.header-center{
    flex: 1;
    font-size: 21px;
    text-align: center;
    font-family: cursive;
    font-weight: 900;
}
.header-right{
    float: right;
    font-size: 12px;
    /* background-color: antiquewhite; */
}
.center{
    
}
.div1{
    margin: 7px;
}
.div1 /deep/ .weui-cells{
    border-radius: 7px;
    margin-top: 7px;
    box-shadow: 0px 5px 6px #ccc;
}
.div1 .weui-cells /deep/ .weui-cell{
    color: #fff;
    margin-top: -13px;
    background: linear-gradient(to right, rgb(74, 86, 243) , rgb(204, 138, 224)); 
}
.div1 .vux-cell-bd /deep/ .vux-label-desc{
    color: #fff;
}
.div1 .weui-cell /deep/.weui-cell__ft{
    color: #fff;
}
.div2{
    margin: 7px;
}
.stro{
    font-size: 23px;
    font-family: cursive;
}
.div3{
    margin: 7px;
}
.div3 .weui-cell /deep/ .weui-cell__ft{
    font-size: 10px;
}
.div3 .vux-cell-bd /deep/ .vux-label{
    color: red;
    margin-left: -16px;
}
.weui-cells:after{
    display: none;
}
</style>

