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
      <v-bookMoreItem v-for="item in bookData" :key="item.id" :book="item"></v-bookMoreItem>
    </div>
</template>
<style lang="stylus" rel="stylesheet/stylus">
.fictionMore
  background-color #fff
  padding-top 50px
</style>
<script>
    import header from '../../../../components/header.vue'
    import bookMoreItem from '../../../../components/bookMoreItem.vue'
    export default{
      data () {
        return {
          bgValue: true,
          colorValue: true,
          title: '',
          bookData: []
        }
      },
      components: {
        'v-header': header,
        'v-bookMoreItem': bookMoreItem
      },
      mounted () {
        this.$nextTick(() => {
          this.getBookData()
          console.log(this.bookData)
        })
      },
      methods: {
        getBookData () {
          if (this.$route.params.data !== undefined) {
            let setTitle = JSON.stringify(this.$route.params.title)
            let setBookData = JSON.stringify(this.$route.params.data)
            localStorage.setItem('title', setTitle)
            localStorage.setItem('bookData', setBookData)
          }
          let getTitle = localStorage.getItem('title')
          let getBookData = localStorage.getItem('bookData')
          this.title = JSON.parse(getTitle)
          this.bookData = JSON.parse(getBookData)
        }
      }
    }
</script>
