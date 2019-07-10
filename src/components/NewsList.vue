<template>
  <div class="newslist">
    <h1 class="h1">精选</h1>
    <div class="grid1">
      <grid :cols="3" :show-vertical-dividers="false">
        <grid-item link="https://www.baidu.com" label="精选" v-for="i in 9" :key="i" color:yellow>
          <img slot="icon" src="../assets/logo.png">
        </grid-item>
      </grid>
    </div>
    <br>
    <!-- <div>
      <group title="新闻" title-color="orange" label-width="6em" label-align="left">
        <cell title="实时">
          <marquee>
            <marquee-item v-for="value in 5" :key="value" class="align-middle">
              <a href="https://www.baidu.com">{{value}}.新闻</a></marquee-item>
          </marquee>
        </cell>
      </group>
    </div> -->
    <div class="news">
      <div>
        <h3 class="h3-style"><img src="../assets/logo.png" width="20px" height="20px">新闻</h3>
      </div>
      <group>
        <div class="cell-style">
        <cell
          title="习近平同多米尼加总统梅迪纳庆祝中多建交一周年"
          value="5.2"
          link="http://politics.people.com.cn/n1/2019/0502/c1024-31061374.html"
          is-link="true"
        ></cell>
        <div>
        <a href="http://www.people.com.cn/">更多新闻</a>
        </div>
        </div>
      </group>
    </div>
  </div>
</template>

<script>
import {
  CellBox,
  Grid,
  GridItem,
  Marquee,
  MarqueeItem,
  Group,
  Cell,
  Swiper
} from "vux";

export default {
  components: {
    Grid,
    GridItem,
    Marquee,
    MarqueeItem,
    Group,
    Cell,
    CellBox,
    Swiper
  },
  data: {
    return: {
      msg: "精选",
      news: "新闻",
      more: "更多新闻",
      url1: "http://politics.people.com.cn/n1/2019/0502/c1001-31061397.html",
      msg: "实时"
    }
  }
};
</script>

<style>
/* .grid1{
  background-image: url('http://img3.imgtn.bdimg.com/it/u=1060387669,1498970204&fm=26&gp=0.jpg');
  /* background-color: rgba(230, 10, 10, 0.5) 
} */
.h3-style{
  text-align: left;
}
.newslist{
  /* background: #666; */
}
.grid1::before {
  content: "";
  display: block;
  width: 100%;
  height: 318px;
  position: absolute;
  background-image: url("http://img3.imgtn.bdimg.com/it/u=1060387669,1498970204&fm=26&gp=0.jpg");
  opacity: .4;
}
.h1 {
  background-image: url("https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=1387662645,1624907717&fm=26&gp=0.jpg");
}
.news {
  background: #ccc;
  /* background-color: turquoise; */
}
.news /deep/ .vux-label{
  border-bottom:1px solid #ccc;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 1;
  overflow: hidden;
}
.news /deep/ .weui-cells{
  background: #ccc;
}
.cell-style{
  margin: 4px 4px 4px 4px;
  /* margin-left: 2px; */
  border: 2px solid #ccc;
  border-radius: 10px;
  background-color: #fff;
}
#cell1 {
  position: relative;
  /* white-space: pre-wrap; */
  max-width: 300px;
  overflow: hidden;
  /* white-space: nowrap;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 1;
  overflow: hidden; */
}
</style>
