<template>
  <router-link class="movieInfo" :to="{name: 'musicDetail', params:{item: music}}">
    <img class="movieInfo-img" :src="music.image" alt="">
    <div class="middle">
      <h3>{{music.title}}</h3>
      <v-rating :rating="music.rating"></v-rating>
      <p>表演者：{{music.author[0].name}}</p>
      <p>发行时间：{{music.attrs.pubdate[0]}}</p>
      <div class="comment-box">
        <p class="comment">{{music.summary}}</p>
      </div>
    </div>
  </router-link>
</template>
<style lang="stylus" rel="stylesheet/stylus">

</style>
<script>
  import rating from './rating.vue'
  export default{
    props: [
      'music'
    ],
    data () {
      return {}
    },
    components: {
      'v-rating': rating
    }
  }
</script>
