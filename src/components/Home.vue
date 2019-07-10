<template>
  <div class="about">
    <div>
      <swiper :list="img" auto="true" loop="true" style="width:100%; margin:0 auto; " height="200px" dots-class="custom-bottom" dots-position="center">
        <swiper-item :list = "imglist"></swiper-item></swiper>
    </div> 
    <div class="tab-list">
      <div v-if="index === 0"><news-list/></div>
      <div v-if="index === 1"><foot-list></foot-list></div>
      <div v-if="index === 2"><movie-list></movie-list></div>
      <div v-if="index === 3"><hotel-list></hotel-list></div>
      <div v-if="index === 4"><my-list></my-list></div>
      <tab :line-width="2" active-color="blue" v-model="index" bar-position="bottom">
        <tab-item :selected="tag === item" v-for="item in taglist" @click="tag = item" :key="item">{{item}}</tab-item>
      </tab>
    </div>
    
   <divider>{{foot}}</divider> 
  </div>
</template>

<script>

  const list = () => ['精选', '微医', '云药房', '健康号']

  const imglist = [
    {
      url:'vux',
      img:'http://img2.imgtn.bdimg.com/it/u=1888333013,2441326225&fm=26&gp=0.jpg',
      title:'图片1'
    },
    {
      url: 'vux',
      img: 'http://img2.imgtn.bdimg.com/it/u=234634259,4236876085&fm=26&gp=0.jpg',
      title: '图片2'
    },
    {
      url: 'vux',
      img: 'http://img2.imgtn.bdimg.com/it/u=1451330793,2242997567&fm=26&gp=0.jpg',
      title: '图片3',
      fallbackImg: 'https://static.vux.li/demo/3.jpg'
    }
    ]
    import {TabItem,Tab,Group,Cell,Grid,GridItem,Divider,Flexbox,FlexboxItem,XHeader,Swiper} from 'vux'
    import NewsList  from './NewsList'
    import FootList from './FootList'
    import HotelList from './HotelList'
    import MovieList from './MovieList'
    import MyList from './MyList'
  export default {
    components: {
      TabItem,
      Tab,
      Group,
      Cell,
      Grid,
      GridItem,
      Divider,
      Flexbox,
      FlexboxItem,
      XHeader,
      Swiper,
      NewsList,  
      MovieList,
      HotelList,
      FootList,
    },
    data() {
    return {
      mag: '链接',
      tag: '精选',
      foot: '别翻了，下面没啥了',
      img: imglist,
      taglist: list(),
      index: 0,
      mydata: [],
      ta: '',
      getBarwidth: function(index){
        return(index+1)*22+'px'
      }
    }
  },
  methods:{
    find:function(){
      this.$http.jsonp('https://sp0.baidu.com/5a1Fazu8AA54nxGko9WTAnF6hhy/su',{
                            wd:this.ta
                        },{
                            jsonp:'cb'
                        }).then(function(res){
                            this.mydata=res.data.s;
                            },function(){
                  });
          },
    xheader:function () {
      console.log('@on-click-more');
      
    },
    onItemClick(){
      console.log('on-item-click');
    }
  }
  }
 
</script>
 
<style>
body{
  margin: 0;
  outline-style: double;
  outline-color:cyan; 
}
.box {
  padding: 15px;
}
.img-list{
  width: 600px;
  height: 200px;
}
.about{
  background: #fff;
  text-align: center;
 }
 .flex-box{
   text-align: center;
 }
 .tab-swiper {
  background-color: #fff;
  height: 100px;
}
.tab-list{

}
</style>