<template>
    <div class="rating">
      <v-star :star="rating.average"></v-star>
      <span v-if="parseInt(rating.average / 2) !== 0">{{rating.average}}</span>
      <span class="noScore" v-if="parseInt(rating.average / 2) === 0">暂无评分</span>
    </div>
</template>
<style lang="stylus" rel="stylesheet/stylus">
  .star-box
    display inline-block
    font-size 0
    margin-bottom .1rem
    .star
      display inline-block
      width .2rem
      height .2rem
      background-size cover!important
    .star-full
      background url("../assets/images/common/rating_star_xsmall_on.png") no-repeat
    .star-half
      background url("../assets/images/common/rating_star_xsmall_half.png") no-repeat
    .star-off
      background url("../assets/images/common/rating_star_xsmall_off.png") no-repeat
</style>
<script>
  import star from './star.vue'
  export default{
    props: {
      rating: {
        type: Object
      }
    },
    data () {
      return {
        full: 0,
        half: 0,
        gray: 0
      }
    },
    components: {
      'v-star': star
    }
  }
</script>
