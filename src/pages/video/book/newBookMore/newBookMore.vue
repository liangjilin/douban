<template>
    <div class="newBookMore">
      <v-header :bgFlag="bgValue" :colorFlag="colorValue" title="新书速递" class="borderBottom">
        <a @click="$router.go(-1)" slot="back">
          <i class="mintui mintui-back colorGreen"></i>
        </a>
        <a slot="search">
          <img class="share" src="../../../../assets/images/common/ic_action_share_green.png" alt="">
        </a>
      </v-header>
      <div class="content">
        <div class="title">
          <a :class="{active: toggleValue === 0}" @click="toggleValue=0">虚构</a>
          <a :class="{active: toggleValue === 1}" @click="toggleValue=1">非虚构</a>
        </div>
        <div class="contentList" v-show="toggleValue === 0">
          <v-fiction v-for="item in fictionData" :key="item.id" :book="item"></v-fiction>
        </div>
        <div class="contentList" v-show="toggleValue === 1">
          <v-fiction v-for="item in noFictionData" :key="item.id" :book="item"></v-fiction>
        </div>
      </div>
    </div>
</template>
<style lang="stylus" rel="stylesheet/stylus">
.newBookMore
  .content
    padding-top 50px
    background-color #fff
    .title
      width 100%
      height 50px
      box-sizing border-box
      padding 0 1.5rem
      background-color #fcfcfc
      overflow hidden
      a
        float left
        display inline-block
        width 2.25rem
        height 49px
        line-height 50px
        text-align center
        font-size 16px
        color #888
        border-bottom 1px solid #ddd
        &.active
          color #42bd56
          border-bottom 2px solid #42bd56
    .contentList
      padding .25rem
</style>
<script>
    import header from '../../../../components/header.vue'
    import fiction from '../../../../components/bookFiction.vue'
    export default{
      data () {
        return {
          bgValue: true,
          colorValue: true,
          toggleValue: 0,
          fictionData: [],
          noFictionData: []
        }
      },
      components: {
        'v-header': header,
        'v-fiction': fiction
      },
      mounted () {
        this.$nextTick(() => {
          this.getFictionData()
          console.log(this.fictionData)
        })
      },
      methods: {
        getFictionData () {
          this.fictionData = this.$route.params.fiction
          this.noFictionData = this.$route.params.noFiction
        }
      }
    }
</script>
