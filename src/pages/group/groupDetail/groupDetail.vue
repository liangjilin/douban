<template>
    <div class="groupDetail">
      <v-header title="小组详情" style="background-color: #57778a">
        <a @click="$router.go(-1)" slot="back">
          <i class="mintui mintui-back"></i>
        </a>
        <a slot="share">
          <img class="share" src="../../../assets/images/common/notification_more.png" alt="" style="width: .1rem">
        </a>
      </v-header>
      <div class="groupDetail-head">
        <div class="head-title">
          <img v-if="groupData.images" :src="groupData.images.small" alt="">
          <span>{{groupData.title}}</span>
        </div>
        <div class="head-bt">
          <a class="bt-left">小组简介<i class="fa fa-angle-right"></i></a>
          <a class="bt-mid">{{groupData.group_member}} 成员<i class="fa fa-angle-right"></i></a>
          <button class="bt-right">申请加入</button>
        </div>
      </div>
      <div class="groupDetail-admin">
        <div class="title">
          <h3>这个小组的成员也喜欢去：</h3>
          <a class="close" v-show="showFlag === 1" @click="showFlag = 2">收起 <img src="../../../assets/images/common/ic_tag_folder_up.png" alt=""></a>
          <a class="open" v-show="showFlag === 2" @click="showFlag = 1">展开 <img src="../../../assets/images/common/ic_tag_folder_down.png" alt=""></a>
        </div>
        <ul class="admin-scroller" v-show="showFlag === 1">
          <li v-for="n in 8">
            <a>
              <img src="../../../assets/images/main/detail1.jpg" alt="">
              <p>小组名小组名</p>
            </a>
          </li>
        </ul>
      </div>
      <div class="groupDetail-content">
        <div class="title" :class="{'fixedTitle': fixedValue}" ref="tabsTitle">
          <a :class="{'active': tebFlag === 1}" @click="tebFlag = 1">话题{{fixedValue}}</a>
          <a :class="{'active': tebFlag === 2}" @click="tebFlag = 2">群聊</a>
          <a><img src="../../../assets/images/group/ic_group_search_small.png" alt=""></a>
        </div>
        <ul v-show="tebFlag === 1">
          <li v-for="n in 8">
            <a class="item">
              <div class="item-lf">
                <img src="../../../assets/images/group/ic_group_comment_1_50.png" alt="">
                <span>10</span>
              </div>
              <div class="item-mid-top">
                <h3>荒家冢，惊悚片来了</h3>
                <img src="../../../assets/images/main/time1.jpg" alt="">
              </div>
              <div class="item-mid-bottom">
                <div class="author"></div>
                <span>用户名</span>
                <span class="time">6月14日</span>
              </div>
            </a>
          </li>
        </ul>
        <ul v-show="tebFlag === 2">
          <li v-for="n in 5">
            <a class="chats">
              <img src="../../../assets/images/main/time1.jpg" alt="">
              <div class="chats-title">
                <h3>群的名字，群的名字</h3>
                <span>18人</span>
              </div>
              <p class="intro">这里是群介绍，这里是群介绍，这里是群介绍，这里是群介绍，这里是群介绍，这里是群介绍，</p>
            </a>
          </li>
        </ul>
      </div>
    </div>
</template>
<style lang="stylus" rel="stylesheet/stylus">
.groupDetail-head
  padding-top 50px
  background-color #57778a
  color #fff
  .head-title
    margin-top .5rem
    display flex
    align-items center
    padding 0 .25rem
    img
      display inline-block
      width .6rem
      margin-right .25rem
    span
      font-size 16px
  .head-bt
    display flex
    align-items center
    justify-content space-around
    color #fff
    font-size 12px
    padding .2rem 0
    a
      .fa
        color #fff
        font-size 15px
        margin-left .2rem
    button
      outline none
      border 1px solid #fff
      border-radius 3px
      background transparent
      color #fff
      padding .1rem

.groupDetail-admin
  background #fff
  margin .15rem 0
  .title
    display flex
    align-items center
    padding .3rem .2rem
    position relative
    a
      display flex
      align-items center
      border 1px solid #dcdcdc
      border-radius 3px
      padding .1rem
      position absolute
      right .2rem
      img
        display inline-block
        margin-left .1rem
        width .25rem
  .admin-scroller
    white-space nowrap
    overflow-x auto
    -webkit-overflow-scrolling touch
    padding-bottom .3rem
    padding-right .2rem
    &::-webkit-scrollbar
      width 0
      height 0
    li
      display inline-block
      margin-left .3rem
      &:first-child
        margin-left .2rem
      a
        display block
        font-size 12px
        img
          display block
          width 1.2rem
          height 1.2rem
          border-radius 2px
          margin-bottom .1rem
        p
          width 1.2rem
          white-space normal
          text-align justify
          line-height 1.2
.groupDetail-content
  background-color #fff
  .title
    background-color #fff
    display flex
    border-bottom 1px solid #eee
    &.fixedTitle
      width 100%
      position fixed
      top 50px
      left 0
      z-index 1
    a
      display inline-block
      flex 1
      height .7rem
      line-height .7rem
      text-align center
      color #888
      &.active
        color #42bd56
        border-bottom 2px solid #42bd56
      &:last-child
        font-size 0
      img
        display inline-block
        width .4rem
        padding-top .15rem
  ul
    li
      .item
        display block
        padding .3rem .2rem
        border-bottom 1px solid #dcdcdc
        position relative
        font-size 0
        .item-lf
          display inline-block
          text-align center
          margin-right .22rem
          img
            display block
            width .4rem
          span
            font-size 12px
            color #aaa
        .item-mid-top
          width 6.48rem
          display inline-block
          vertical-align top
          overflow hidden
          h3
            display inline-block
            max-width 5rem
            font-size 14px
            color #111
            text-align justify
            white-space normal
            line-height 1.2
          img
            display block
            float right
            width .8rem
            height .8rem
        .item-mid-bottom
          padding-left .62rem
          overflow hidden
          margin-top .2rem
          .author
            display inline-block
            width .4rem
            height .4rem
            background: url('../../../assets/images/main/detail1.jpg') no-repeat
            background-size cover
            border-radius 50%
            vertical-align middle
            margin-right .1rem
          span
            vertical-align middle
            font-size 12px
            color #888
          .time
            margin-top .1rem
            float right
      .chats
        display block
        border-bottom 1px solid #dcdcdc
        padding .2rem 0 .2rem 1.2rem
        position relative
        img
          display block
          width .8rem
          height .8rem
          border-radius 3px
          position absolute
          top .2rem
          left .2rem
        .chats-title
          margin-bottom .1rem
          padding-top .06rem
          h3
            display inline-block
            color #111
            font-size 16px
            margin-right .1rem
          span
            font-size 12px
            color #aaa
        .intro
          padding-right .5rem
          color #888
          text-align justify
          white-space nowrap
          overflow hidden
          text-overflow ellipsis
          margin-bottom .2rem
</style>
<script>
    import header from '../../../components/header.vue'
    export default{
      data () {
        return {
          groupData: {},
          showFlag: 1,
          tebFlag: 1,
          fixedValue: false
        }
      },
      components: {
        'v-header': header
      },
      mounted () {
        this.$nextTick(() => {
          this.getGroupData()
          this.abc()
        })
      },
      computed: {
        fromTop: () => {
          return document.body.scrollTop
        }
      },
      methods: {
        getGroupData () {
          this.groupData = this.$route.params.data
          console.log(this.groupData)
        },
        abc () {
          let that = this
          window.onscroll = function () {
            let mTop = document.body.scrollTop
            console.log(document.body.scrollTop)
            if (mTop >= 293) {
              that.fixedValue = true
            } else if (mTop <= 293) {
              that.fixedValue = false
            }
          }
        }
      }
    }
</script>
