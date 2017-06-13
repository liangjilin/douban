<template>
    <div class="group">
      <div class="group-head">
        <div class="group-head-box">
          <h3>418370个有趣的小组</h3>
          <p>选择立即加入吧</p>
        </div>
        <span>根据兴趣推荐</span>
      </div>
      <div class="recommend">
        <span>精选推荐</span>
      </div>
      <v-group style="margin-top: .4rem" :groupData="group_movie" title="影视"></v-group>
      <v-group style="margin-top: .4rem" :groupData="group_book" title="读书"></v-group>
      <v-group style="margin-top: .4rem" :groupData="group_music" title="音乐"></v-group>
      <v-group style="margin-top: .4rem" :groupData="group_city" title="同城"></v-group>
      <v-group style="margin-top: .4rem" :groupData="group_college" title="高校"></v-group>
      <v-group style="margin-top: .4rem" :groupData="group_work" title="职场"></v-group>
    </div>
</template>
<style lang="stylus" rel="stylesheet/stylus">
.group
  background-color #fff
  padding-bottom 1.1rem
.group-head
  display flex
  align-items center
  justify-content center
  height 3rem
  background url("../../assets/images/group/ic_group_banner.png") no-repeat
  background-size cover
  position relative
  text-align center
  .group-head-box
    h3
      font-size 20px
      font-weight 500
      color #111
      margin-bottom .2rem
    p
      color #676767
      font-size 14px
  span
    display block
    position absolute
    bottom .3rem
    left .2rem
    font-size 12px
    color #676767
.recommend
  width 7.1rem
  height 1.3rem
  margin .2rem
  position relative
  background url("../../assets/images/group/ic_rec_group_banner_6.png") no-repeat
  background-size cover
  border-radius 3px
  span
    display block
    font-size 13px
    color #fff
    position absolute
    left .2rem
    bottom .15rem
.group-item
  padding .2rem 0
  margin 0 .2rem
  border-top 1px solid #dcdcdc
  position relative
  .group-item-title
    width 1.5rem
    text-align center
    font-size 14px
    position absolute
    top -.12rem
    left 2.8rem
    background-color #ffffff
  ul
    li
      padding .2rem 0
      .group-item-list
        display flex
        align-items center
        overflow hidden
        position relative
        .group-item-listHead
          width 1rem
          height 1rem
          display inline-block
          border-radius 3px
          margin-right .2rem
        .group-item-listContent
          max-width 4.2rem
          h3
            font-size 16px
            font-weight 500
            color #111
            margin-bottom .12rem
          p
            display -webkit-box
            font-size 12px
            line-height 1.2
            color #676767
            -webkit-line-clamp 2
            -webkit-box-orient vertical
            text-overflow ellipsis
            overflow hidden
        .group-item-listRight
          min-width 1.8rem
          text-align right
          position absolute
          right 0
          span
            color #aaa
            vertical-align middle
          img
            display inline-block
            width 0.4rem
            height auto
            vertical-align middle
</style>
<script>
    import group from '../../components/group.vue'
    import axios from 'axios'

    export default{
      data () {
        return {
          group_movie: {},
          group_book: {},
          group_music: {},
          group_city: {},
          group_college: {},
          group_work: {}
        }
      },
      components: {
        'v-group': group
      },
      created () {
        this.getGroupData()
      },
      methods: {
        getGroupData () {
          axios.get('../../static/group.json').then((res) => {
            let data = res.data.object
            data.forEach((value, index) => {
              if (value.type === '影视') {
                this.group_movie = value.data
              } else if (value.type === '读书') {
                this.group_book = value.data
              } else if (value.type === '音乐') {
                this.group_music = value.data
              } else if (value.type === '同城') {
                this.group_city = value.data
              } else if (value.type === '高校') {
                this.group_college = value.data
              } else if (value.type === '职场') {
                this.group_work = value.data
              }
            })
            console.log(this.group_movie)
          })
        }
      }
    }
</script>
