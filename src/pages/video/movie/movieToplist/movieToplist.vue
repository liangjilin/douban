<template>
    <div class="movieToplist">
      <v-header :title="title">
        <a @click="$router.go(-1)" slot="back">
          <i class="mintui mintui-back"></i>
        </a>
      </v-header>
      <div class="movieToplist-content">
        <div class="movieCharts" v-for="(item,index) in movieChart_list" >
          <div class="line">
            <h3>{{index+1}}</h3>
          </div>
          <router-link class="content" :to="{name: 'movieDetail', params:{id:item.id}}">
            <img :src="item.images.small" alt="" />
            <h3>{{item.title}}</h3>
            <div class="star-box">
              <span class="star star-on" v-for="star in Math.floor((item.rating.stars)/10)"></span>
              <span class="star star-half" v-for="star in (item.rating.stars-Math.floor((item.rating.stars)/10)*10)/5"></span>
              <span class="star star-off" v-for="star in (5 - Math.floor((item.rating.stars)/10) - (item.rating.stars-Math.floor((item.rating.stars)/10)*10)/5)"></span>
            </div>
            <span class="score">{{item.rating.average}}</span>
            <p>导演：{{item.directors[0].name}}</p>
            <p>演员：<span v-for="casts in item.casts">{{casts.name}}/</span></p>
          </router-link>
        </div>
      </div>
    </div>
</template>
<style lang="stylus" rel="stylesheet/stylus">
.movieToplist-content
  padding-top 50px
  background-color #fff
.movieCharts
  padding-bottom 1rem
  &:first-child
    padding-top 1rem
  .line
    width 3rem
    height 1px
    margin 0 auto
    background-color #dcdcdc
    position relative
    h3
      width .4rem
      text-align center
      position absolute
      top -.1rem
      left 1.3rem
      color red
      font-weight bold
      font-style oblique
      background-color #fff
  .content
    display block
    width 6.9rem
    height 2.55rem
    margin-left .3rem
    margin-top .5rem
    border 1px solid #dcdcdc
    border-radius 3px
    padding .3rem
    padding-left 2rem
    box-sizing border-box
    position relative
    img
      display block
      width 1.4rem
      height 1.95rem
      position absolute
      left .3rem
      top .3rem
    h3
      font-weight bold
      font-size 16px
      color #111
      margin-bottom .2rem
    p
      color #676767
      line-height 1.5
      font-size 12px
    .score
      color #676767
</style>
<script>
    import header from '../../../../components/header.vue'

    export default{
      data () {
        return {
          title: '榜单',
          movieChart_list: []
        }
      },
      components: {
        'v-header': header
      },
      mounted () {
        this.$nextTick(() => {
          this.movieChart_list = this.$route.params.data
          console.log(this.movieChart_list)
        })
      }
    }
</script>
