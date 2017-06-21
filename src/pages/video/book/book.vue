<template>
    <div class="book paddingTop50">
      <v-scroller title="新书速递" type="book" :items="book_new" ratingFlag=true>
        <router-link class="head-rt" slot="loadMore" :to="{name:'newBookMore', params:{fiction: book_new, noFiction: book_noFiction}}">更多 <i class="fa fa-angle-right"></i></router-link>
      </v-scroller>
      <v-scroller title="最受关注的虚构类图书" type="book" :items="book_fiction" ratingFlag=true>
        <router-link class="head-rt" slot="loadMore" :to="{name:'fictionMore', params:{data: book_fiction, title: '最受关注的虚构类图书'}}">更多 <i class="fa fa-angle-right"></i></router-link>
      </v-scroller>
      <v-scroller title="最受关注的非虚构类图书" type="book" :items="book_noFiction" ratingFlag=true>
        <router-link class="head-rt" slot="loadMore" :to="{name:'fictionMore', params:{data: book_noFiction, title: '最受关注的非虚构类图书'}}">更多 <i class="fa fa-angle-right"></i></router-link>
      </v-scroller>
      <div class="m-box">
        <div class="title">
          <i class="title-lf"></i>
          <h3>图书资讯</h3>
          <a class="title-rt colorGreen">更多 ></a>
        </div>
        <div class="content">
          <div class="content-detail">
            <div class="detail-lf">
              <h3>今晚我有空 | 豆瓣9.2的《白鹿原》复播，能否成为今年国产剧最佳？</h3>
              <p>停播一个月《白鹿原》终于回归，豆瓣9.2的高分能否得以保持？最值得推荐的影视内容，都在这里了！</p>
            </div>
            <div class="detail-rt"></div>
          </div>
          <div class="author">
            <span class="author-lf">作者： <em>豆瓣</em></span>
          </div>
        </div>
      </div>
      <v-scroller title="豆瓣书店" type="book" :items="sliceExceptOne(book_store)" priceFlag=true>
        <div class="content" slot="promItem" style="padding: 0 .25rem">
          <a class="storeBook" v-for="item in sliceOne(book_store)">
            <div class="storeBook-lf" :style="'background:' + 'url(' + item.images.large + ')'"></div>
            <div class="storeBook-rt">
              <div class="storeBook-content">
                <div class="storeBook-title">
                  <span class="storeBook-price">￥ {{item.price}}</span>
                  <p class="storeBook-name">{{item.title}}</p>
                </div>
                <p class="storeBook-info">{{item.summary}}</p>
              </div>
            </div>
          </a>
        </div>
      </v-scroller>
      <v-scroller title="豆瓣阅读原创作品榜" type="book" :items="sliceExceptOne(book_Original)" bookLabelFlag=true authorFlag=true>
        <div class="content" slot="promItem" style="padding: 0 .25rem">
          <a class="storeBook" v-for="(item, index) in sliceOne(book_Original)">
            <div class="storeBook-lf" :style="'background:' + 'url(' + item.images.large + ')'">
              <div class="bookLabel">{{index+1}}</div>
            </div>
            <div class="storeBook-rt">
              <div class="storeBook-content">
                <div class="storeBook-title">
                  <p class="storeBook-name">{{item.title}}</p>
                </div>
                <p class="storeBook-info">{{item.summary}}</p>
              </div>
            </div>
          </a>
        </div>
      </v-scroller>
      <v-scroller title="限时特价电子书" type="book" :items="book_SpecialPrice" priceFlag=true>
        <a class="head-rt" slot="loadMore">更多 <i class="fa fa-angle-right"></i></a>
      </v-scroller>
      <v-scroller title="畅销图书榜" type="book" :items="book_Selling" ratingFlag=true>
        <a class="head-rt" slot="loadMore">更多 <i class="fa fa-angle-right"></i></a>
      </v-scroller>
      <v-scroller title="你可能感兴趣" type="book" :items="sliceThree(book_store)" marginLeftFlag=true ratingFlag=true>
        <div class="content" slot="promItem">
          <ul class="scroll-items">
            <li class="marginLeft3" v-for="(item, index) in sliceThree(book_Original)">
              <router-link class="movie-box" :to="{name: 'bookDetail', params:{item: item}}">
                <div class="item-poster" :style="'background:' + 'url(' + item.images.large + ')'"></div>
                <span class="item-title">{{item.title}}</span>
                <v-rating :rating="item.rating"></v-rating>
              </router-link>
            </li>
          </ul>
        </div>
        <router-link class="lookMore" slot="lookMore" :to="{name: 'interestedMore', params: {typeValue: 'book', data: book_store}}">查看更多 <i class="fa fa-angle-right colorGreen"></i></router-link>
      </v-scroller>
      <div class="m-box contentAfterN">
        <div class="title">
          <i class="title-lf"></i>
          <h3>最受欢迎的影评</h3>
          <a class="title-rt colorGreen">更多 ></a>
        </div>
        <div class="content" v-for="n in 3">
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
          <h3>选图书</h3>
        </div>
        <div class="content">
          <ul class="filter">
            <li class="filter-item">
              <a>小说</a>
            </li>
            <li class="filter-item">
              <a>爱情</a>
            </li>
            <li class="filter-item">
              <a>历史</a>
            </li>
            <li class="filter-item">
              <a>外国文学</a>
            </li>
            <li class="filter-item">
              <a>青春</a>
            </li>
            <li class="filter-item">
              <a>励志</a>
            </li>
            <li class="filter-item">
              <a>随笔</a>
            </li>
            <li class="filter-item">
              <a>传记</a>
            </li>
            <li class="filter-item">
              <a>推理</a>
            </li>
            <li class="filter-item">
              <a>旅行</a>
            </li>
            <li class="filter-item">
              <a>奇幻</a>
            </li>
            <li class="filter-item">
              <a>经营</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
</template>
<style lang="stylus" rel="stylesheet/stylus">
.bookLabel
  width .3rem
  height .4rem
  padding-top .1rem
  background-color #42bd56
  text-align center
  color #fff
  font-size 12px
  position absolute
  left .15rem
  top .04rem
.contentAfterN
  .content
    &:after
      content none!important
.content
  .storeBook
    display block
    overflow hidden
    margin .2rem 0
    .storeBook-lf
      width 2rem
      height 2.64rem
      background-size cover!important
      float left
      position relative
      margin-right .3rem
    .storeBook-rt
      overflow hidden
      padding-top .2rem
      .storeBook-content
        overflow hidden
        .storeBook-title
          margin .2rem 0
          .storeBook-price
            float right
            font-size 14px
            color #E76648
          .storeBook-name
            font-size 16px
            font-weight 500
            color #111
            margin-right .8rem
            max-width 100%
            overflow hidden
            text-overflow ellipsis
            white-space nowrap
            word-wrap normal
          .storeBook-author
            display block
            margin-top .1rem
            font-size 13px
            color #aaa
        .storeBook-info
          display -webkit-box
          overflow hidden
          text-align justify
          -webkit-box-orient vertical
          -webkit-line-clamp 4
          font-size 13px
          font-weight 300
          line-height 1.5
          color #9B9B9B
.lookMore
  display block
  width 100%
  height 0.6rem
  line-height 0.6rem
  padding-bottom 0.3rem
  font-size 14px
  color #42bd56
  text-align center
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
      'v-scroller': scroller,
      'v-rating': rating
    },
    created () {
      this.$store.dispatch('getNewBook')
      this.$store.dispatch('getFictionBook')
      this.$store.dispatch('getNoFictionBook')
      this.$store.dispatch('getStoreBook')
      this.$store.dispatch('getOriginalBook')
      this.$store.dispatch('getSpecialPriceBook')
      this.$store.dispatch('getSellingBook')
    },
    computed: {
      ...mapGetters([
        'book_new',
        'book_fiction',
        'book_noFiction',
        'book_store',
        'book_Original',
        'book_SpecialPrice',
        'book_Selling'
      ])
    },
    methods: {
      sliceOne: value => value.slice(0, 1),
      sliceThree: value => value.slice(0, 3),
      sliceExceptOne: value => value.slice(1, value.length)
    }
  }
</script>
