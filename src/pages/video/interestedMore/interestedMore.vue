<template>
    <div class="interestedMore">
      <v-header :bgFlag="bgValue" :colorFlag="colorValue" title="你可能感兴趣" class="borderBottom">
        <a @click="$router.go(-1)" slot="back">
          <i class="mintui mintui-back colorGreen"></i>
        </a>
      </v-header>
      <div class="interestedTitle" v-if="typeValue === 'movie'"><p>根据你在豆瓣的历史行为和好友关系，猜你可能对这些电影和影人感兴趣</p></div>
      <div class="interestedTitle" v-if="typeValue === 'book'"><p>根据你在豆瓣的历史行为和好友关系，猜你可能对这些图书感兴趣</p></div>
      <div class="interestedTitle" v-if="typeValue === 'tv'"><p>根据你在豆瓣的历史行为和好友关系，猜你可能对这些电视和影人感兴趣</p></div>
      <div class="interestedTitle" v-if="typeValue === 'music'"><p>根据你在豆瓣的历史行为和好友关系，猜你可能对这些唱片感兴趣</p></div>
      <v-interestedItem :type="typeValue" v-for="item in interestedData" :key="item.id" :data="item"></v-interestedItem>
    </div>
</template>
<style lang="stylus" rel="stylesheet/stylus">
.interestedMore
  padding-top 50px
.interestedTitle
  background-color #fff
  text-align center
  p
    width 5rem
    line-height 1.2
    padding .2rem 0
    margin 0 auto
</style>
<script>
    import header from '../../../components/header.vue'
    import interestedMoreItem from '../../../components/interestedMoreItem.vue'

    export default{
      data () {
        return {
          bgValue: true,
          colorValue: true,
          typeValue: String,
          interestedData: []
        }
      },
      components: {
        'v-header': header,
        'v-interestedItem': interestedMoreItem
      },
      mounted () {
        this.$nextTick(() => {
          this.getData()
          console.log(this.interestedData)
          console.log(this.typeValue)
        })
      },
      methods: {
        getData () {
          if (this.$route.params.data !== undefined) {
            let setTypeValue = JSON.stringify(this.$route.params.typeValue)
            let setData = JSON.stringify(this.$route.params.data)
            localStorage.setItem('TypeValue', setTypeValue)
            localStorage.setItem('InterestedData', setData)
          }
          let getTypeValue = localStorage.getItem('TypeValue')
          let getData = localStorage.getItem('InterestedData')
          this.typeValue = JSON.parse(getTypeValue)
          this.interestedData = JSON.parse(getData)
        }
      }
    }
</script>
