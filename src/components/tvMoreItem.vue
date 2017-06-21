<template>
  <router-link class="movieInfo" :to="{name: 'movieDetail', params:{id: television.id}}">
    <img class="movieInfo-img" :src="television.images.large" alt="">
    <div class="middle">
      <h3>{{television.title}}</h3>
      <v-rating :rating="television.rating"></v-rating>
      <p>导演：{{television.directors[0].name}}</p>
      <p>演员：<span v-for="item in television.casts">{{item.name}}/</span></p>
      <div class="comment-box">
        <p class="comment">{{television.summary}}</p>
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
      'television'
    ],
    data () {
      return {}
    },
    components: {
      'v-rating': rating
    }
  }
</script>
