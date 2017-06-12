<template>
  <div class="main">
    <v-header :title="selectedValue">
      <a slot="search">
        <i class="fa fa-search"></i>
      </a>
    </v-header>
    <mt-tab-container swipeable:false v-model="selectedValue">
      <mt-tab-container-item id="首页">
        <v-home></v-home>
      </mt-tab-container-item>
      <mt-tab-container-item id="书影音">
        <v-video></v-video>
      </mt-tab-container-item>
      <mt-tab-container-item id="广播">
        <v-broadcast></v-broadcast>
      </mt-tab-container-item>
      <mt-tab-container-item id="小组">
        <v-group></v-group>
      </mt-tab-container-item>
      <mt-tab-container-item id="我的">
        <v-mine></v-mine>
      </mt-tab-container-item>
    </mt-tab-container>
    <mt-tabbar fixed v-model="selectedValue">
      <mt-tab-item id="首页">
        <img slot="icon" v-if="!(selectedValue === '首页')" src="./../assets/images/footer/ic_tab_home_normal.png">
        <img slot="icon" v-if="selectedValue === '首页'" src="./../assets/images/footer/ic_tab_home_active.png">
        首页
      </mt-tab-item>
      <mt-tab-item id="书影音">
        <img slot="icon" v-if="!(selectedValue === '书影音')" src="./../assets/images/footer/ic_tab_subject_normal.png">
        <img slot="icon" v-if="selectedValue === '书影音'" src="./../assets/images/footer/ic_tab_subject_active.png">
        书影音
      </mt-tab-item>
      <mt-tab-item id="广播">
        <img slot="icon" v-if="!(selectedValue === '广播')" src="./../assets/images/footer/ic_tab_status_normal.png">
        <img slot="icon" v-if="selectedValue === '广播'" src="./../assets/images/footer/ic_tab_status_active.png">
        广播
      </mt-tab-item>
      <mt-tab-item id="小组">
        <img slot="icon" v-if="!(selectedValue === '小组')" src="./../assets/images/footer/ic_tab_group_normal.png">
        <img slot="icon" v-if="selectedValue === '小组'" src="./../assets/images/footer/ic_tab_group_active.png">
        小组
      </mt-tab-item>
      <mt-tab-item id="我的">
        <img slot="icon" v-if="!(selectedValue === '我的')" src="./../assets/images/footer/ic_tab_profile_normal.png">
        <img slot="icon" v-if="selectedValue === '我的'" src="./../assets/images/footer/ic_tab_profile_active.png">
        我的
      </mt-tab-item>
    </mt-tabbar>
  </div>
</template>
<style lang="stylus" rel="stylesheet/stylus">
.main
  padding-top 50px
.is-selected
  color #42bd56!important
  background none!important
.mint-tab-item
  .mint-tab-item-icon
    width 28px
    height 28px
</style>
<script>
  import header from './../components/header.vue'
  import home from './home/home.vue'
  import video from './video/video.vue'
  import broadcast from './broadcast/broadcast.vue'
  import group from './group/group.vue'
  import mine from './mine/mine.vue'

  export default{
    data () {
      return {
        selectedValue: '首页'
      }
    },
    components: {
      'v-header': header,
      'v-home': home,
      'v-video': video,
      'v-broadcast': broadcast,
      'v-group': group,
      'v-mine': mine
    }
  }
</script>
