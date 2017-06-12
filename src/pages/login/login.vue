<template>
    <div class="login">
      <v-header :bgFlag="bgValue">
        <a @click="$router.go(-1)" slot="back">
          <i class="mintui mintui-back colorGreen"></i>
        </a>
      </v-header>
      <div class="welcome">欢迎来到豆瓣</div>
      <div class="form">
        <input id="userName" type="text" placeholder="手机号/邮箱">
        <input id="passWord" type="password" placeholder="密码">
      </div>
      <button class="login-btn">登录</button>
      <div class="forget-box">
        <router-link class="colorGreen" to="/register">注册豆瓣</router-link>
        <a>忘记密码</a>
      </div>
    </div>
</template>
<style lang="stylus" rel="stylesheet/stylus">
.login
  height 12.38rem
  background-color #fff
  padding-top .96rem
.welcome
  height 3rem
  line-height 3rem
  text-align center
  font-size 30px
  color #42bd56
  font-weight 500
.form
  padding 0 .4rem
  input
    width 100%
    display block
    padding .1rem .2rem
    border none
    outline none
    font-size 15px
    position relative
    box-sizing border-box
    border-bottom 1px solid #dcdcdc
    &#userName
      margin-bottom .6rem
    &:focus
      color #42bd56
.login-btn
  width 6.8rem
  height .8rem
  margin-left .35rem
  margin-top .4rem
  border none
  border-radius 3px
  outline none
  background-color #42bd56
  color #fff
  font-size 15px
.forget-box
  display flex
  margin 0 auto
  margin-top .4rem
  width 4rem
  font-size 14px
  color #aaa
  a
    display block
    width 2rem
    text-align center
    position relative
    &.colorGreen
      color #42bd56
      &:after
        content ''
        width 1px
        height 15px
        background-color #aaa
        position absolute
        right 0
        top 0

</style>
<script>
    import header from '../../components/header.vue'

    export default{
      data () {
        return {
          bgValue: true
        }
      },
      components: {
        'v-header': header
      }
    }
</script>
