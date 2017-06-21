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
    <v-musicMoreItem v-for="item in musicData" :key="item.id" :music="item"></v-musicMoreItem>
  </div>
</template>
<style lang="stylus" rel="stylesheet/stylus">

</style>
<script>
    import header from '../../../../components/header.vue'
    import musicMoreItem from '../../../../components/musicMoreItem.vue'
    export default{
      data () {
        return {
          bgValue: true,
          colorValue: true,
          title: '',
          musicData: []
        }
      },
      components: {
        'v-header': header,
        'v-musicMoreItem': musicMoreItem
      },
      mounted () {
        this.$nextTick(() => {
          this.getMusicData()
          console.log(this.musicData)
        })
      },
      methods: {
        getMusicData () {
          if (this.$route.params.musicList !== undefined) {
            let setTitle = JSON.stringify(this.$route.params.title)
            let setMusicData = JSON.stringify(this.$route.params.musicList)
            localStorage.setItem('title', setTitle)
            localStorage.setItem('MusicData', setMusicData)
          }
          let getTitle = localStorage.getItem('title')
          let getMusicData = localStorage.getItem('MusicData')
          this.title = JSON.parse(getTitle)
          this.musicData = JSON.parse(getMusicData)
        }
      }
    }
</script>
