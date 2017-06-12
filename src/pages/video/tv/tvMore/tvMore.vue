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
        this.title = this.$route.params.title
        this.tvData = this.$route.params.tvData
      }
    }
  }
</script>
