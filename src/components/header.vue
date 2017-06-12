<template>
  <div class="header" :class="{'bg-white': bgFlag}">
    <div class="header-box header-lf">
      <slot name="back"></slot>
    </div>
    <h3 class="header-title" :class="{'color33': colorFlag}">{{title}}</h3>
    <div class="header-box header-rt">
      <slot name="search"></slot>
      <slot name="share"></slot>
      <slot name="city"></slot>
    </div>
  </div>
</template>
<style lang="stylus" rel="stylesheet/stylus">
.header
  display flex
  width 100%
  height 50px
  align-items center
  position fixed
  top 0
  left 0
  background-color #76D49B
  z-index 1
  &.bg-white
    background-color #fff
  .header-title
    flex 2
    font-size 18px
    font-weight 500
    text-align center
    color #fff
  .header-box
    flex 1
    color #fff
    font-size 16px
    a
      display block
      padding .1rem .3rem
      .share
        width .4rem
    &.header-lf
      text-align left
    &.header-rt
      text-align right
    .city
      span
        font-size 14px
        color #333
      img
        width .4rem
        display inline-block
        vertical-align middle
</style>
<script>

  export default{
    props: {
      title: String,
      colorFlag: Boolean,
      bgFlag: Boolean
    },
    data () {
      return {
      }
    }
  }
</script>
