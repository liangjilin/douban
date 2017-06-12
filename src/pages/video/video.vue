<template>
    <div class="main-content">
      <mt-navbar v-model="videoSelected">
        <mt-tab-item id="1">电影</mt-tab-item>
        <mt-tab-item id="2">读书</mt-tab-item>
        <mt-tab-item id="3">电视</mt-tab-item>
        <mt-tab-item id="4">同城</mt-tab-item>
        <mt-tab-item id="5">音乐</mt-tab-item>
      </mt-navbar>
      <mt-tab-container v-model="videoSelected">
        <mt-tab-container-item id="1">
          <v-movie></v-movie>
        </mt-tab-container-item>
        <mt-tab-container-item id="2">
          <v-book></v-book>
        </mt-tab-container-item>
        <mt-tab-container-item id="3">
          <v-tv></v-tv>
        </mt-tab-container-item>
        <mt-tab-container-item id="4">
          <v-city></v-city>
        </mt-tab-container-item>
        <mt-tab-container-item id="5">
          <v-music></v-music>
        </mt-tab-container-item>
      </mt-tab-container>
    </div>
</template>
<style lang="stylus" rel="stylesheet/stylus">
.main-content
  .mint-navbar
    width 100%
    border-bottom 1px solid #dcdcdc
    position fixed
    top 50px
    left 0
    z-index 100
    .mint-tab-item
      .mint-tab-item-label
        font-size 14px
      &.is-selected
        border-bottom 2px solid #42bd56
        color #42bd56
        margin-bottom -1px
</style>
<script>
  import movie from './movie/movie.vue'
  import book from './book/book.vue'
  import tv from './tv/tv.vue'
  import city from './city/city.vue'
  import music from './music/music.vue'

  export default{
    data () {
      return {
        videoSelected: '1'
      }
    },
    components: {
      'v-movie': movie,
      'v-book': book,
      'v-tv': tv,
      'v-city': city,
      'v-music': music
    }
  }
</script>
