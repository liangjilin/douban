<template>
    <router-link class="movieInfo" :to="{name: 'movieDetail', params:{id: movie.id}}">
      <img class="movieInfo-img" :src="movie.images.large" alt="">
      <div class="middle">
        <h3>{{movie.title}}</h3>
        <v-rating :rating="movie.rating"></v-rating>
        <p>导演：{{movie.directors[0].name}}</p>
        <p>主演：<span v-for="item in movie.casts">{{item.name}}/</span></p>
        <div class="peopleLook">{{movie.collect_count}}人看过</div>
      </div>
      <a class="movieInfo-btn">购票</a>
    </router-link>
</template>
<style lang="stylus" rel="stylesheet/stylus">
.movieInfo
  display block
  padding .3rem .25rem
  font-size 0
  position relative
  border-bottom 1px solid #eeeeee
  .movieInfo-img
    display inline-block
    width 1.6rem
    margin-right .25rem
    vertical-align top
  .middle
    display inline-block
    width 3.5rem
    font-size 12px
    h3
      font-size 16px
      font-weight bold
      color #111
      line-height 1.5
    .cityDetail-p
      margin-top .1rem
      span
        color #111
        font-size 14px
        vertical-align middle
    p
      color #aaa
      text-align justify
      line-height 1.5
    .peopleLook
      font-size 14px
      color #111
      margin-top .1rem
  .movieInfo-btn
    display block
    width .8rem
    height .5rem
    line-height .5rem
    border-radius 3px
    border 1px solid #E76648
    font-size 14px
    color #E76648
    text-align center
    background-color #fff
    position absolute
    top 1.1rem
    right .25rem
    outline none
</style>
<script>
    import rating from './rating.vue'
    export default{
      props: [
        'movie'
      ],
      data () {
        return {}
      },
      components: {
        'v-rating': rating
      }
    }
</script>
