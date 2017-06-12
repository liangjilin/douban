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
    <div class="movieDetail-ImgBox" v-if="cityDetail.image">
      <img :src="cityDetail.image" alt="">
    </div>
    <div class="movieDetail-detail">
      <h3 class="movieDetail-title">{{cityDetail.title}}</h3>
      <p><span>{{cityDetail.wisher_count}}人感兴趣 / </span><span>{{cityDetail.participant_count}}要参加 / </span> / <span></span></p>
    </div>
    <div class="movieDetail-btn cityDetail-btn">
      <button>感兴趣</button>
      <button>要参加</button>
    </div>
    <div class="item-head">
      <h3><img src="../../../../assets/images/common/ic_subject_event_time.png" alt="" />活动时间</h3>
      <a class="head-rt colorAaa"><span>{{cityDetail.begin_time}}</span> <i class="fa fa-angle-right colorAaa"></i></a>
    </div>
    <div class="item-head">
      <h3><img src="../../../../assets/images/common/ic_event_nearby_location.png" alt="" />查看地图</h3>
      <a class="head-rt colorAaa"><span>{{cityDetail.address}}</span> <i class="fa fa-angle-right colorAaa"></i></a>
    </div>
    <div class="item-head">
      <h3><img src="../../../../assets/images/common/ic_subject_event_ticket_buy.png" alt="" />官方售票</h3>
      <a class="head-rt colorAaa"><span class="colorRed">{{cityDetail.price_range}}起</span> <i class="fa fa-angle-right colorAaa"></i></a>
    </div>
    <div class="item-head">
      <h3><img src="../../../../assets/images/common/ic_event_call.png" alt="" />购票客服热线</h3>
      <a class="head-rt colorAaa"><span>{{cityDetail.album}}</span> <i class="fa fa-angle-right colorAaa"></i></a>
    </div>
    <div class="item-head">
      <h3><img src="../../../../assets/images/common/ic_event_message.png" alt="" />售票方</h3>
      <a class="head-rt colorAaa" v-if="cityDetail.owner"><span>{{cityDetail.owner.name}}</span></a>
    </div>
    <div class="movie-introduction">
      <h3>活动详情</h3>
      <div class="intro-content">
        <p v-html="cityDetail.content"></p>
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
</style>
<script>
  import header from '../../../../components/header.vue'
  export default{
    props: [
      'item'
    ],
    data () {
      return {
        title: '同城',
        cityDetail: {}
      }
    },
    components: {
      'v-header': header
    },
    mounted () {
      this.$nextTick(function () {
        this.getCityDetail()
      })
    },
    methods: {
      getCityDetail () {
        this.cityDetail = this.$route.params.item
        console.log(this.cityDetail)
      }
    }
  }
</script>
