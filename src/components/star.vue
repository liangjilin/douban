<template>
  <div class="star-box" v-if="full !== 0">
    <span class="star star-full" v-for="star in full"></span>
    <span class="star star-half" v-for="star in half"></span>
    <span class="star star-off" v-for="star in gray"></span>
  </div>
</template>
<style lang="stylus" rel="stylesheet/stylus">

</style>
<script>
  export default{
    props: [
      'star'
    ],
    data () {
      return {}
    },
    created () {
      this.full = parseInt(this.star / 2)
      this.half = this.star % 2 === 0 ? 0 : 1
      this.gray = 5 - this.full - this.half
    }
  }
</script>
