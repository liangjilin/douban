<template>
    <div class="mine">
      <a class="mine-head">
        <img src="../../assets/images/mine/avatar_male_100.png" alt="">
        <router-link to="/login" class="loginRegister">登录/注册</router-link>
        <div class="userInfo" v-show="false">
          <h3 class="userName">name</h3>
          <div class="userInfo-content">
            <span>ID：<i>161487848</i></span>
            <a class="yourPages">个人主页 <i class="fa fa-angle-right"></i></a>
          </div>
          <div class="attentions">
            <span>关注<i>10</i></span>
            <span>被关注<i>0</i></span>
          </div>
        </div>
      </a>
      <div class="remind-box">
        <a class="remind">
          <img src="../../assets/images/mine/ic_mine_notification.png" alt="">
          <span>提醒</span>
          <i class="fa fa-angle-right"></i>
        </a>
        <div class="remind-bt">暂无新提醒</div>
      </div>
      <div class="application-box">
        <ul>
          <li>
            <a>
              <div class="app-img">
                <img src="../../assets/images/mine/ic_my_likes.png" />
              </div>
              <span>喜欢</span>
            </a>
          </li>
          <li>
            <a>
              <div class="app-img">
                <img src="../../assets/images/mine/ic_my_note.png" />
              </div>
              <span>日记</span>
            </a>
          </li>
          <li>
            <a>
              <div class="app-img">
                <img src="../../assets/images/mine/ic_my_album.png" />
              </div>
              <span>相册</span>
            </a>
          </li>
          <li>
            <a>
              <div class="app-img">
                <img src="../../assets/images/mine/ic_my_status.png" />
              </div>
              <span>我的广播</span>
            </a>
          </li>
        </ul>
        <ul>
          <li>
            <a>
              <div class="app-img">
                <img src="../../assets/images/mine/ic_my_movies_tvs.png" />
              </div>
              <span>电影·电视</span>
            </a>
          </li>
          <li>
            <a>
              <div class="app-img">
                <img src="../../assets/images/mine/ic_my_books.png" />
              </div>
              <span>读书</span>
            </a>
          </li>
          <li>
            <a>
              <div class="app-img">
                <img src="../../assets/images/mine/ic_my_music.png" />
              </div>
              <span>音乐</span>
            </a>
          </li>
          <li>
            <a>
              <div class="app-img">
                <img src="../../assets/images/mine/ic_my_events.png" />
              </div>
              <span>同城活动</span>
            </a>
          </li>
        </ul>
        <ul>
          <li>
            <a>
              <div class="app-img">
                <img src="../../assets/images/mine/ic_latest_group_topics.png" style="width: .5rem"/>
              </div>
              <span>豆瓣时间</span>
            </a>
          </li>
          <li>
            <a>
              <div class="app-img">
                <img src="../../assets/images/mine/ic_my_doulist.png" />
              </div>
              <span>豆列</span>
            </a>
          </li>
          <li>
            <a>
              <div class="app-img">
                <img src="../../assets/images/mine/ic_my_orders.png" />
              </div>
              <span>订单</span>
            </a>
          </li>
          <li>
            <a>
              <div class="app-img">
                <img src="../../assets/images/mine/ic_my_wallet.png" style="width: .4rem"/>
              </div>
              <span>钱包</span>
            </a>
          </li>
        </ul>
      </div>
    </div>
</template>
<style lang="stylus" rel="stylesheet/stylus">
.mine
  padding-bottom 1.1rem
.mine-head
  display block
  width 100%
  height 3rem
  background url("../../assets/images/mine/live_player_bg.jpg") no-repeat
  background-size cover
  position relative
  img
    width 1.3rem
    height 1.3rem
    border-radius 50%
    border 2px solid #ffffff
    position absolute
    top .7rem
    left .6rem
  .loginRegister
    width 3rem
    height .7rem
    font-size 16px
    color #fff
    text-align center
    line-height .68rem
    border 1px solid #fff
    border-radius 3px
    text-decoration none
    position absolute
    top 1rem
    left 3rem
  .userInfo
    width 5.1rem
    position absolute
    top .75rem
    right 0
    color #fff
    font-size 12px
    h3
      margin-bottom .1rem
      font-size 16px
    .userInfo-content
      position relative
      overflow hidden
      padding-bottom .15rem
      padding-right .2rem
      line-height 18px
      border-bottom 1px solid #fff
      .yourPages
        float right
        .fa
          vertical-align top
          color #fff
    .attentions
      margin-top .2rem
      span
        margin-right .6rem
        i
          font-style normal
          margin-left .05rem
.remind-box
  margin-top .2rem
  padding-left .2rem
  background-color #fff
  .remind
    display block
    height .8rem
    line-height .8rem
    border-bottom 1px solid #dcdcdc
    overflow hidden
    position relative
    img
      display inline-block
      width .5rem
      vertical-align middle
      margin-right .1rem
    .fa
      padding .12rem .2rem
      font-size 18px
      position absolute
      right .1rem
      top .1rem
  .remind-bt
    height .8rem
    line-height .8rem
    text-align center
    color #aaa
    font-size 12px
.application-box
  margin .2rem 0
  ul
    display flex
    height 2rem
    justify-content space-around
    align-items center
    background-color #fff
    border-bottom 1px solid #dcdcdc
    li
      a
        width 1.6rem
        display block
        text-align center
        padding .2rem 0
        .app-img
          display block
          margin-bottom .2rem
          img
            width .6rem
</style>
<script>
    export default{
      data () {
        return {}
      }
    }
</script>
