<template>
    <div class="main-content">
      <div class="gb-head">
        <img src="../../assets/images/broadcast/ic_status_anonymous_header.png" alt="">
        <h3>发现有趣的人</h3>
        <p>关注他们，发现更大的世界</p>
      </div>
      <div class="gb-content">
        <ul>
          <li>
            <router-link class="gb-item" :to="{name: 'broadcastDetail'}">
              <img class="gb-item-headPic" src="../../assets/images/main/detail1.jpg" alt="">
              <img class="gb-item-close" src="../../assets/images/broadcast/ic_close_status_recommend.png"/>
              <div class="gb-item-content">
                <button class="content-attention">关注</button>
                <h3 class="userName">西木</h3>
                <span class="attention-people">49人关注</span>
                <p class="publish-mood">我是发表的内容，很多很多的内容</p>
                <div class="publish-imgs">
                  <div class="publish-img publish-img-lf"></div>
                  <div class="publish-img-rt">
                    <div class="publish-img"></div>
                    <div class="publish-img"></div>
                    <span class="publish-more">+6张</span>
                  </div>
                </div>
              </div>
              <div class="clickZan">
                <span class="clickZan-lf"><i class="fa fa-thumbs-o-up"></i>33</span>
                <span class="clickZan-comment"><i class="fa fa-comment"></i>55</span>
              </div>
            </router-link>
          </li>
          <li>
            <router-link class="gb-item" :to="{name: 'broadcastDetail'}">
              <img class="gb-item-headPic" src="../../assets/images/main/detail1.jpg" alt="">
              <img class="gb-item-close" src="../../assets/images/broadcast/ic_close_status_recommend.png"/>
              <div class="gb-item-content">
                <button class="content-attention">关注</button>
                <h3 class="userName">西木</h3>
                <span class="attention-people">49人关注</span>
                <p class="publish-mood">我是发表的内容，很多很多的内容</p>
                <div class="publish-imgs">
                  <div class="publish-img publish-img-lf"></div>
                  <div class="publish-img-rt" style="flex: 2.5">
                    <div class="publish-img"></div>
                  </div>
                </div>
              </div>
              <div class="clickZan">
                <span class="clickZan-lf"><i class="fa fa-thumbs-o-up"></i>33</span>
                <span class="clickZan-comment"><i class="fa fa-comment"></i>55</span>
              </div>
            </router-link>
          </li>
          <li>
            <router-link class="gb-item" :to="{name: 'broadcastDetail'}">
              <img class="gb-item-headPic" src="../../assets/images/main/detail1.jpg" alt="">
              <img class="gb-item-close" src="../../assets/images/broadcast/ic_close_status_recommend.png"/>
              <div class="gb-item-content">
                <button class="content-attention">关注</button>
                <h3 class="userName">西木</h3>
                <span class="attention-people">49人关注</span>
                <p class="publish-mood">我是发表的内容，很多很多的内容,我是发表的内容，很多很多的内容,我是发表的内容，很多很多的内容,我是发表的内容，很多很多的内容</p>
              </div>
              <div class="clickZan">
                <span class="clickZan-lf"><i class="fa fa-thumbs-o-up"></i>33</span>
                <span class="clickZan-comment"><i class="fa fa-comment"></i>55</span>
              </div>
            </router-link>
          </li>
        </ul>
      </div>
    </div>
</template>
<style lang="stylus" rel="stylesheet/stylus">
.gb-head
  width 4.8rem
  margin 0 auto
  padding .4rem 0
  font-size 0
  overflow hidden
  img
    width 1.5rem
    height 1.5rem
    float left
    margin-right .4rem
  h3
    font-size 14px
    color #111
    margin-top .3rem
    margin-bottom .2rem
  p
    font-size 12px
    color #676767
.gb-content
  ul
    li
      margin-bottom .3rem
      padding 0 .3rem
      .gb-item
        display block
        position relative
        padding .8rem .6rem .8rem 1.5rem
        border-radius 5px
        background-color #fff
        box-shadow 0 1px 1px #ddd, 0 1px 1px #ddd, 0 0 0 #ddd, 0 2px 2px #ddd
        .gb-item-headPic
          width 1rem
          height 1rem
          border-radius 50%
          display block
          position absolute
          top .6rem
          left .25rem
        .gb-item-close
          width .5rem
          position absolute
          top .1rem
          right .1rem
        .gb-item-content
          position relative
          .content-attention
            display block
            position absolute
            top 0
            right 0
            background-color #42bd56
            color #fff
            font-size 13px
            padding .1rem .4rem
            border-radius 3px
            border none
            outline none
            cursor pointer
          .userName
            font-weight 500
            font-size 16px
            margin-bottom .1rem
            color #111
          .attention-people
            display block
            font-size 12px
            color #aaa
            margin-bottom .2rem
          .publish-mood
            font-size 13px
            line-height 1.5
            color #111
            margin-bottom .3rem
            text-align justify
          .publish-imgs
            width 100%
            height 3rem
            display flex
            .publish-img
              background url("../../assets/images/main/time1.jpg") no-repeat
              background-size cover
            .publish-img-lf
              display block
              flex 2.5
            .publish-img-rt
              flex 1
              position relative
              font-size 0
              margin-left .04rem
              display flex
              flex-direction column
              .publish-img
                flex 2.5
                display block
                width 100%
                &:nth-child(2)
                  margin-top .04rem
              .publish-more
                display block
                position absolute
                left .35rem
                bottom .6rem
                color #fff
                font-size 12px
        .clickZan
          font-size 12px
          color #aaa
          position absolute
          left 1.5rem
          bottom .3rem
          .clickZan-lf
            margin-right .2rem
          .fa
            margin-right .06rem
</style>
<script>
    export default{
      data () {
        return {}
      }
    }
</script>
