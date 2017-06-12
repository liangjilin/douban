<template>
  <router-link class="movieInfo" :to="{name: 'bookDetail', params:{item: book}}">
    <img class="movieInfo-img" :src="book.images.large" alt="">
    <div class="middle">
      <h3>{{book.title}}</h3>
      <v-rating :rating="book.rating"></v-rating>
      <p>作者：{{book.author}}</p>
      <p>出版社：{{book.publisher}}</p>
      <div class="comment-box">
        <p class="comment">{{book.summary}}</p>
      </div>
    </div>
  </router-link>
</template>
<style lang="stylus" rel="stylesheet/stylus">
.fictionMore
  .movieInfo
    .middle
      width 5.15rem
.movieInfo
  .comment-box
    padding .2rem
    margin-top .3rem
    background-color #f0f0f0
    border-radius 3px
    .comment
      display -webkit-box
      -webkit-line-clamp 4
      -webkit-box-orient vertical
      font-size 14px
      line-height 1.5
      overflow hidden
      text-overflow ellipsis
</style>
<script>
    import rating from './rating.vue'
    export default{
      props: [
        'book'
      ],
      data () {
        return {}
      },
      components: {
        'v-rating': rating
      }
    }
</script>
