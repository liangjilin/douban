<template>
    <div class="register">
      <v-header :bgFlag="bgFlag" title="注册豆瓣" :colorFlag="colorFlag" class="borderBottom">
        <a @click="$router.go(-1)" slot="back">
          <i class="mintui mintui-back colorGreen"></i>
        </a>
      </v-header>
      <div class="welcome">欢迎加入豆瓣</div>
      <ul class="re-form">
        <li>
          <input type="text" placeholder="手机号 / 邮箱">
        </li>
        <li>
          <input type="password" placeholder="密码（最少6位）">
        </li>
        <li>
          <input type="text" placeholder="昵称">
        </li>
      </ul>
      <button class="login-btn">下一步</button>
      <div class="agreement">点击【下一步】代表你已阅读并同意<a>用户使用协议</a></div>
    </div>
</template>
<style lang="stylus" rel="stylesheet/stylus">
.register
  height 12.38rem
  background-color #fff
  padding-top .96rem
  .welcome
    height 2rem
    line-height 2rem
  .re-form
    width 6.8rem
    margin 0 auto
    border 1px solid #dcdcdc
    border-radius 5px
    li
      display block
      padding 2px 0
      &:last-child
        input
          border-bottom 0
      input
        width 100%
        display block
        box-sizing border-box
        outline none
        padding .2rem
        padding-right 1.5rem
        font-size 15px
        border none
        border-bottom 1px solid #dcdcdc
  .login-btn
    margin-top .2rem
  .agreement
    margin-top .3rem
    text-align center
    color #aaa
    a
      text-decoration underline
</style>
<script>
    import header from '../../components/header.vue'

    export default{
      data () {
        return {
          bgFlag: true,
          colorFlag: true
        }
      },
      components: {
        'v-header': header
      }
    }
</script>
