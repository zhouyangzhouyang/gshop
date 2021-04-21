<template>
<section class="search">
<!--  <header class="header">-->
<!--    <a class="header_title">-->
<!--      <span class="header_title_text">搜索</span>-->
<!--    </a>-->
<!--  </header>-->
  <HeaderTop title="搜索~"></HeaderTop>
  <form class="search_form" action="#">
    <input type="search" name="search" placeholder="请输入商家或美食名称" class="search_input">
    <input type="submit" name="submit" class="search_submit">
  </form>
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
.search{
  width: 100%;
}
.search_form{
  margin-top: 45px;
  background-color: #fff;
  padding: 12px 8px;
}
input{
  height: 35px;
  padding: 0 4px;
  border-radius: 2px;
  font-weight: bold;
  outline: none;
}
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
</style>
