<template>
  <div class="movieDetail">
    <v-header :title="title">
      <a @click="$router.go(-1)" slot="back">
        <i class="mintui mintui-back"></i>
      </a>
      <a slot="share">
        <img src="../../../../assets/images/common/ic_action_share.png" class="share" />
      </a>
    </v-header>
    <div class="movieDetail-ImgBox" v-if="bookDetail.images">
      <img :src="bookDetail.images.large" alt="">
    </div>
    <div class="movieDetail-detail">
      <a class="detail-score" v-if="bookDetail.rating">
        <h3>豆瓣评分</h3>
        <span class="score" v-show="bookDetail.rating.average !== 0">{{bookDetail.rating.average}}</span>
        <div>
          <v-star :star="bookDetail.rating.average"></v-star>
        </div>
        <span class="score-people" v-show="bookDetail.rating.numRaters">{{bookDetail.rating.numRaters}}人</span>
      </a>
      <h3 class="movieDetail-title">{{bookDetail.title}}</h3>
      <p>
        <span>{{bookDetail.year}}</span>
        <span v-for="item in bookDetail.genres"> / {{item}}</span>
      </p>
      <p v-if="bookDetail.author">作者：{{bookDetail.author[0]}}</p>
      <p>出版社：{{bookDetail.publisher}}</p>
      <p>出版时间：{{bookDetail.pubdate}}</p>
    </div>
    <div class="movieDetail-btn bookDetail-btn">
      <button>想读</button>
      <button>在读</button>
      <button>读过 <i class="ept-star" v-for="n in 5"></i></button>
    </div>
    <div class="item-head">
      <h3><img src="../../../../assets/images/common/ic_search_book_small.png" alt="" />在豆瓣购买：纸质版/电子书</h3>
      <a class="head-rt colorRed"><span>￥{{bookDetail.price}}起</span> <i class="fa fa-angle-right"></i></a>
    </div>
    <div class="item-head">
      <h3><img src="../../../../assets/images/common/ic_vendor_others.png" alt="">其他电商购买</h3>
      <a class="head-rt colorAaa"><span>3个商家</span> <i class="fa fa-angle-right colorAaa"></i></a>
    </div>
    <div class="movie-introduction">
      <h3>简介</h3>
      <div class="intro-content">
        <p :class="{clamp4: clampFlag}">{{bookDetail.summary}}</p>
        <a class="open-intro" v-show="clampFlag" @click="openFlag">展开</a>
        <a class="open-intro" v-show="!clampFlag" @click="openFlag">收起</a>
      </div>
    </div>
    <div class="item-head" style="border-bottom: none">
      <h3 class="comments-title">短评</h3>
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
  </div>
</template>
<style lang="stylus" rel="stylesheet/stylus">
.bookDetail-btn
  button
    width 1.8rem!important
    margin-right .15rem
    &:nth-child(3)
      width 3rem!important
      margin-right 0
      .ept-star
        display inline-block
        width .2rem
        height .2rem
        background url("../../../../assets/images/common/rating_star_empty.png") no-repeat
        background-size cover
</style>
<script>
  import header from '../../../../components/header.vue'
  import star from '../../../../components/star.vue'
  export default{
    data () {
      return {
        clampFlag: true,
        bookDetail: {},
        title: '图书'
      }
    },
    components: {
      'v-header': header,
      'v-star': star
    },
    mounted () {
      this.$nextTick(function () {
        this.getBookDetail()
      })
    },
    methods: {
      openFlag () {
        this.clampFlag = !this.clampFlag
      },
      getBookDetail () {
        this.bookDetail = this.$route.params.item
        console.log(this.bookDetail)
      }
    }
  }
</script>

