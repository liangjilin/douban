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
    <v-cityMoreItem v-for="item in citydata" :key="item.id" :cityDataList="item"></v-cityMoreItem>
  </div>
</template>
<style lang="stylus" rel="stylesheet/stylus">
</style>
<script>
  import header from '../../../../components/header.vue'
  import cityMoreItem from '../../../../components/cityMoreItem.vue'
  export default{
    data () {
      return {
        bgValue: true,
        colorValue: true,
        title: '',
        citydata: []
      }
    },
    components: {
      'v-header': header,
      'v-cityMoreItem': cityMoreItem
    },
    mounted () {
      this.$nextTick(() => {
        this.getCitydata()
        console.log(this.citydata)
      })
    },
    methods: {
      getCitydata () {
        this.title = this.$route.params.title
        this.citydata = this.$route.params.citydata
      }
    }
  }
</script>
