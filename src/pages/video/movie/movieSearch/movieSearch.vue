<template>
    <div class="movieSearch">
      <v-header :title="title">
        <a @click="$router.go(-1)" slot="back" class="bg-white">
          <i class="mintui mintui-back"></i>
        </a>
      </v-header>
      <div class="movieSearch-content">
        <div class="movieSearch-filter">
          <div class="filter-lf">形式:</div>
          <div class="filter-rt">
            <ul>
              <li v-for="item in this.filter_form[0].forms">
                <a>{{item.name}}</a>
              </li>
            </ul>
          </div>
        </div>
        <div class="movieSearch-filter">
          <div class="filter-lf">地区:</div>
          <div class="filter-rt">
            <ul>
              <li v-for="item in this.filter_form[0].regions">
                <a>{{item.name}}</a>
              </li>
            </ul>
          </div>
        </div>
        <div class="movieSearch-filter">
          <div class="filter-lf">类型:</div>
          <div class="filter-rt">
            <ul>
              <li v-for="item in this.filter_form[0].types">
                <a>{{item.name}}</a>
              </li>
            </ul>
          </div>
        </div>
        <div class="movieSearch-filter">
          <div class="filter-lf">特色:</div>
          <div class="filter-rt">
            <ul>
              <li v-for="item in this.filter_form[0].specials">
                <a>{{item.name}}</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div class="movieSearch-result">
        <router-link :to="{name: 'movieDetail', params:{id:item.id}}" class="movieSearch-item" v-for="item in movieSearch_list" :key="item.id">
          <img class="movieSearch-item-lf" :src="item.images.large" alt="">
          <div class="movieSearch-item-rt">
            <h3>{{item.title}}</h3>
            <div class="item-rating">
              <div class="rank">
                  <span class="rating-stars">
                    <span class="rating-star" v-for="star in Math.floor((item.rating.stars)/10)"></span>
                    <span class="rating-star rating-star-gray" v-for="star in (5-Math.floor((item.rating.stars)/10))"></span>
                    <span class="score">{{item.rating.average}}</span>
                  </span>
              </div>
            </div>
            <p>导演：{{item.directors[0].name}}</p>
            <p>主演：<span v-for="name in item.casts">{{name.name}}/</span></p>
          </div>
        </router-link>
      </div>
    </div>
</template>
<style lang="stylus" rel="stylesheet/stylus">
.movieSearch
  .movieSearch-content
    padding-top .96rem
.movieSearch-filter
  height .8rem
  align-items center
  background-color #fff
  border-top 1px solid #dcdcdc
  overflow hidden
  .filter-lf
    display inline-block
    width 1.2rem
    float left
    line-height .8rem
    text-align center
    color #aaa
  .filter-rt
    display inline-block
    width 6.3rem
    float left
    overflow hidden
    ul
      height .8rem
      white-space nowrap
      overflow-x auto
      -webkit-overflow-scrolling touch
      &::-webkit-scrollbar
        width 0
        height 0
      li
        display inline-block
        line-height .8rem
        margin-left .4rem
        &:first-child
          margin-left 0rem
        &:last-child
          margin-right .2rem
.movieSearch-result
  background-color #fff
  margin-top .2rem
  .movieSearch-item
    display block
    padding .4rem .3rem
    border-bottom 1px solid #ececec
    overflow hidden
    .movieSearch-item-lf
      display inline-block
      float left
      width 1.6rem
      margin-right .3rem
    .movieSearch-item-rt
      width 5rem
      display inline-block
      float left
      padding-top .1rem
      overflow hidden
      h3
        font-size 20px
        font-weight 500
        color #111
      .item-rating
        .score
          font-size 12px
          margin-left .1rem
      p
        color #aaa
        line-height 1.5
        text-align justify
        margin-top .1rem
        font-size 12px

</style>
<script>
    import header from '../../../../components/header.vue'
    import { mapGetters } from 'vuex'
    import api from '../../../../fetch/api'

    export default{
      data () {
        return {
          title: '找影视',
          filter_form: [],
          searchTag: '',
          movieSearch_list: []
        }
      },
      components: {
        'v-header': header
      },
      computed: {
        ...mapGetters([
          'movie_search_tag'
        ])
      },
      mounted () {
        this.$nextTick(() => {
          this.filter_form = this.movie_search_tag.concat()
          this.filter_form[0].forms.unshift({name: '全部'})
          this.filter_form[0].regions.unshift({name: '全部'})
          this.filter_form[0].types.unshift({name: '全部'})
          this.filter_form[0].specials.unshift({name: '全部'})
          //    搜索得到的电影
          this.getMovieSearch()
        })
      },
      beforeRouteLeave (to, from, next) {
        this.filter_form[0].forms.shift({name: '全部'})
        this.filter_form[0].regions.shift({name: '全部'})
        this.filter_form[0].types.shift({name: '全部'})
        this.filter_form[0].specials.shift({name: '全部'})
        next()
      },
      methods: {
        getMovieSearch () {
          this.searchTag = this.$route.params.searchName
          api.movieSearch(this.searchTag).then(res => {
            this.movieSearch_list = res.subjects
          })
        }
      }
    }
</script>
