<template>
    <div class="city paddingTop50">
      <div class="m-box">
        <div class="chooseCity">
          <div class="chooseCity-item">当前城市：<span>深圳</span><i>></i></div>
          <div class="chooseCity-item">类型 世界 地点<i>></i></div>
        </div>
      </div>
      <v-scroller title="热门活动" type="city" :items="city_Hot" officialTicketFlag=true>
        <router-link class="head-rt" slot="loadMore" :to="{name: 'cityMore', params:{citydata: city_Hot, title:'热门活动'}}">更多 <i class="fa fa-angle-right"></i></router-link>
      </v-scroller>
      <div class="m-box">
        <div class="title">
          <i class="title-lf"></i>
          <h3>编辑推荐</h3>
        </div>
        <div class="content" style="padding: .2rem 0">
          <ul class="scroll-items">
            <li v-for="n in 4">
              <a class="topTen-box city-box">
                <h3>世界博物馆日</h3>
                <p>5.18这些博物馆免费开放</p>
              </a>
            </li>
          </ul>
        </div>
      </div>
      <v-scroller title="电影类" type="city" :items="city_Movie">
        <router-link class="head-rt" slot="loadMore" :to="{name: 'cityMore', params:{citydata: city_Movie, title:'电影类'}}">更多 <i class="fa fa-angle-right"></i></router-link>
      </v-scroller>
      <v-scroller title="音乐类" type="city" :items="city_Music">
        <router-link class="head-rt" slot="loadMore" :to="{name: 'cityMore', params:{citydata: city_Music, title:'音乐类'}}">更多 <i class="fa fa-angle-right"></i></router-link>
      </v-scroller>
      <v-scroller title="旅行类" type="city" :items="city_Travel">
        <router-link class="head-rt" slot="loadMore" :to="{name: 'cityMore', params:{citydata: city_Travel, title:'旅行类'}}">更多 <i class="fa fa-angle-right"></i></router-link>
      </v-scroller>
      <v-scroller title="运动类" type="city" :items="city_Sports">
        <router-link class="head-rt" slot="loadMore" :to="{name: 'cityMore', params:{citydata: city_Sports, title:'运动类'}}">更多 <i class="fa fa-angle-right"></i></router-link>
      </v-scroller>
    </div>
</template>
<style lang="stylus" rel="stylesheet/stylus">
.m-box
  .chooseCity
    font-size 0
    .chooseCity-item
      display inline-block
      width 3.15rem
      padding .2rem .3rem
      font-size 14px
      position relative
      color #aaa
      &:first-child
        &:before
          content ''
          width 1px
          background-color #dcdcdc
          height .68rem
          position absolute
          right 0
          top 0
      span
        color #42bd56
      i
        position absolute
        right .3rem
.city-box
  padding-top 1rem!important
  height 2rem!important
  background url("../../../assets/images/main/time1.jpg") no-repeat!important
  background-size cover
  h3
    margin-bottom .3rem!important
</style>
<script>
    import scroller from '../../../components/scroller.vue'
    import { mapGetters } from 'vuex'

    export default{
      data () {
        return {}
      },
      components: {
        'v-scroller': scroller
      },
      created () {
        this.$store.dispatch('getCityHot')
        this.$store.dispatch('getCityMovie')
        this.$store.dispatch('getCityMusic')
        this.$store.dispatch('getCityTravel')
        this.$store.dispatch('getCitySports')
      },
      computed: {
        ...mapGetters([
          'city_Hot',
          'city_Movie',
          'city_Music',
          'city_Travel',
          'city_Sports'
        ])
      }
    }
</script>
