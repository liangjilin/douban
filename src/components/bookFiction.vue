<template>
    <div class="fictionItem">
      <div class="bookBox">
        <img class="bookBox-lf" :src="book.images.large" alt="">
        <div class="bookBox-rt">
          <h3>{{book.title}}</h3>
          <v-rating :rating="book.rating"></v-rating>
          <p>作者：{{book.author}}</p>
          <p>出版社：{{book.publisher}}</p>
        </div>
      </div>
      <p class="summary">{{book.author_intro}}</p>
    </div>
</template>
<style lang="stylus" rel="stylesheet/stylus">
.fictionItem
  .bookBox
    margin-top .8rem
    padding .25rem
    border 1px solid #dcdcdc
    border-radius 3px
    font-size 0
    .bookBox-lf
      display inline-block
      width 1.6rem
      vertical-align top
      margin-right .25rem
    .bookBox-rt
      display inline-block
      font-size 12px
      h3
        font-size 16px
        font-weight bold
        margin-bottom .2rem
      p
        max-width 4.5rem
        text-align justify
        line-height 1.5
        color #888
  .summary
    margin-top .4rem
    text-align justify
    line-height 1.5
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
