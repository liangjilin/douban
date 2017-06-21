<template>
    <div class="tv paddingTop50">
      <div class="m-box">
        <div class="title">
          <i class="title-lf"></i>
          <h3>今日更新</h3>
          <a class="title-rt colorGreen">更多 ></a>
        </div>
        <div class="content" style="padding: .2rem 0">
          <ul class="scroll-items">
            <li v-for="item in sliceThree(movie_hot_list)">
              <router-link class="movie-box tv-box" :to="{name: 'movieDetail', params:{id:item.id}}">
                <div class="item-poster tv-left" :style="'background:' + 'url(' + item.images.large + ')'"></div>
                <div class="tv-right">
                  <h3 class="tv-title">{{item.title}}</h3>
                  <v-rating :rating="item.rating"></v-rating>
                  <p class="tv-update"><span v-for="type in item.genres">{{type}} / </span></p>
                  <p class="tv-look">{{item.collect_count}}人想看</p>
                </div>
              </router-link>
            </li>
          </ul>
        </div>
      </div>
      <v-scroller title="近期值得看的国产剧" type="movie" :items="sliceTen(movie_hot_list)" ratingFlag=true>
        <router-link class="head-rt" slot="loadMore" :to="{name: 'tvMore', params:{tvData: movie_hot_list, title: '近期值得看的国产剧'}}">更多 <i class="fa fa-angle-right"></i></router-link>
      </v-scroller>
      <v-scroller title="近期值得看的美剧" type="movie" :items="sliceTen(movie_coming_list)" ratingFlag=true>
        <router-link class="head-rt" slot="loadMore" :to="{name: 'tvMore', params:{tvData: movie_coming_list, title: '近期值得看的美剧'}}">更多 <i class="fa fa-angle-right"></i></router-link>
      </v-scroller>
      <v-scroller title="近期值得看的日剧" type="movie" :items="sliceTen(movie_top250_list)" ratingFlag=true>
        <router-link class="head-rt" slot="loadMore" :to="{name: 'tvMore', params:{tvData: movie_top250_list, title: '近期值得看的日剧'}}">更多 <i class="fa fa-angle-right"></i></router-link>
      </v-scroller>
      <v-scroller title="近期值得看的综艺节目" type="movie" :items="copySubject(movie_northUsa_list)" ratingFlag=true>
        <router-link class="head-rt" slot="loadMore" :to="{name: 'tvMore', params:{tvData: copySubject(movie_northUsa_list), title: '近期值得看的综艺节目'}}">更多 <i class="fa fa-angle-right"></i></router-link>
      </v-scroller>
      <v-scroller title="你可能感兴趣" type="movie" :items="sliceThree(movie_hot_list)" marginLeftFlag=true ratingFlag=true>
        <div class="content" slot="promItem">
          <ul class="scroll-items">
            <li class="marginLeft3" v-for="(item, index) in sliceThree(movie_coming_list)">
              <router-link class="movie-box" :to="{name: 'movieDetail', params:{id:item.id}}">
                <div class="item-poster" :style="'background:' + 'url(' + item.images.large + ')'"></div>
                <span class="item-title">{{item.title}}</span>
                <v-rating :rating="item.rating"></v-rating>
              </router-link>
            </li>
          </ul>
        </div>
        <router-link class="lookMore" slot="lookMore" :to="{name: 'interestedMore', params: {typeValue: 'tv', data: movie_hot_list}}">查看更多 <i class="fa fa-angle-right colorGreen"></i></router-link>
      </v-scroller>
      <div class="m-box contentAfterN">
        <div class="title">
          <i class="title-lf"></i>
          <h3>最受欢迎的剧评</h3>
          <a class="title-rt colorGreen">更多 ></a>
        </div>
        <div class="content">
          <div class="content-detail comment-lf">
            <div class="detail-lf">
              <h3>今晚我有空 | 豆瓣9.2的《白鹿原》复播，能否成为今年国产剧最佳？</h3>
              <p>停播一个月《白鹿原》终于回归，豆瓣9.2的高分能否得以保持？最值得推荐的影视内容，都在这里了！</p>
              <div class="comment-content"><span>喵了个咪</span> 评论 <span>《完全写作指南》</span></div>
            </div>
            <div class="detail-rt comment-rt"></div>
          </div>
        </div>
        <div class="content">
          <div class="content-detail comment-lf">
            <div class="detail-lf">
              <h3>今晚我有空 | 豆瓣9.2的《白鹿原》复播，能否成为今年国产剧最佳？</h3>
              <p>停播一个月《白鹿原》终于回归，豆瓣9.2的高分能否得以保持？最值得推荐的影视内容，都在这里了！</p>
              <div class="comment-content"><span>喵了个咪</span> 评论 <span>《完全写作指南》</span></div>
            </div>
            <div class="detail-rt comment-rt"></div>
          </div>
        </div>
        <div class="content">
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
          <h3>选电视剧</h3>
        </div>
        <div class="content">
          <ul class="filter">
            <li class="filter-item">
              <a>美剧</a>
            </li>
            <li class="filter-item">
              <a>英剧</a>
            </li>
            <li class="filter-item">
              <a>韩剧</a>
            </li>
            <li class="filter-item">
              <a>国产剧</a>
            </li>
            <li class="filter-item">
              <a>港剧</a>
            </li>
            <li class="filter-item">
              <a>日剧</a>
            </li>
            <li class="filter-item">
              <a>动画</a>
            </li>
            <li class="filter-item">
              <a>综艺</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
</template>
<style lang="stylus" rel="stylesheet/stylus">
.movie-box
  &.tv-box
    width 6rem!important
    padding .2rem
    border 1px solid #dcdcdc
    overflow hidden
    border-radius 5px
    .tv-left
      width 1.6rem!important
      height 2.1rem!important
      float left
      margin-right .3rem
    .tv-right
      float left
      width 4rem
      .tv-title
        font-size 18px
        color #111
        margin .1rem 0!important
      .rating
        .noScore
          font-size 12px
          display block
          margin-top .1rem
          margin-bottom .05rem
      .tv-update
        display -webkit-box
        font-size 12px
        color #aaa
        margin-bottom .15rem
        line-height 1.5
        -webkit-line-clamp 2
        overflow hidden
        -webkit-box-orient vertical
        text-align justify
        white-space normal
        text-overflow ellipsis
      .tv-look
        font-size 12px
        color #aaa
</style>
<script>
    import rating from '../../../components/rating.vue'
    import scroller from '../../../components/scroller.vue'
    import { mapGetters } from 'vuex'

    export default{
      data () {
        return {}
      },
      components: {
        'v-rating': rating,
        'v-scroller': scroller
      },
      computed: {
        ...mapGetters([
          'movie_hot_list',
          'movie_coming_list',
          'movie_top250_list',
          'movie_northUsa_list',
          'movie_search_tag'
        ])
      },
      methods: {
        sliceThree: value => value.slice(0, 3),
        sliceTen: value => value.slice(0, 10),
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
