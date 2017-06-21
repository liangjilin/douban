<template>
    <div class="movieMore">
      <v-header :bgFlag="bgValue" :colorFlag="colorValue" title="院线电影">
        <a @click="$router.go(-1)" slot="back">
          <i class="mintui mintui-back colorGreen"></i>
        </a>
        <a slot="city" class="city">
          <span>深圳</span>
          <img src="../../../../assets/images/common/ic_arrow_gray_down.png" alt="">
        </a>
      </v-header>
      <div class="movieMore-head">
        <a :class="{'active': activeFlg}" @click="toggleContent()">正在热映</a>
        <a :class="{'active': !activeFlg}" @click="toggleContent()">即将上映</a>
      </div>
      <div class="filter" v-if="!activeFlg">
        <ul class="filter-lf">
          <li v-for="(item, index) in movieDate" @click="toggleFun(item, index, movieDate)" :class="{'active': item.active}">{{item.name}}</li>
        </ul>
        <ul class="filter-rt">
          <li v-for="(item, index) in movieTimeHot" @click="toggleFun(item, index, movieTimeHot)" :class="{'active': item.active}">{{item.name}}</li>
        </ul>
      </div>
      <div class="time" v-if="!activeFlg">{{dateMonth}}月{{dateDate}}日，{{dateDay}}</div>
      <div class="content">
        <div class="movieMore-content" :class="{'activeContentLeft': !activeFlg}">
          <v-movieMoreItem v-for="item in hotMovieList" :movie="item" :key="item.id"></v-movieMoreItem>
        </div>
        <div class="movieMore-content" :class="{'activeContentRight': activeFlg}" style="padding-top: 72px">
          <v-movieMoreItem v-for="item in comingMovieList" :movie="item" :key="item.id"></v-movieMoreItem>
        </div>
      </div>
    </div>
</template>
<style lang="stylus" rel="stylesheet/stylus">
.movieMore-head
  display flex
  width 100%
  height 40px
  position fixed
  top 50px
  left 0
  border-top 1px solid #dddddd
  border-bottom 1px solid #dcdcdc
  background-color #fff
  z-index 1
  a
    line-height 40px
    flex 1
    text-align center
    color #9c9c9c
    outline none
    &.active
      color #333
      border-bottom 2px solid #9c9c9c
.movieMore
  background-color #fff
  .content
    width 15rem
    overflow hidden
    padding-top 90px
.movieMore-content
  width 7.5rem
  display inline-block
  float left
  transition all .3s ease-in
  transform translateX(0)
  &:nth-child(2)
    transform translateX(-7.5rem)
.activeContentLeft
  transform translateX(-7.5rem)
.activeContentRight
  transform translateX(7.5rem)!important
  /*即将上映*/
.movieMore
  .filter
    width 100%
    height 40px
    position fixed
    top 92px
    background-color #fff
    overflow hidden
    color #aaa
    z-index 1
    .active
      color #333
    .filter-lf
      display flex
      width 4rem
      height 40px
      float left
      align-items center
      justify-content space-around
    .filter-rt
      display flex
      width 2rem
      height 40px
      float right
      align-items center
      justify-content space-around
      position relative
      &:before
        content ''
        width 1px
        height 26px
        background-color #dcdcdc
        position absolute
        top 7px
        left -7px
  .time
    width 100%
    height 30px
    line-height 30px
    position fixed
    top 132px
    background-color #f0f0f0
    padding-left .3rem
    z-index 1
</style>
<script>
    import header from '../../../../components/header.vue'
    import movieMoreItem from '../../../../components/movieMoreItem.vue'
    export default{
      data () {
        return {
          bgValue: true,
          colorValue: true,
          activeFlg: true,
          hotMovieList: [],
          comingMovieList: [],
          movieDate: [{name: '全部', active: false}],
          movieTimeHot: [{name: '时间', active: true}, {name: '热度', active: false}],
          dateMonth: Number,
          dateDate: Number,
          dateDay: String
        }
      },
      components: {
        'v-header': header,
        'v-movieMoreItem': movieMoreItem
      },
      mounted () {
        this.$nextTick(() => {
          this.getMovieData()
          this.getNowDate()
        })
      },
      methods: {
        toggleContent () {
          this.activeFlg = !this.activeFlg
        },
        getMovieData () {
          this.activeFlg = this.$route.params.activeValue
          if (this.$route.params.hotMovie !== undefined) {
            let setHotMovie = JSON.stringify(this.$route.params.hotMovie)
            let setComingMovie = JSON.stringify(this.$route.params.comingMovie)
            localStorage.setItem('HotMovie', setHotMovie)
            localStorage.setItem('ComingMovie', setComingMovie)
          }
          let getHotMovie = localStorage.getItem('HotMovie')
          let getComingMovie = localStorage.getItem('ComingMovie')
          this.hotMovieList = JSON.parse(getHotMovie)
          this.comingMovieList = JSON.parse(getComingMovie)
        },
//        今天星期几
        getToday (value) {
          switch (value) {
            case 0:
              this.dateDay = '星期日'
              break
            case 1:
              this.dateDay = '星期一'
              break
            case 2:
              this.dateDay = '星期二'
              break
            case 3:
              this.dateDay = '星期三'
              break
            case 4:
              this.dateDay = '星期四'
              break
            case 5:
              this.dateDay = '星期五'
              break
            case 6:
              this.dateDay = '星期六'
              break
          }
        },
        getNowDate () {
          let mDate = new Date()
          let _active = false
          this.dateMonth = mDate.getMonth() + 1
          for (let i = 0; i <= 2; i++) {
            if (i === 0) {
              _active = true
            } else {
              _active = false
            }
            this.movieDate.push({name: this.dateMonth + i + '月', active: _active})
          }
          this.dateDate = mDate.getDate()
          this.getToday(mDate.getDay())
        },
        toggleFun (item, index, data) {
          let tDate = new Date()
          let _index = index
          if (item.active !== true) {
            item.active = true
            data.forEach((value, index) => {
              if (index !== _index) {
                value.active = false
              }
            })
          }
          if (data === this.movieDate) {
            data.forEach((value, index) => {
              if (value.active === true) {
                if (index === 0 || index === 1) {
                  this.getToday(tDate.getDay())
                } else if (index === 2) {
                  this.getToday(tDate.getDay() + 1)
                } else {
                  this.getToday(tDate.getDay() + 2)
                }
              }
            })
          }
        }
      }
    }
</script>
