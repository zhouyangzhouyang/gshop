<template>
<section class="msite">
  <HeaderTop title="北京市海淀区白家疃东口38号院">
    <span class="header_search" slot="left">
          <i class="iconfont iconlong"></i>
        </span>
    <span class="header_login" slot="right">
            <span class="header_login_text">登录|注册</span>
          </span>
  </HeaderTop>
<!--  //首页导航-->
  <nav class="msite_nav">
    <div class="swiper-container">
      <div class="swiper-wrapper">
        <div class="swiper-slide">
          <a href="javascript:;" class="link_to_food">
            <div class="food_container">
              <img class="kl" src="./images/nav/kailibuluke__1.jpg">
            </div>
            <span>凯莉布鲁克1</span>
          </a>
          <a href="javascript:;" class="link_to_food">
            <div class="food_container">
              <img class="kl" src="./images/nav/kailibuluke__2.jpg">
            </div>
            <span>凯莉布鲁克2</span>
          </a>
          <a href="javascript:;" class="link_to_food">
            <div class="food_container">
              <img class="kl" src="./images/nav/kailibuluke__3.jpg">
            </div>
            <span>凯莉布鲁克3</span>
          </a>
          <a href="javascript:;" class="link_to_food">
            <div class="food_container">
              <img class="kl" src="./images/nav/kailibuluke__4.jpg">
            </div>
            <span>凯莉布鲁克4</span>
          </a>
          <a href="javascript:;" class="link_to_food">
            <div class="food_container">
              <img class="kl" src="./images/nav/kailibuluke__5.jpg">
            </div>
            <span>凯莉布鲁克5</span>
          </a>
        </div>
        <div class="swiper-slide">
          <a href="javascript:;" class="link_to_food">
            <div class="food_container">
              <img class="kl" src="./images/nav/jinkadaishan__1.jpg">
            </div>
            <span>金卡戴珊1</span>
          </a>
          <a href="javascript:;" class="link_to_food">
            <div class="food_container">
              <img class="kl" src="./images/nav/jinkadaishan__2.jpg">
            </div>
            <span>金卡戴珊2</span>
          </a>
          <a href="javascript:;" class="link_to_food">
            <div class="food_container">
              <img class="kl" src="./images/nav/jinkadaishan__3.jpg">
            </div>
            <span>金卡戴珊3</span>
          </a>
          <a href="javascript:;" class="link_to_food">
            <div class="food_container">
              <img class="kl" src="./images/nav/jinkadaishan__4.jpg">
            </div>
            <span>金卡戴珊4</span>
          </a>
          <a href="javascript:;" class="link_to_food">
            <div class="food_container">
              <img class="kl" src="./images/nav/jinkadaishan__5.jpg">
            </div>
            <span>金卡戴珊5</span>
          </a>
        </div>
      </div>
      <div class="swiper-pagination"></div>
<!--      <div class="swiper-button-prev"></div>-->
<!--      <div class="swiper-button-next"></div>-->
<!--      <div class="swiper-scrollbar"></div>-->
    </div>
  </nav>
  <div class="msite_shop_list">
    <div class="shop_header">
      <i class="iconfont icon01"></i>
      <span class="shop_header_title">附近商家</span>
    </div>
    <ShopList></ShopList>
  </div>
</section>
</template>

<script>
import HeaderTop from '../../components/HeaderTop/HeaderTop'
import ShopList from '../../components/ShopList/ShopList'
import Swiper from 'swiper'
import 'swiper/swiper.min.css'
export default {
  mounted () {
    new Swiper('.swiper-container', {
      direction: 'horizontal',
      loop: true, // 可以循环轮播
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
        type: 'bullets'
      }
    })
  },
  components: {
    HeaderTop,
    ShopList
  }
}
</script>

<style scoped>
a{
  float: left;
  text-decoration: none;
  font-size: 10px;
}
.kl{
  width: 70px;
  height: 70px;
}
.msite{
  width: 100%;
}
</style>
