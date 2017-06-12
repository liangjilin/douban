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
    <div class="movieDetail-ImgBox musicDetail-ImgBox" v-if="musicDetail.image">
      <img :src="musicDetail.image" alt="">
    </div>
    <div class="movieDetail-detail">
      <a class="detail-score" v-if="musicDetail.rating">
        <h3>豆瓣评分</h3>
        <span class="score" v-show="musicDetail.rating.average !== 0">{{musicDetail.rating.average}}</span>
        <div>
          <v-star :star="musicDetail.rating.average"></v-star>
        </div>
        <span class="score-people" v-show="musicDetail.ratings_count">{{musicDetail.ratings_count}}人</span>
      </a>
      <h3 class="movieDetail-title">{{musicDetail.title}}</h3>
      <p>
        <span>{{musicDetail.year}}</span>
        <span v-for="item in musicDetail.genres"> / {{item}}</span>
      </p>
      <p v-if="musicDetail.author">作者：{{musicDetail.author[0].name}}</p>
      <p v-if="musicDetail.attrs">出版社：{{musicDetail.attrs.publisher[0]}}</p>
      <p v-if="musicDetail.attrs">出版时间：{{musicDetail.attrs.pubdate[0]}}</p>
    </div>
    <div class="movieDetail-btn bookDetail-btn">
      <button>想听</button>
      <button>在听</button>
      <button>听过 <i class="ept-star" v-for="n in 5"></i></button>
    </div>
    <div class="movie-introduction">
      <h3>简介</h3>
      <div class="intro-content">
        <p :class="{clamp4: clampFlag}">{{musicDetail.summary}}</p>
        <a class="open-intro" v-show="clampFlag" @click="openFlag">展开</a>
        <a class="open-intro" v-show="!clampFlag" @click="openFlag">收起</a>
      </div>
    </div>
    <div class="movie-introduction">
      <h3>曲目</h3>
      <div class="song" v-if="musicDetail.attrs">
        <a>{{musicDetail.attrs.tracks[0]}}</a>
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
.musicDetail-ImgBox
  height 5rem!important
  img
    height 3.6rem!important
</style>
<script>
  import header from '../../../../components/header.vue'
  import star from '../../../../components/star.vue'
  export default{
    data () {
      return {
        clampFlag: true,
        musicDetail: {},
        title: '音乐'
      }
    },
    components: {
      'v-header': header,
      'v-star': star
    },
    mounted () {
      this.$nextTick(function () {
        this.getMusicDetail()
        console.log(this.musicDetail)
      })
    },
    methods: {
      openFlag () {
        this.clampFlag = !this.clampFlag
      },
      getMusicDetail () {
        this.musicDetail = this.$route.params.item
      }
    }
  }
</script>

