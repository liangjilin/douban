<template>
    <div class="music paddingTop50">
      <v-scroller title="华语新碟榜" type="music" :items="music_Chinese" ratingFlag=true>
        <router-link class="head-rt" slot="loadMore" :to="{name: 'musicMore', params:{musicList: music_Chinese, title: '华语新碟榜'}}">更多 <i class="fa fa-angle-right"></i></router-link>
      </v-scroller>
      <v-scroller title="欧美新碟榜" type="music" :items="music_Usa" ratingFlag=true>
        <router-link class="head-rt" slot="loadMore" :to="{name: 'musicMore', params:{musicList: music_Usa, title: '欧美新碟榜'}}">更多 <i class="fa fa-angle-right"></i></router-link>
      </v-scroller>
      <v-scroller title="日韩新碟榜" type="music" :items="music_JapanKorea" ratingFlag=true>
        <router-link class="head-rt" slot="loadMore" :to="{name: 'musicMore', params:{musicList: music_JapanKorea, title: '日韩新碟榜'}}">更多 <i class="fa fa-angle-right"></i></router-link>
      </v-scroller>
      <v-scroller title="热门新碟榜" type="music" :items="music_Hot" ratingFlag=true>
        <router-link class="head-rt" slot="loadMore" :to="{name: 'musicMore', params:{musicList: music_Hot, title: '热门新碟榜'}}">更多 <i class="fa fa-angle-right"></i></router-link>
      </v-scroller>
      <div class="m-box">
        <div class="title">
          <i class="title-lf"></i>
          <h3>音乐资讯</h3>
          <a class="title-rt colorGreen">更多 ></a>
        </div>
        <div class="content">
          <div class="content-detail comment-lf">
            <div class="detail-lf">
              <h3>今晚我有空 | 豆瓣9.2的《白鹿原》复播，能否成为今年国产剧最佳？</h3>
              <p>停播一个月《白鹿原》终于回归，豆瓣9.2的高分能否得以保持？最值得推荐的影视内容，都在这里了！</p>
              <div class="comment-content"><span>喵了个咪</span> 评论 <span>《完全写作指南》</span></div>
            </div>
            <div class="detail-rt"></div>
          </div>
        </div>
      </div>
      <v-scroller title="你可能感兴趣" type="music" :items="sliceThree(music_Usa)" marginLeftFlag=true ratingFlag=true>
        <div class="content" slot="promItem">
          <ul class="scroll-items">
            <li class="marginLeft3" v-for="(item, index) in sliceThree(music_Hot)">
              <router-link class="movie-box" :to="{name: 'musicDetail', params:{item: item}}">
                <div class="item-poster" :style="'background:' + 'url(' + item.image + ')'"></div>
                <span class="item-title">{{item.title}}</span>
                <v-rating :rating="item.rating"></v-rating>
              </router-link>
            </li>
          </ul>
        </div>
        <router-link class="lookMore" slot="lookMore" :to="{name: 'interestedMore', params: {typeValue: 'music', data: music_Usa}}">查看更多 <i class="fa fa-angle-right colorGreen"></i></router-link>
      </v-scroller>
      <div class="m-box contentAfterN">
        <div class="title">
          <i class="title-lf"></i>
          <h3>最受欢迎的剧评</h3>
          <a class="title-rt colorGreen">更多 ></a>
        </div>
        <div class="content" v-for="n in 3">
          <div class="content-detail comment-lf">
            <div class="detail-lf">
              <h3>今晚我有空 | 豆瓣9.2的《白鹿原》复播，能否成为今年国产剧最佳？</h3>
              <p>停播一个月《白鹿原》终于回归，豆瓣9.2的高分能否得以保持？最值得推荐的影视内容，都在这里了！</p>
              <div class="comment-content"><span>喵了个咪</span> 评论 <span>《完全写作指南》</span></div>
            </div>
            <div class="detail-rt"></div>
          </div>
        </div>
      </div>
      <div class="m-box">
        <div class="title">
          <i class="title-lf"></i>
          <h3>选音乐</h3>
        </div>
        <div class="content">
          <ul class="filter">
            <li class="filter-item">
              <a>流行</a>
            </li>
            <li class="filter-item">
              <a>摇滚</a>
            </li>
            <li class="filter-item">
              <a>民谣</a>
            </li>
            <li class="filter-item">
              <a>独立</a>
            </li>
          </ul>
          <ul class="filter">
            <li class="filter-item">
              <a>华语</a>
            </li>
            <li class="filter-item">
              <a>欧美</a>
            </li>
            <li class="filter-item">
              <a>日本</a>
            </li>
            <li class="filter-item">
              <a>韩国</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
</template>
<style lang="stylus" rel="stylesheet/stylus">
.music
  .item-poster
    height 2rem!important
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
          'music_Chinese',
          'music_Usa',
          'music_JapanKorea',
          'music_Hot'
        ])
      },
      created () {
        this.$store.dispatch('getMusicChinese')
        this.$store.dispatch('getMusicUsa')
        this.$store.dispatch('getMusicJapanKorea')
        this.$store.dispatch('getMusicHot')
      },
      methods: {
        sliceThree: value => value.slice(0, 3)
      }
    }
</script>
