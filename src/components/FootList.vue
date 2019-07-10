<template>
  <div>
    <div class="header">
      <div class="header-left">
        <div class="iconfont back-icon">&#xe624;</div>
      </div>
      <div class="header-input">
        <div class="iconfont input-icon">&#xe632;</div>
        <span class="span-icon">搜索医院，医生，科室...</span>
      </div>
      <div class="header-right">
        <span class="iconfont">&#xe62e;</span>
      </div>
      <div class="heaser-right-two">
        <span class="iconfont">&#xe627;</span>
      </div>
    </div>
    <div class="grid">
      <grid :show-vertical-dividers="false">
        <grid-item link="https://www.baidu.com" label="去挂号">
          <img slot="icon" src="../assets/img/其他科.png">
          <div class="grid-span">
            <span>
              全国
              <span class="span-2894">2894</span>家重点医院
            </span>
          </div>
        </grid-item>
        <grid-item link="https://www.baidu.com" label="找医生">
          <img slot="icon" src="../assets/img/医生.png">
          <div class="grid-span">
            <span>查疾病、看医生</span>
            <span>选医生</span>
          </div>
        </grid-item>
        <grid-item link="https://www.baidu.com" label="会员">
          <img slot="icon" src="../assets/img/皇冠.png">
          <div class="grid-span">
            <span>专家问诊5折</span>
            <span>享9大特权</span>
          </div>
        </grid-item>
      </grid>
    </div>
    <div class="body-top">
      <div class="body-top-one">
        <!-- <img src="../assets/img/2.jpg" alt> -->
      </div>
      <div class="body-gird">
        <grid :cols="2" show-vertical-dividers="false">
          <div>
            <grid-item>
              <div
                class="body-grid-span"
                style="text-align:center; color: black; width: auto;margin-top: 10px;height: 16px;background: orange;font-size: 10px;border-radius: 10px;overflow: hidden;"
              >
                <span>三甲专家/3分钟接诊/19元</span>
              </div>
              <img class="body-gird-img" slot="icon" src="../assets/img/闪电.png">
            </grid-item>
          </div>
          <grid-item>
            <div class="body-grid-span">
              <span>自选三甲专家1对1咨询</span>
            </div>
            <img class="body-gird-img" slot="icon" src="../assets/img/24小时.png">
          </grid-item>
          <grid-item link="./QuestionsList">
            <div class="body-grid-span">
              <span>多位专家，把关病情</span>
            </div>
            <img class="body-gird-img" slot="icon" src="../assets/img/问题.png">
          </grid-item>
          <grid-item>
            <div class="body-grid-span">
              <span>全方位健康产品一站购</span>
            </div>
            <img class="body-gird-img" slot="icon" src="../assets/img/瓶子.png">
          </grid-item>
        </grid>
      </div>
      <div class="body-group">
        <div class="group-top">
          <group label-align="right">
            <cell title="特色服务" value="全部科室" is-link="https://www.baidu.com"></cell>
          </group>
        </div>
        <div class="group-grid">
          <grid :cols="4" :show-vertical-dividers="false">
            <!-- <grid-item  label="三甲专家/3分钟接诊/19元">
                            <img slot="icon" src="../assets/logo.png" >
            </grid-item>-->
            <!-- <div></div> -->
            <div class="group-in">
              <grid-item label="三甲体检" link="https://www.baidu.com">
                <img src="../assets/img/检查.png" slot="icon">
                <!-- <span class="grid-span" :style="color='yellow'">2w+</span> -->
                <span class="grid-span" style="font-size: x-small">医生2w+</span>
              </grid-item>
            </div>
            <div class="group-in">
              <grid-item label="美学" link="https://www.baidu.com">
                <img src="../assets/img/整形科.png" slot="icon">
                <span class="grid-span" style="font-size: x-small;color: #aaa">医生2w+</span>
              </grid-item>
            </div>
            <div class="group-in">
              <grid-item label="不孕不育" link="https://www.baidu.com">
                <img src="../assets/img/生殖科.png" slot="icon">
                <span class="grid-span" style="font-size: x-small;color: #aaa">医生2w+</span>
              </grid-item>
            </div>
            <div class="group-in">
              <grid-item label="肺病" link="https://www.baidu.com">
                <img src="../assets/img/呼吸科.png" slot="icon">
                <span class="grid-span" style="font-size: x-small;color: #aaa">医生2w+</span>
              </grid-item>
            </div>
            <div class="group-in">
              <grid-item label="海外就医" link="https://www.baidu.com">
                <img src="../assets/img/地球.png" slot="icon">
                <span
                  class="grid-span"
                  style="font-size: x-small;color: #aaa;text-decoration:underline;"
                >机构30+</span>
              </grid-item>
            </div>
            <div class="group-in">
              <grid-item label="外科" link="https://www.baidu.com">
                <img src="../assets/img/外科.png" slot="icon">
                <span class="grid-span" style="font-size: x-small;color: #aaa">医生2w+</span>
              </grid-item>
            </div>
            <div class="group-in">
              <grid-item label="耳科" link="https://www.baidu.com">
                <img src="../assets/img/耳科.png" slot="icon">
                <span class="grid-span" style="font-size: x-small">医生2w+</span>
              </grid-item>
            </div>
            <div class="group-in">
              <grid-item label="神经内科">
                <img src="../assets/img/神经科.png" slot="icon">
                <span class="grid-span" style="font-size: x-small">医生2w+</span>
              </grid-item>
            </div>
          </grid>
        </div>
        <div class="grid-div">
          <grid>
            <grid-item>
              <div class="grid-in">
                <cell title="微医全科">
                  <img src="../assets/img/右箭头.png" width="20px" height="20px">
                </cell>
              </div>
            </grid-item>
          </grid>
        </div>
        <div>
          <cell title="就诊动态">
            <div style="border-radius: 12px; background: #04F; width: 80px; ">
              <span style="font-size:14px;line-height:24px">去看病</span>
              <img
                src="../assets/img/右箭头.png"
                width="20px"
                height="20px"
                style="margin-bottom:-5px"
              >
            </div>
          </cell>
          <div class="div-swiper" style="width : 100%;height : 100px">
            <swiper
              auto="true"
              height="60px"
              direction="vertical"
              :interval="2000"
              class="text-scroll"
              :show-dots="false"
            >
              <swiper-item>
                <p>义务爱了 完成传奇世界H5-王者归来任务 获得20金币</p>
              </swiper-item>
              <swiper-item>
                <p>基本世神 兑换《传奇世界H5》畅玩级礼包 消耗30金币</p>
              </swiper-item>
              <swiper-item>
                <p>零哥章魚 完成传奇世界H5-王者归来任务 获得30金币</p>
              </swiper-item>
              <swiper-item>
                <p>做迎而為 兑换【饿了么】畅享美食红包 消耗20金币</p>
              </swiper-item>
              <swiper-item>
                <p>只知道不知道 兑换【饿了么】畅享美食红包 消耗20金币</p>
              </swiper-item>
              <swiper-item>
                <p>基本世神 兑换《传奇世界H5》畅玩级礼包 消耗30金币</p>
              </swiper-item>
            </swiper>
          </div>
        </div>
      </div>
      <div class="body-news"></div>
    </div>
    <br>
    <div class="body-yao">
      <cell title="医药严选" value="更多" class="cell1" is-link="www.baidu.com"></cell>
      <grid :cols="3">
        <div style="display: inline">
          <grid-item link="www.baidu.com">
            <img src="../assets/img/药品.png" alt width="100px" height="100px">
            <div style=" text-align: left;">
              <span>天然萃取 护肝片</span>
              <br>
              <span class="span-yao">￥120</span>
            </div>
          </grid-item>
        </div>
        <div style="display: inline">
          <grid-item link="www.baidu.com">
            <img src="../assets/img/药品.png" alt width="100px" height="100px">
            <div style=" text-align: left;">
              <span>天然萃取 护肝片</span>
              <br>
              <span class="span-yao">￥120</span>
            </div>
          </grid-item>
        </div>
        <div style="display: inline">
          <grid-item link="www.baidu.com">
            <img src="../assets/img/药品.png" alt width="100px" height="100px">
            <div style=" text-align: left;">
              <span>天然萃取 护肝片</span>
              <br>
              <span class="span-yao">￥120</span>
            </div>
          </grid-item>
        </div>
      </grid>
    </div>
  </div>
</template>

<script>
import { Grid, GridItem, Group, Cell, Swiper, SwiperItem } from "vux";
import QuestionsLits from "./QuestionsList";

export default {
  name: "FootList",
  components: {
    Grid,
    GridItem,
    Group,
    Cell,
    Swiper,
    SwiperItem,
    QuestionsLits
  },
  data() {
    return {};
  }
};
</script>
<style lang="stylus" scoped>
.header {
  display: flex;
  background: #fff;
  line-height: 37px;
  width: -webkit-fill-available;
  color: #fff;
  position: fixed;
  top: 0;
  opacity: 1;
  z-index: 999;
  height: 37px;

  .header-left {
    width: 50px;
    float: left;

    .back-icon {
      text-align: center;
      float: left;
      margin-left: 14px;
    }
  }

  .header-input {
    flex: 1;
    background: #ccc;
    color: blue;
    border-radius: 30px;
    height: 30px;
    margin-top: 3.4px;

    .input-icon {
      float: left;
      margin-left: 10px;
      text-align: center;
      margin-top: -3px;
    }

    .span-icon {
      float: left;
      margin-top: -3px;
    }
  }

  .header-right {
    width: 70px;
    float: right;
  }

  .heaser-right-two {
    width: 38px;
    float: right;
    text-align: center;
  }
}

.grid {
  font-size: 10px;
  margin-top: 36px;

  .weui-grids >>> .weui-grid {
    text-decoration: none;
  }

  .weui-grid:after {
    position: relative;
  }

  .grid-span {
    color: #666;
    width: 80px;
    margin-left: 13px;
  }

  .span-2894 {
    color: blue;
  }
}

.body-top {
  width: auto;
  height: auto;
  background: #fff;
  border-radius: 10px;
  margin: 0 10px;
  box-shadow: 0 12px 13px #ccc;

  .weui-grids >>> .weui-grid {
    text-decoration: none;
    font-family: cursive;
    font-weight: 600;
  }

  .weui-grid:after {
    position: relative;
  }

  .body-group {
  }

  .group-top {
    padding: 0 14px;
  }

  .group-top >>> .weui-cells {
    padding: 0 9px;
    border-top: 1px solid #ccc;
  }

  .body-group >>> .weui-cells:before {
    display: none;
  }

  .body-group >>> .weui-cells:after {
    display: none;
  }

  .group-grid {
    background: #fff;
  }

  .weui-grids:before {
    display: none;
  }

  .grid-div {
    border-radius: 13px;
    background: #f3f3f3;
    height: 88px;
    margin-top: 4px;
  }

  .group-in >>> .weui-grid {
    background: #f3f3f3;
    margin: 4px;
    width: 22.75% !important;
    box-sizing: border-box;
    border-radius: 4px;
  }

  .weui-grids >>> .weui-grid:before {
    display: none;
  }

  .body-grid-span {
    color: black;
    margin-top: 11px;
    height: 20px;
    overflow: hidden;
    font-size: 10px;
  }

  .body-group /deep/ .vux-label {
    width: auto;
    height: 20px;
    font-size: 23px;
    font-weight: 600;
    font-family: cursive;
    margin-left: -134px;
  }

  .weui-cells:before {
    position: relative;
  }

  .body-top-one {
    width: auto;
    height: 50px;
    background-color: blue;
    border-radius: 10px;
    overflow: hidden;
  }
}

.body-news {
  border-radius: 10px;
  background: #ccc;
}

.body-yao {
  width: auto;
  height: auto;
  background: #fff;
  margin: 0 10px;
  border-radius: 10px;

  .cell1 {
    background: #fff;
    border-radius: 10px;
  }

  .cell1 >>> .vux-label {
    font-size: 30px;
    margin-left: -160px;
  }
}

.body-yao >>> .weui-grid {
  text-decoration: none;

  .img {
    background: #ccc;

    .img-yao {
      display: inline;
    }
  }

  .span-yao {
    position: relative;
    left: -8px;
    top: 12px;
    font-size: 20px;
    color: red;
  }
}
</style>


