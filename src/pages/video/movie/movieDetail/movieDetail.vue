<template>
    <div class="movieDetail">
      <v-header :title="title">
        <a @click="$router.go(-1)" slot="back">
          <i class="mintui mintui-back"></i>
        </a>
        <a slot="search">
          <img src="../../../../assets/images/common/ic_action_share.png" class="share" />
        </a>
      </v-header>
      <template v-if="!showLoading">
        <div class="movieDetail-ImgBox" v-if="movieDetail.images">
          <img :src="movieDetail.images.large" alt="">
        </div>
        <div class="movieDetail-detail">
          <a class="detail-score" v-if="movieDetail.rating">
            <h3>豆瓣评分</h3>
            <span class="score" v-show="movieDetail.rating.average !== 0">{{movieDetail.rating.average}}</span>
            <div>
              <v-star :star="movieDetail.rating.average"></v-star>
            </div>
            <span class="score-people" v-show="movieDetail.ratings_count">{{movieDetail.ratings_count}}人</span>
            <span class="score-people" v-show="!movieDetail.ratings_count">尚未上映</span>
          </a>
          <h3 class="movieDetail-title">{{movieDetail.title}}</h3>
          <p>
            <span>{{movieDetail.year}}</span>
            <span v-for="item in movieDetail.genres"> / {{item}}</span>
          </p>
          <p>原名：{{movieDetail.original_title}}</p>
          <p>上映时间：2017-05-05(中国大陆)</p>
          <p>片长：161分钟</p>
        </div>
        <div class="movieDetail-btn">
          <button>想看</button>
          <button>看过</button>
        </div>
        <div class="item-head">
          <h3>选座购票</h3>
          <a class="head-rt colorRed"><span>￥17起</span> <i class="fa fa-angle-right"></i></a>
        </div>
        <div class="movie-introduction">
          <h3>简介</h3>
          <div class="intro-content">
            <p :class="{clamp4: clampFlag}">{{movieDetail.summary}}</p>
            <a class="open-intro" v-show="clampFlag" @click="openFlag">展开</a>
            <a class="open-intro" v-show="!clampFlag" @click="openFlag">收起</a>
          </div>
        </div>
        <div class="m-box">
          <h3 class="movieDetail-title">影人</h3>
          <div class="content">
            <ul class="scroll-items">
              <li v-for="n in 5">
                <a class="movie-box">
                  <div class="item-poster"></div>
                  <span class="item-title">摔跤吧！爸爸</span>
                  <div class="item-rating">
                    <div class="rank">
                      <span>￥ 49</span>
                    </div>
                  </div>
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div class="m-box movieDetail-stills">
          <h3 class="movieDetail-title">剧照</h3>
          <div class="content">
            <ul class="scroll-items">
              <li v-for="n in 5">
                <a class="movie-box">
                  <div class="item-poster"></div>
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div class="item-head" style="border-bottom: none">
          <h3 class="comments-title"><span>{{movieDetail.title}}</span>的评论 <i>（{{movieDetail.comments_count}}人）</i></h3>
          <button class="head-rt btn">写评论</button>
        </div>
        <div class="comments-box" v-for="n in 3">
          <a class="userImg"><img src="../../../../assets/images/main/detail1.jpg" alt=""></a>
          <div class="comments-rt">
            <div class="comments-rt-top">
              <span class="userName">我是用户名</span>
              <span class="praise"><i class="fa fa-thumbs-o-up"></i>7884</span>
            </div>
            <p class="comments-rt-content">去他娘的摔跤吧爸爸 鄙视国内这种通过降低片名档次从而降低印度电影关注度的做法</p>
            <div class="comments-rt-time">2017年5月23日</div>
          </div>
        </div>
        <a class="all-comments">查看全部短评 <i class="fa fa-angle-right"></i></a>
      </template>
      <v-loading v-if="showLoading"></v-loading>
    </div>
</template>
<style lang="stylus" rel="stylesheet/stylus">
.movieDetail
  padding-top 50px
  background-color #f9f9f9
  .m-box
    background-color #f9f9f9!important
    padding 0 .3rem
    .movieDetail-title
      color #aaa
      font-size 12px
      margin-bottom .2rem
    .content
      padding 0!important
      .scroll-items
        li
          &:first-child
            margin-left 0!important
          .movie-box
            width 1.5rem!important
            .item-poster
              height 2rem
              background url("../../../../assets/images/main/time1.jpg")
    &.movieDetail-stills
      .content
        .scroll-items
          li
            &:first-child
              margin-left 0!important
            .movie-box
              width 4rem!important
              .item-poster
                height 3rem!important
                background url("../../../../assets/images/main/time1.jpg")
.movieDetail-ImgBox
  display flex
  height 6rem
  align-items center
  justify-content center
  background-color #333030
  img
    width 3.6rem
    height 5rem
.movieDetail-detail
  padding .3rem
  position relative
  .detail-score
    display block
    padding .2rem .3rem
    background-color #fff
    box-shadow:0 0 10px rgba(86, 86, 86, .5)
    text-align center
    position absolute
    top .3rem
    right .3rem
    h3
      color #aaa
      font-size 12px
    .score
      display block
      font-size 20px
      font-weight 500
      color #111
      margin-top .1rem
    .item-rating
      margin-top 0
      margin-bottom .1rem
      .rank
        text-align center
    .score-people
      color #6d6d6d
      font-size 12px
  .movieDetail-title
    color #111
    font-weight 500
    font-size 24px
    margin-bottom .2rem
    line-height 1.5
  p
    max-width 5rem
    text-align justify
    line-height 1.5
    font-size 12px
    color #aaa
    margin-top .05rem
.movieDetail-btn
  padding .3rem
  font-size 0
  button
    outline none
    border 1px solid #ffaf37
    border-radius 5px
    padding .15rem
    background-color #f9f9f9
    font-size 14px
    color #ffaf37
    &:first-child
      width 2rem
      margin-right .15rem
    &:nth-child(2)
      width 4.75rem
.item-head
  height 1rem
  padding 0 .3rem
  line-height 1rem
  position relative
  border-bottom 1px solid #ececec
  h3
    color #111
    font-size 16px
    font-weight 500
    img
      width .4rem
      vertical-align middle
      margin-right .1rem
  .head-rt
    display block
    position absolute
    top 0
    right .3rem
    font-size 14px
    span
      margin-right .06rem
  .comments-title
    color #aaa
  .head-rt
    &.btn
      height .4rem
      outline none
      color #42bd56
      border 1px solid #42bd56
      border-radius 3px
      font-size 12px
      background-color #fff
      position absolute
      top .3rem
      right .3rem
.movie-introduction
  padding .3rem
  h3
    font-size 12px
    font-weight normal
    color #aaa
    margin .2rem 0
  .intro-content
    p
      display -webkit-box
      -webkit-box-orient vertical
      font-size 14px
      line-height 1.5
      overflow hidden
      text-align justify
      text-overflow ellipsis
      &.clamp4
        -webkit-line-clamp 4
    .open-intro
      display block
      margin-top .1rem
      color #42bd56
.comments-box
  padding-left 1.1rem
  padding-right .3rem
  position relative
  .userImg
    display block
    position absolute
    left .3rem
    top 0
    img
      width .6rem
      height .6rem
      border-radius 50%
  .comments-rt-top
    padding-top .1rem
    overflow hidden
    .userName
      color #111
      font-size 15px
      font-weight 500
    .praise
      float right
      color #aaa
      i
        margin-right .1rem
  .comments-rt-content
    margin .2rem 0
    text-align justify
    line-height 1.5
  .comments-rt-time
    color #aaa
    font-size 12px
    padding-bottom .4rem
.all-comments
  display block
  height .8rem
  line-height .8rem
  font-size 14px
  color #42bd56
  border-bottom 1px solid #dcdcdc
  text-align center
  .fa-angle-right
    color #42bd56
</style>
<script>
  import header from '../../../../components/header.vue'
  import star from '../../../../components/star.vue'
  import api from '../../../../fetch/api'
  import loading from '../../../../components/loading.vue'

  export default{
    data () {
      return {
        showLoading: true,
        clampFlag: true,
        movieId: 0,
        movieDetail: {},
        title: '电影'
      }
    },
    components: {
      'v-header': header,
      'v-star': star,
      'v-loading': loading
    },
    mounted () {
      this.$nextTick(function () {
        this.getMovieDetail()
      })
    },
    methods: {
      openFlag () {
        this.clampFlag = !this.clampFlag
      },
      getMovieDetail () {
        this.movieId = this.$route.params.id
        api.movieDetail(this.movieId).then(res => {
          this.movieDetail = res
          this.showLoading = false
          console.log(res)
        })
      }
    }
  }
</script>
