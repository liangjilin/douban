<template>
  <div class="scroller">
    <div class="head">
      <i class="head-lf"></i>
      <h3 class="head-title">{{title}}</h3>
      <slot name="loadMore"></slot>
    </div>
    <slot name="promItem"></slot>
    <div class="content">
      <ul class="scroll-items" v-if="type === 'book'">
        <li v-for="(item, index) in items" :class="{ marginLeft3: marginLeftFlag }">
          <router-link class="movie-box" :to="{name: 'bookDetail', params:{item: item}}">
            <div class="item-poster" :style="'background:' + 'url(' + item.images.large + ')'">
              <div class="bookLabel" slot="bookLabel" v-if="bookLabelFlag">{{index+2}}</div>
            </div>
            <span class="item-title">{{item.title}}</span>
            <v-rating :rating="item.rating" v-if="ratingFlag"></v-rating>
            <span class="price" v-if="priceFlag">￥{{item.price}}</span>
            <span class="author" v-if="authorFlag">{{item.author}}</span>
          </router-link>
        </li>
      </ul>
      <ul class="scroll-items" v-if="type === 'movie'">
        <li v-for="(item, index) in items" :class="{ marginLeft3: marginLeftFlag }">
          <router-link class="movie-box" :to="{name: 'movieDetail', params:{id:item.id}}">
            <div class="item-poster" :style="'background:' + 'url(' + item.images.large + ')'">
              <div class="bookLabel" slot="bookLabel" v-if="bookLabelFlag">{{index+2}}</div>
            </div>
            <span class="item-title">{{item.title}}</span>
            <v-rating :rating="item.rating" v-if="ratingFlag"></v-rating>
          </router-link>
        </li>
      </ul>
      <ul class="scroll-items" v-if="type === 'music'">
        <li v-for="(item, index) in items" :class="{ marginLeft3: marginLeftFlag }">
          <router-link class="movie-box" :to="{name: 'musicDetail', params:{item: item}}">
            <div class="item-poster" :style="'background:' + 'url(' + item.image + ')'"></div>
            <span class="item-title">{{item.title}}</span>
            <span class="author">{{item.author[0].name}}</span>
            <v-rating :rating="item.rating" v-if="ratingFlag"></v-rating>
          </router-link>
        </li>
      </ul>
      <ul class="scroll-items" v-if="type === 'city'">
        <li v-for="(item, index) in items" :class="{ marginLeft3: marginLeftFlag }">
          <router-link class="movie-box" :to="{name: 'cityDetail', params:{item: item}}">
            <div class="item-poster" :style="'background:' + 'url(' + item.image + ')'"></div>
            <span class="item-title">{{item.title}}</span>
            <span class="author city-author">{{item.begin_time}}</span>
            <a v-show="officialTicketFlag" class="officialTicket" style="margin-top: .1rem; margin-left: 0">官方售票</a>
          </router-link>
        </li>
      </ul>
    </div>
    <slot name="lookMore"></slot>
  </div>
</template>
<style lang="stylus" rel="stylesheet/stylus">
  .scroller
    background-color #fff
    margin-top .2rem
    &.douban-time
      background-color #f0f0f0
      margin-top 0
    .head
      height .8rem
      line-height .8rem
      position relative
      padding 0 .25rem
      overflow hidden
      .head-lf
        display block
        width .12rem
        height .4rem
        position absolute
        left 0
        top .2rem
        background-color #76D49B
      .head-title
        display inline-block
      .head-rt
        display inline-block
        float right
        color #42bd56
        .fa
          color #42bd56
    .content
      padding .1rem 0
      .scroll-items
        font-size 0
        white-space nowrap
        overflow-x auto
        -webkit-overflow-scrolling touch
        padding-bottom 0.25rem
        padding-right 0.25rem
        &::-webkit-scrollbar
          width 0
          height 0
        li
          display: inline-block
          vertical-align top
          margin-left 0.25rem
          .movie-box
            display block
            width 2rem
            position relative
            text-decoration none
            .item-poster
              width 100%
              height 2.85rem
              background url("../pages/video/movie/images/movie.jpg")
              background-repeat no-repeat!important
              background-size cover!important
              overflow hidden
              position relative
            .item-title
              max-width 100%
              display block
              margin-top .15rem
              font-size 14px
              font-weight 500
              color #111
              text-align left
              overflow hidden
              text-overflow ellipsis
              white-space nowrap
              word-wrap normal
            .star-name
              font-size 12px
              color #aaa
              margin-top .1rem
              margin-bottom -.05rem
              span
                font-size 12px
                vertical-align middle
            .price
              max-width 100%
              display block
              margin-top 0.15rem
              font-size 14px
              font-weight 500
              color #e76648
              text-align left
              overflow hidden
              text-overflow ellipsis
              white-space nowrap
              word-wrap normal
            .author
              max-width 100%
              display block
              margin-top 0.15rem
              font-size 14px
              font-weight 500
              color #aaa
              text-align left
              overflow hidden
              text-overflow ellipsis
              white-space nowrap
              word-wrap normal
              &.city-author
                font-size 12px
                margin-top .1rem
          .topTen-box
            width 3.2rem
            height 2.7rem
            text-align center
            padding-top .5rem
            border-radius 5px
            background -moz-linear-gradient(top, #deb887, #f0f0f0)
            background -webkit-gradient(linear, 0 0, 0 bottom, from(#deb887), to(#f0f0f0))
            color #fff
            h3
              font-size 16px
              margin-bottom .1rem
            p
              font-size 12px
              margin-bottom .3rem
            .img-box
              font-size 0
              img
                display inline-block
                vertical-align middle
                width .7rem
                &:nth-child(2)
                  width 1rem
          &:nth-child(2)
            .topTen-box
              background -moz-linear-gradient(top, #15A216, #f0f0f0)
              background -webkit-gradient(linear, 0 0, 0 bottom, from(#15A216), to(#f0f0f0))
          &:nth-child(3)
            .topTen-box
              background -moz-linear-gradient(top, #9770b5, #f0f0f0)
              background -webkit-gradient(linear, 0 0, 0 bottom, from(#9770b5), to(#f0f0f0))
          &:nth-child(4)
            .topTen-box
              background -moz-linear-gradient(top, #f78484, #f0f0f0)
              background -webkit-gradient(linear, 0 0, 0 bottom, from(#f78484), to(#f0f0f0))
  .marginLeft3
    margin-left .3rem!important
    .movie-box
      width 2.1rem!important
</style>
<script>
  import rating from './rating.vue'
  export default{
    props: [
      'type',
      'title',
      'items',
      'ratingFlag',
      'priceFlag',
      'authorFlag',
      'bookLabelFlag',
      'marginLeftFlag',
      'officialTicketFlag'
    ],
    data () {
      return {
      }
    },
    components: {
      'v-rating': rating
    }
  }
</script>
