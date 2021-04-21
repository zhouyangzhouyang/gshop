<template>
  <div class="shop_container">
    <ul class="shop_list">
      <li class="shop_li"></li>
      <a>
        <div class="shop_left">
          <img src="./images/shop/kailibuluke__6.jpg" class="shop_img kl">
        </div>
        <div class="shop_right">
          <section class="shop_detail_header">
            <h4 class="shop_title ellipsis">锄禾日当午汗滴禾下土</h4>
            <ul class="shop_detail_ul">
              <li class="supports">保</li>
              <li class="supports">准</li>
              <li class="supports">票</li>
            </ul>
          </section>
          <section class="shop_rating_order">
            <section class="shop_rating_order_left">
              <div class="star star-24">
                <span class="star-item on"></span>
                <span class="star-item on"></span>
              </div>
            </section>
          </section>
        </div>
      </a>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'ShopList'
}
</script>

<style scoped>
.kl{
  width: 50px;
  height: 50px;
}
.msite_shop_list{
  margin-top: 10px;
  background-color: #fff;
}
.shop_header{
  padding: 10px 10px 0;
}
.shop_icon{
}
</style>
