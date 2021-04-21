<template>
<section>
  <HeaderTop title="我的"></HeaderTop>
  <section class="profile-number">
    <router-link to="/login" class="profile-link">
      <div class="profile_image">
        <i class="iconfont iconlong"></i>
      </div>
      <div class="user-info">
        <p class="user-info-top">登录/注册</p>
        <p>
          <span class="user-icon">
            <i class="iconfont iconniu iconma"></i>
          </span>
          <span class="icon-mobile-number">暂无绑定手机号</span>
        </p>
      </div>
      <span class="arrow">
        <i class="iconfont icongou"></i>
      </span>
    </router-link>
  </section>
  <section class="profile_info_data">
    <ul class="info_data_list">
      <a href="javascript:;" class="info_data_link">
        <span class="info_data_top"><span>0.00</span>元</span>
        <span class="info_data_bottom">我的余额</span>
      </a>
      <a href="javascript:;" class="info_data_link">
        <span class="info_data_top"><span>0</span>个</span>
        <span class="info_data_bottom">我的优惠</span>
      </a>
      <a href="javascript:;" class="info_data_link">
        <span class="info_data_top"><span>0</span>分</span>
        <span class="info_data_bottom">我的积分</span>
      </a>
    </ul>
  </section>
</section>
</template>

<script>
import HeaderTop from '../../components/HeaderTop/HeaderTop'
export default {
  components: {
    HeaderTop
  }
}
</script>

<style scoped>
.header{
  background-color: #02a774;
  position: fixed;
  z-index: 100;
  left: 0;
  top: 0;
  width: 100%;
  height: 45px;
}
.header_search{
  position: absolute;
  left: 15px;
  top: 50%;
  transform: translateY(-50%);
  width: 10%;
  height: 50%;
}
.icon-sousuo{
  font-size: 25px;
}

.header_title{
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%,-50%);
  width: 50%;
  color: #fff;
}
.header_login{
  font-size: 14px;
  color: #fff;
  position: absolute;
  right: 15px;
  top: 50%;
  transform: translateY(-50%);
}
.header_login_text{
  color: #fff;
}
.profile{
  width: 100%;
}
.profile-number{
  margin-top: 45.5px;
}
.profile-link{
  position: relative;
  display: block;
  background-color: #02a774;
  padding: 20px 10px;
}
.profile_image{
  float: left;
}
.profile_info_data{
  width: 100%;
  background-color: #fff;
  overflow: hidden;
}
.info_data_link{
}
</style>
