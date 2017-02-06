<template>
  <section id="carousel" class="detail-carousel">
    <!-- <h1>{{name}}</h1> -->
    <!-- <button v-on:click="greet" style="height:200px;width:300px;">BUTTON</button> -->
    <div class="swiper-container">
      <div class="swiper-wrapper">
        <div v-for="item in picList" class="swiper-slide">
          <img class="swiper-lazy" v-bind:data-src="item.bigPic">
        </div>
      </div>
      <div class="page swiper-pagination"></div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'carousel',
  data () {
    return {
      /*"picList": [
            {
                "bigPic": "http://oss.njcjh.cn/20160920/7bba3b2b6d3645fb98909002024f9fe3.jpg",
                "tip": null
            },
            {
                "bigPic": "http://oss.njcjh.cn/20160920/62cd008d6ec74ca29609ecb24c8bc080.jpg",
                "tip": null
            },
            {
                "bigPic": "http://oss.njcjh.cn/20160920/ce60d43b750c47839764a54e16b9574b.jpg",
                "tip": null
            }
        ]*/
    }
  },
  props:['picList','name'],
  methods: {
    greet (){
      console.log('hello world');
    }
  },
  mounted:function(){
    //详情页，顶部轮播图片
    var carousel = new Swiper('#carousel .swiper-container',{
      autoplayDisableOnInteraction:false,
      lazyLoading : true,
      lazyLoadingInPrevNext : true,
      pagination : '.swiper-pagination',
      preventLinksPropagation : true
    });
  }
}
</script>

<style lang="scss">
h2{
  background:transparent url('../image/jingbao.png') repeat scroll 0 0;
  background-size:20% auto;
  color:red;
}
#carousel {
  position:relative;

  @at-root .page {
    position:absolute;
    width:100%;
    bottom: 10px;
      left: 0;
      width: 100%;
  }

  .swiper-slide{
    height:7.5rem;
  }
  img {
    display: block;
    width:100%;
    height: 7.5rem;
    margin: 0 auto;
    //position:absolute;
    //top: 0;
    transform:translate3d(0,0,0);
      -webkit-transform: translate3d(0,0,0);
  }
  .flag{
    display:block;
    position:absolute;
  }
  .sellout{
    bottom: .3rem;
    right: .3rem;
    z-index: 2;
    border-radius: 1rem;
    color: #fff;
    text-align: center;
    width: 1.8rem;
    height: 1.8rem;
  }
  .jingbao{
    top: .15rem;
    left: .3rem;
    z-index: 2;
    width: 1.2rem;
    height: 1.2rem;
  }
  .ladder{
    top: 5px;
    left: 12px;
    z-index: 2;
    width: 2.3rem;
    height: 2.3rem;
  }
}
</style>
