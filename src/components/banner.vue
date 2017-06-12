<template>
  <mt-swipe :auto="4000" class="banner">
    <mt-swipe-item>
      <a class="banner-item">
        <img src="../assets/images/banner/banner1.jpg" alt="">
      </a>
    </mt-swipe-item>
    <mt-swipe-item>
      <a class="banner-item">
        <img src="../assets/images/banner/banner2.jpg" alt="">
      </a>
    </mt-swipe-item>
    <mt-swipe-item>
      <a class="banner-item">
        <img src="../assets/images/banner/banner3.jpg" alt="">
      </a>
    </mt-swipe-item>
  </mt-swipe>
</template>
<style lang="stylus" rel="stylesheet/stylus">
  .mint-swipe&.banner
    height 3rem
    .mint-swipe-item
      .banner-item
        display block
        img
          width 100%
          height 3rem
    .mint-swipe-indicators
      padding 0 .1rem .03rem .1rem
      height .15rem
      line-height .15rem
      background rgba(0,0,0,0.4)
      border-radius .1rem
      bottom 6px
      .mint-swipe-indicator
        width .1rem
        height .1rem
        background-color #fff
        border-radius 50%
        margin-right .1rem
        opacity .6
        vertical-align middle
        &.is-active
          background-color #76D49B
          opacity 1
</style>
<script>
    export default{
      data () {
        return {}
      }
    }
</script>
