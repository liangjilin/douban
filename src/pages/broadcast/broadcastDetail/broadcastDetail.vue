<template>
    <div class="broadcastDetail">
      <v-header :bgFlag="bgValue" :colorFlag="colorValue" title="广播详情" class="borderBottom">
        <a @click="$router.go(-1)" slot="back">
          <i class="mintui mintui-back colorGreen"></i>
        </a>
        <a slot="share">
          <img class="share" src="../../../assets/images/common/ic_action_share_green.png" alt="">
        </a>
      </v-header>
      <div class="content">
        <div class="detail">
          <div class="detail-head">
            <img class="user_img" src="../../../assets/images/main/detail1.jpg" alt="">
            <h3 class="user_name">宋小君</h3>
            <span class="publish_time">06-08 21:05</span>
          </div>
          <div class="detail-content">
            <p>我是发表的内容，很多很多的内容,我是发表的内容，很多很多的内容，我是发表的内容，很多很多的内容</p>
            <img src="../../../assets/images/main/time1.jpg" alt="">
          </div>
          <div class="detail-price">
            <a class="price-lf"><img src="../../../assets/images/common/ic_vote.png" alt="">赞</a>
            <a class="price-people">
              <ul>
                <li v-for="n in 5">
                  <img src="../../../assets/images/main/detail1.jpg" alt="">
                </li>
              </ul>
              <span>71</span>
              <i class="fa fa-angle-right colorAaa"></i>
            </a>
          </div>
        </div>
        <div class="comment">
          <div class="comment-title">
            <span :class="{'active': replyValue === 1}" @click="replyValue = 1">回应 <i>6</i></span>
            <span :class="{'active': replyValue === 2}" @click="replyValue = 2">转播 <i>12</i></span>
          </div>
          <div class="comment-content">
            <a class="reply" v-for="n in 5" v-show="replyValue === 1">
              <img class="user_img" src="../../../assets/images/main/detail1.jpg" alt="">
              <div class="reply-right">
                <div class="reply-title">
                  <h3>用户名 <span>6月10日</span></h3>
                  <a><img src="../../../assets/images/common/ic_more_action_overflow.png" alt=""></a>
                </div>
                <p class="reply-content">我是评论的内容,我是评论的内容,我是评论的内容</p>
              </div>
            </a>
            <a class="reply" v-for="n in 5" v-show="replyValue === 2">
              <img class="user_img" src="../../../assets/images/main/detail1.jpg" alt="">
              <div class="reply-right">
                <div class="reply-title">
                  <h3>用户名2222 <span>6个小时之前</span></h3>
                  <a><img src="../../../assets/images/common/ic_more_action_overflow.png" alt=""></a>
                </div>
                <p class="reply-content">我是评论22222的内容,我是评论2的内容,我是评论的内容</p>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
</template>
<style lang="stylus" rel="stylesheet/stylus">
.broadcastDetail
  .content
    padding-top 50px
    .detail
      padding .3rem .25rem
      background-color #fff
      .detail-head
        height 1rem
        display flex
        align-items center
        position relative
        .user_img
          width .8rem
          height .8rem
          border-radius 50%
          margin-right .25rem
        .user_name
          font-size 15px
          font-weight bold
          color #111
        .publish_time
          display block
          position absolute
          right 0
          font-size 12px
          color #aaa
      .detail-content
        margin-bottom .3rem
        p
          font-size 14px
          line-height 1.5
          margin .1rem 0
          text-align justify
        img
          width 4.5rem
          height 2rem
      .detail-price
        display flex
        height .5rem
        align-items center
        position relative
        .price-lf
          display flex
          width 1rem
          align-items center
          font-size 12px
          color #aaa
          border 1px solid #eee
          border-radius 3px
          padding 0 .1rem
          box-sizing border-box
          img
            display inline-block
            width .4rem
        .price-people
          height .5rem
          display flex
          align-items center
          position absolute
          right 0
          ul
            display inline-block
            li
              display inline-block
              margin-right .1rem
              img
                width .4rem
                height .4rem
                border-radius 50%
          span
            margin-left .1rem
            margin-right .2rem
    .comment
      background-color #ffffff
      margin-top .3rem
      .comment-title
        padding 0 .25rem
        border-bottom 1px solid #ddd
        span
          display inline-block
          height .8rem
          margin-right .2rem
          line-height .8rem
          color #aaa
          &.active
            color #111
            border-bottom 1px solid #333
          i
            font-size 13px
      .comment-content
        .reply
          padding-left 1.1rem
          position relative
          display block
          .user_img
            display block
            position absolute
            width .6rem
            height .6rem
            border-radius 50%
            top .4rem
            left .25rem
          .reply-right
            padding .4rem .25rem .4rem 0
            border-bottom 1px solid #eee
            .reply-title
              overflow hidden
              h3
                display inline-block
                color #111
                font-weight 500
                span
                  color #aaa
                  font-size 12px
              a
                float right
                img
                  width .3rem
                  vertical-align top
            .reply-content
              margin-top .2rem
              text-align justify
              line-height 1.5
</style>
<script>
    import header from '../../../components/header.vue'
    export default{
      data () {
        return {
          bgValue: true,
          colorValue: true,
          replyValue: 1
        }
      },
      components: {
        'v-header': header
      }
    }
</script>
