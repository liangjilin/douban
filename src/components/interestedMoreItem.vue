<template>
  <div class="interestedItem">
    <router-link :to="{name: 'movieDetail', params:{id: data.id}}" class="movieInfo" v-if="type === 'movie'">
      <a class="interestedClose"><img src="../assets/images/common/ic_close_status_recommend.png" alt=""></a>
      <img class="movieInfo-img" :src="data.images.large" alt="">
      <div class="middle">
        <h3>{{data.title}}</h3>
        <v-rating :rating="data.rating"></v-rating>
        <p>导演：{{data.directors[0].name}}</p>
        <p>主演：<span v-for="item in data.casts">{{item.name}}/</span></p>
      </div>
    </router-link>
    <router-link :to="{name: 'bookDetail', params:{item: data}}" class="movieInfo" v-if="type === 'book'">
      <a class="interestedClose"><img src="../assets/images/common/ic_close_status_recommend.png" alt=""></a>
      <img class="movieInfo-img" :src="data.images.large" alt="">
      <div class="middle">
        <h3>{{data.title}}</h3>
        <v-rating :rating="data.rating"></v-rating>
        <p v-if="data.author">作者：{{data.author[0]}}</p>
        <p>出版社：{{data.publisher}}</p>
      </div>
    </router-link>
    <router-link :to="{name: 'movieDetail', params:{id: data.id}}" class="movieInfo" v-if="type === 'tv'">
      <a class="interestedClose"><img src="../assets/images/common/ic_close_status_recommend.png" alt=""></a>
      <img class="movieInfo-img" :src="data.images.large" alt="">
      <div class="middle">
        <h3>{{data.title}}</h3>
        <v-rating :rating="data.rating"></v-rating>
        <p>导演：{{data.directors[0].name}}</p>
        <p>演员：<span v-for="item in data.casts">{{item.name}}/</span></p>
      </div>
    </router-link>
    <router-link :to="{name: 'musicDetail', params:{item: data}}" class="movieInfo" v-if="type === 'music'">
      <a class="interestedClose"><img src="../assets/images/common/ic_close_status_recommend.png" alt=""></a>
      <img class="movieInfo-img" :src="data.image" alt="">
      <div class="middle">
        <h3>{{data.title}}</h3>
        <v-rating :rating="data.rating"></v-rating>
        <p v-if="data.author">表演者：{{data.author[0].name}}</p>
        <p v-if="data.attrs">发行时间：{{data.attrs.pubdate[0]}}</p>
      </div>
    </router-link>
    <div class="watch" v-if="type === 'movie'">
      <span>最近值得看的热门电影</span>
      <a class="watch-btn">想看</a>
    </div>
    <div class="watch" v-if="type === 'book'">
      <span>来自豆瓣读书TOP 250榜单</span>
      <a class="watch-btn">想读</a>
    </div>
    <div class="watch" v-if="type === 'tv'">
      <span>最近值得看的热门电视剧</span>
      <a class="watch-btn">想看</a>
    </div>
    <div class="watch" v-if="type === 'music'">
      <span>来自最热新碟榜</span>
      <a class="watch-btn">想听</a>
    </div>
  </div>
</template>
<style lang="stylus" rel="stylesheet/stylus">
.interestedItem
  margin-top .2rem
  background-color #fff
  .movieInfo
    position relative
    border none
    .middle
      max-width 4.5rem
    .interestedClose
      position absolute
      right .2rem
      top .2rem
      img
        width .5rem
  .watch
    display flex
    height .8rem
    align-items center
    justify-content space-between
    margin 0 .25rem
    border-top 1px solid #dcdcdc
    font-size 12px
    .watch-btn
      display block
      padding .13rem .25rem
      color #ef7932
      border 1px solid #ef7932
      border-radius 3px
</style>
<script>
    import rating from './rating.vue'

    export default{
      props: [
        'type',
        'data'
      ],
      data () {
        return {}
      },
      components: {
        'v-rating': rating
      },
      mounted () {
        this.$nextTick(() => {
        })
      }
    }
</script>
