<template>
  <div class="main-content">
    <v-banner></v-banner>
    <div class="m-box">
      <div class="title">
        <i class="title-lf"></i>
        <h3>热点</h3>
      </div>
      <div class="content" v-for="item in hotData_slice2" :key="item.id">
        <div class="content-detail">
          <div class="detail-lf">
            <h3>{{item.title}}</h3>
            <p>{{item.target.desc}}</p>
          </div>
          <div class="detail-rt" :style="{'background-image':'url('+item.target.cover_url+')'}"></div>
        </div>
        <div class="author">
          <span class="author-lf">by <em>{{item.target.author.name}}</em></span>
          <span class="author-rt" v-show="item.source_cn !== ''">{{item.source_cn}}</span>
        </div>
      </div>
    </div>
    <div class="m-box douban-time">
      <div class="title">
        <i class="title-lf"></i>
        <h3>豆瓣时间</h3>
        <a class="title-rt">更多专栏 <i class="fa fa-angle-right"></i></a>
      </div>
      <div class="content" style="padding: 0">
        <ul class="scroll-items">
          <li style="margin-left: .3rem" v-for="n in 4">
            <a class="time-box">
              <div class="time-top">
                <p>编辑推荐 | <span>第15期</span></p>
                <h3>权利的背面 |《封禅书》还原一个真实的汉武帝</h3>
              </div>
              <div class="time-content">
                <h3>古今：杨照史记百讲</h3>
                <span>共100期</span>
                <div class="author-detail">
                  <img class="author-img" src="../../assets/images/main/detail1.jpg" alt="">
                  <div class="author-detail-rt">
                    <span class="author-name">杨照</span>
                    <p class="author-intr">作家、文学评论家，华文世界著名的人文经典领读者</p>
                  </div>
                </div>
              </div>
              <div class="time-button">查看专栏</div>
            </a>
          </li>
        </ul>
      </div>
    </div>
    <div class="m-box">
      <div class="title">
        <i class="title-lf"></i>
        <h3>一刻</h3>
        <a class="title-rt">更多栏目 <i class="fa fa-angle-right"></i></a>
      </div>
      <div class="content">
        <div class="content-detail">
          <div class="detail-lf noImg">
            <h3>今晚我有空 | 豆瓣9.2的《白鹿原》复播，能否成为今年国产剧最佳？</h3>
            <p>停播一个月《白鹿原》终于回归，豆瓣9.2的高分能否得以保持？最值得推荐的影视内容，都在这里了！</p>
          </div>
        </div>
        <div class="author">
          <span class="author-lf">by <em>豆瓣</em></span>
          <span class="author-rt">来自栏目 <strong>今晚我有空</strong></span>
        </div>
      </div>
    </div>
    <div class="m-box">
      <div class="title">
        <i class="title-lf"></i>
        <h3>发现</h3>
        <a class="title-rt">更多栏目 <i class="fa fa-angle-right"></i></a>
      </div>
      <div class="content" style="padding: 0">
        <ul class="scroll-items">
          <li v-for="n in 6">
            <a>
              <div class="scroll-item-img"></div>
              <span class="scroll-item-title">视频精选</span>
            </a>
          </li>
        </ul>
      </div>
    </div>
    <div class="m-box">
      <div class="title">
        <i class="title-lf"></i>
        <h3>为你推荐</h3>
      </div>
      <div class="content" v-for="item in recommendData_slice5">
        <div class="content-detail">
          <div class="detail-lf">
            <h3>{{item.title}}</h3>
            <p>{{item.target.desc}}</p>
          </div>
          <div class="detail-rt" :style="{'background-image':'url('+item.target.cover_url+')'}"></div>
        </div>
        <div class="author">
          <span class="author-lf">by <em>{{item.target.author.name}}</em></span>
          <span class="author-rt" v-show="item.source_cn !== ''">{{item.source_cn}}</span>
        </div>
      </div>
    </div>
  </div>
</template>
<style lang="stylus" rel="stylesheet/stylus">
.main-content
  padding-bottom 1.1rem
  -webkit-overflow-scrolling touch
  &::-webkit-scrollbar
    width 0
    height 0
.m-box
  background-color #fff
  margin-top .2rem
  &:nth-child(2)
    margin-top 0
  &.douban-time
    background-color #f0f0f0
    margin-top 0
  .title
    height .8rem
    line-height .8rem
    position relative
    padding 0 .25rem
    overflow hidden
    .title-lf
      display block
      width .12rem
      height .4rem
      position absolute
      left 0
      top .2rem
      background-color #76D49B
    h3
      display inline-block
    .title-rt
      display inline-block
      float right
  .content
    padding 0 .25rem
    padding-top .3rem
    position relative
    &:nth-child(2)
      padding-top 0
    &:last-child
      &:after
        content none
    &:after
      content ''
      position absolute
      left 0.25rem
      bottom 0
      width 7.25rem
      height 1px
      background #e3e3e3
    .content-detail
      overflow hidden
      margin-bottom .3rem
      .detail-lf
        width 5rem
        float left
        &.noImg
          width 100%
        h3
          font-size 16px
          font-weight 500
          line-height 1.41
          text-align justify
          margin-bottom .15rem
        p
          display -webkit-box
          color #aaa
          font-size 12px
          line-height 1.5
          -webkit-line-clamp 2
          overflow hidden
          -webkit-box-orient vertical
          text-align justify
      .detail-rt
        width 1.73rem
        height 1.73rem
        float right
        font-size 0
        background url("../../assets/images/main/detail1.jpg") no-repeat
        background-size cover
      &.comment-lf
        margin-bottom 0
        .detail-lf
          .comment-content
            padding-top .4rem
            padding-bottom .3rem
            font-size 12px
            color #aaa
            position relative
            &:before
              content ''
              width .8rem
              height 1px
              background-color #ddd
              position absolute
              left 0
              top .2rem
        .detail-rt
          &.comment-rt
            height 2.5rem
    .author
      width 100%
      overflow hidden
      color #ccc
      font-size 12px
      padding-bottom .3rem
      padding-top .2rem
      position relative
      &:before
        content ''
        position absolute
        top 0
        left 0
        width .4rem
        height 1px
        background #e3e3e3
      span
        display inline-block
        &.author-lf
          float left
        &.author-rt
          float right
    .scroll-items
      font-size 0
      white-space nowrap
      overflow-x auto
      -webkit-overflow-scrolling touch
      padding-bottom .25rem
      padding-right .25rem
      &::-webkit-scrollbar
        width 0
        height 0
      li
        display inline-block
        vertical-align top
        margin-left .25rem
        a
          display block
          position relative
          .scroll-item-img
            width 2rem
            height 2rem
            background url("../../assets/images/main/detail1.jpg") no-repeat
            background-size cover
            border-radius .06rem
          .scroll-item-title
            position absolute
            left .2rem
            bottom .2rem
            font-size 12px
            color #fff
          .time-top
            position relative
        .time-box
          width 5.5rem
          height 5.15rem
          border-radius 5px
          overflow hidden
          border 1px solid #dcdcdc
          background-color #fff
          .time-top
            width 100%
            height 2rem
            background url("../../assets/images/main/time1.jpg") no-repeat
            background-size cover
            position relative
            font-size 12px
            color #fff
            padding .2rem .3rem
            box-sizing border-box
            border-top-left-radius 5px
            border-top-right-radius 5px
            p
              margin-bottom .6rem
              span
                color #d4d4d4
            h3
              width 72%
              display -webkit-box
              line-height 1.4
              -webkit-line-clamp 2
              overflow hidden
              -webkit-box-orient vertical
              text-align justify
              white-space normal
          .time-content
            padding .3rem .3rem 0 .3rem
            h3
              font-weight 500
              font-size 16px
              color #494949
              margin-bottom .1rem
            span
              font-size 12px
              color #aaa
            .author-detail
              overflow hidden
              font-size 0
              margin .2rem 0
              img
                width .9rem
                height .9rem
                display inline-block
                float left
                border-radius 50%
              .author-detail-rt
                width 4rem
                float left
                padding-left .3rem
                padding-top .1rem
                box-sizing border-box
                .author-name
                  display block
                  margin-bottom .2rem
                  color #333
                .author-intr
                  color #aaa
                  font-size 12px
                  text-overflow ellipsis
                  overflow hidden
          .time-button
            width 4.9rem
            height .6rem
            line-height .6rem
            margin 0 auto
            color #76D49B
            border-radius .1rem
            border 1px solid #76D49B
            font-size 14px
            text-align center
</style>
<script>
  import banner from '../../components/banner.vue'
  import axios from 'axios'
  export default{
    data () {
      return {
        recommendData_slice5: [],
        hotData_slice2: []
      }
    },
    components: {
      'v-banner': banner
    },
    created () {
      this.getHomeData()
    },
    methods: {
      getHomeData () {
        axios.get('../../static/homeData.json').then((res) => {
          let data = res.data.recommend_feeds
          let recommend = []
          let hot = []
          for (let i in data) {
            if (data[i].card && data[i].card.name === '为你推荐') {
              recommend.push(data[i])
            } else {
              hot.push(data[i])
            }
          }
          this.recommendData_slice5 = recommend.slice(5, 10)
          this.hotData_slice2 = hot.slice(0, 2)
        })
      }
    }
  }
</script>
