<template>
<section class="loginContainer">
  <div class="loginInner">
    <div class="login_header">
      <h2 class="login_logo">硅谷外卖</h2>
      <div class="login_header_title">
        <a href="javascript:;" class="on">短信登录</a>
        <a href="javascript:;">密码登录</a>
      </div>
    </div>
    <div class="login_content">
      <form action="">
        <div class="on">
          <section class="login_message">
            <input type="tel" maxlength="11" placeholder="手机号">
              <button disabled="disabled" class="get_verification">获取验证码</button>
          </section>
          <section class="login_verification">
            <input type="tel" maxlength="8" placeholder="验证码">
          </section>
          <section class="login_hint">
            温馨提示：未注册硅谷外卖账号的手机号，登录时将自动注册，且代表已同意协议
            <a href="javascript:;">《用户服务协议》</a>
          </section>
        </div>
        <div>
          <section>
            <section class="login_message">
              <input type="tel" maxlength="11" placeholder="手机/邮箱/用户">
            </section>
            <section class="login_verification">
              <input type="tel" maxlength="8" placeholder="密码">
              <div class="switch_button off">
                <div class="switch_circle"></div>
                <span class="switch_text">...</span>
              </div>
            </section>
            <section class="login_message">
              <input type="text" maxlength="11" placeholder="验证码">
              <img src="./images/yanzhengma.jpg" class="get_verification">
            </section>
          </section>
        </div>
        <button class="login_submit">登录</button>
      </form>
      <a href="javascript:;" class="about_us">关于我们</a>
    </div>
    <a href="javascript:;" class="go_back" @click="$router.back()">
      <i class="iconfont iconniu">返回</i>
    </a>
  </div>
</section>
</template>

<script>
export default {
  name: 'Login'
}
</script>

<style scoped>
.loginContainer{
  width: 100%;
  height: 100%;
  background-color: #fff;
}
.loginInner{
  padding-top: 60px;
  width: 80%;
  margin: 0 auto;
}
.login_logo{
  font-size: 40px;
  font-weight: bold;
  color: #02a774;
  text-align: center;
}
.login_header_title{
  padding-top: 40px;
  text-align: center;
}
a{
  color: #333;
  font-size: 14px;
  padding-bottom: 4px;
}
.on{
  color: #02a774;
  font-weight: 700;
  border-bottom: 2px solid #02a774;
}

</style>
