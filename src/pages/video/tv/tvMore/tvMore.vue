<template>
  <div class="fictionMore">
    <v-header :bgFlag="bgValue" :colorFlag="colorValue" :title="title" class="borderBottom">
      <a @click="$router.go(-1)" slot="back">
        <i class="mintui mintui-back colorGreen"></i>
      </a>
      <a slot="share">
        <img class="share" src="../../../../assets/images/common/ic_action_share_green.png" alt="">
      </a>
    </v-header>
    <v-tvMoreItem v-for="item in tvData" :key="item.id" :television="item"></v-tvMoreItem>
  </div>
</template>
<style lang="stylus" rel="stylesheet/stylus">
</style>
<script>
  import header from '../../../../components/header.vue'
  import tvMoreItem from '../../../../components/tvMoreItem.vue'
  export default{
    data () {
      return {
        bgValue: true,
        colorValue: true,
        title: '',
        tvData: []
      }
    },
    components: {
      'v-header': header,
      'v-tvMoreItem': tvMoreItem
    },
    mounted () {
      this.$nextTick(() => {
        this.getTvData()
        console.log(this.tvData)
      })
    },
    methods: {
      getTvData () {
        if (this.$route.params.tvData !== undefined) {
          let setTitle = JSON.stringify(this.$route.params.title)
          let setTvData = JSON.stringify(this.$route.params.tvData)
          localStorage.setItem('title', setTitle)
          localStorage.setItem('TvData', setTvData)
        }
        let getTitle = localStorage.getItem('title')
        let getTvData = localStorage.getItem('TvData')
        this.title = JSON.parse(getTitle)
        this.tvData = JSON.parse(getTvData)
      }
    }
  }
</script>
