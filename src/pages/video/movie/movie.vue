<template>
  <div class="movie paddingTop50">
    <v-scroller title="影院热映" type="movie" :items="movieListTen(movie_hot_list)" ratingFlag=true>
      <router-link class="head-rt" slot="loadMore" :to="{name: 'movieMore', params:{hotMovie: movie_hot_list, comingMovie: movie_coming_list, activeValue: activeValue}}">更多 <i class="fa fa-angle-right"></i></router-link>
    </v-scroller>
    <v-scroller title="院线即将上映" type="movie" :items="movieListTen(movie_coming_list)" ratingFlag=true>
      <router-link class="head-rt" slot="loadMore" :to="{name: 'movieMore', params:{comingMovie: movie_coming_list, hotMovie: movie_hot_list, activeValue: !activeValue}}">更多 <i class="fa fa-angle-right"></i></router-link>
    </v-scroller>
    <div class="m-box">
      <div class="title">
        <i class="title-lf"></i>
        <h3>精选榜单</h3>
      </div>
      <div class="content" style="padding: .2rem 0">
        <ul class="scroll-items">
          <li>
            <router-link :to="{name:'movieToplist', params:{data: movie_top250_list}}" class="topTen-box">
              <h3>豆瓣 Top250</h3>
              <p>8分以上好电影</p>
              <div class="img-box">
                <img v-for="item in movieListThree(movie_top250_list)" :src="item.images.large" alt="">
              </div>
            </router-link>
          </li>
          <li>
            <router-link :to="{name:'movieToplist', params:{data: movie_hot_list}}" class="topTen-box">
              <h3>本周口碑榜</h3>
              <p>5月9日-5月16日</p>
              <div class="img-box">
                <img v-for="item in movieListThree(movie_hot_list)" :src="item.images.large" alt="">
              </div>
            </router-link>
          </li>
          <li>
            <router-link :to="{name:'movieToplist', params:{data: movie_coming_list}}" class="topTen-box">
              <h3>新片榜</h3>
              <p>5月9日-5月16日</p>
              <div class="img-box">
                <img v-for="item in movieListThree(movie_coming_list)" :src="item.images.large" alt="">
              </div>
            </router-link>
          </li>
          <li>
            <router-link :to="{name:'movieToplist', params:{data: copySubject(movie_northUsa_list)}}" class="topTen-box">
              <h3>票房榜</h3>
              <p>票房最高排名</p>
              <div class="img-box">
                <img v-for="item in movieListThree(movie_northUsa_list)" :src="item.subject.images.large" alt="">
              </div>
            </router-link>
          </li>
        </ul>
      </div>
    </div>
    <v-scroller title="你可能感兴趣" type="movie" :items="movieListThree(movie_top250_list)" marginLeftFlag=true ratingFlag=true>
      <div class="content" slot="promItem">
        <ul class="scroll-items">
          <li class="marginLeft3" v-for="(item, index) in movieListThree(movie_coming_list)">
            <router-link class="movie-box" :to="{name: 'movieDetail', params:{id:item.id}}">
              <div class="item-poster" :style="'background:' + 'url(' + item.images.large + ')'"></div>
              <span class="item-title">{{item.title}}</span>
              <v-rating :rating="item.rating"></v-rating>
            </router-link>
          </li>
        </ul>
      </div>
      <div class="lookMore" slot="lookMore">查看更多 <i class="fa fa-angle-right colorGreen"></i></div>
    </v-scroller>
    <div class="m-box contentAfterN">
      <div class="title">
        <i class="title-lf"></i>
        <h3>最受欢迎的影评</h3>
        <a class="title-rt colorGreen">更多 <i class="fa fa-angle-right"></i></a>
      </div>
      <div class="content" v-for="n in 2">
        <div class="content-detail comment-lf">
          <div class="detail-lf">
            <h3>今晚我有空 | 豆瓣9.2的《白鹿原》复播，能否成为今年国产剧最佳？</h3>
            <p>停播一个月《白鹿原》终于回归，豆瓣9.2的高分能否得以保持？最值得推荐的影视内容，都在这里了！</p>
            <div class="comment-content"><span>喵了个咪</span> 评论 <span>《完全写作指南》</span></div>
          </div>
          <div class="detail-rt comment-rt"></div>
        </div>
      </div>
    </div>
    <div class="m-box">
      <div class="title">
        <i class="title-lf"></i>
        <h3>选电影</h3>
      </div>
      <div class="content">
        <ul class="filter">
          <li class="filter-item" v-for="item in this.movie_search_tag[0].specials.slice(0, 3)">
            <router-link to="/movieSearch" :to="{name: 'movieSearch', params:{searchName:item.name}}">{{item.name}}</router-link>
          </li>
        </ul>
        <ul class="filter">
          <li class="filter-item" v-for="item in getRandomArrayElements(this.movie_search_tag[0].types, 10)">
            <router-link to="/movieSearch" :to="{name: 'movieSearch', params:{searchName:item.name}}">{{item.name}}</router-link>
          </li>
        </ul>
        <ul class="filter">
          <li class="filter-item" v-for="item in getRandomArrayElements(this.movie_search_tag[0].regions, 3)">
            <router-link to="/movieSearch" :to="{name: 'movieSearch', params:{searchName:item.name}}">{{item.name}}</router-link>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<style lang="stylus" rel="stylesheet/stylus">
.movie
  .fa-angle-right
    color #42bd56
.m-box
  .content
    .scroll-items
      li
        .movie-box
          width 2rem
          text-decoration none
          .item-poster
            width 100%
            height 2.85rem
            background url("./images/movie.jpg")
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
  &.beInterested
    .content
      &:after
        content none
      .scroll-items
        li
          margin-left .3rem
          .movie-box
            width 2.1rem
    .seeMore
      width 100%
      height .6rem
      line-height .6rem
      padding-bottom .3rem
      font-size 14px
      color #42bd56
      text-align center
.m-box
  .content
    .filter
      padding-top .2rem
      border-bottom 1px solid #ececec
      &:last-child
        border-bottom none
      .filter-item
        display inline-block
        margin-right .2rem
        margin-bottom .2rem
        a
          display block
          padding .1rem .2rem
          background-color #fff
          border 1px solid #42bd56
          border-radius .3rem
          color #42bd56
</style>
<script>
    import rating from '../../../components/rating.vue'
    import scroller from '../../../components/scroller.vue'
    import { mapGetters } from 'vuex'

    export default{
      data () {
        return {
          activeValue: true
        }
      },
      components: {
        'v-scroller': scroller,
        'v-rating': rating
      },
      created () {
        this.$store.dispatch('getHotMovie')
        this.$store.dispatch('getComingMovie')
        this.$store.dispatch('getTop250Movie')
//        this.$store.dispatch('getReputationMovie')  //    需要授权
//        this.$store.dispatch('getNewMovie')
        this.$store.dispatch('getNorthUsaMovie')
//        this.$store.dispatch('getCommentsMovie')   //    需要授权
      },
      computed: {
        ...mapGetters([
          'movie_hot_list',
          'movie_coming_list',
          'movie_top250_list',
//          'movie_reputation_list',
//          'movie_new_list',
          'movie_northUsa_list',
          'movie_search_tag'
        ])
      },
      methods: {
        movieListTen: value => value.slice(0, 10),
        movieListThree: value => value.slice(0, 3),
        getRandomArrayElements (arr, count) {
          /*eslint-disable */
          let shuffled = arr.slice(0), i = arr.length, min = i - count, temp, index
          /*eslint-disable */
          while (i-- > min) {
            index = Math.floor((i + 1) * Math.random())
            temp = shuffled[index]
            shuffled[index] = shuffled[i]
            shuffled[i] = temp
          }
          return shuffled.slice(min)
        },
        copySubject (value) {
          let arr = []
          value.forEach((value, index) => {
            arr.push(value.subject)
          })
          return arr
        }
      }
    }
</script>
