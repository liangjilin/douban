<template>
  <router-link class="movieInfo" :to="{name: 'cityDetail', params:{item: cityDataList}}">
    <img class="movieInfo-img" :src="cityDataList.image" alt="">
    <div class="middle">
      <h3>{{cityDataList.title}}</h3>
      <p class="cityDetail-p"><span>时间：</span>{{cityDataList.begin_time}}</p>
      <p class="cityDetail-p"><span>地点：</span>{{cityDataList.address}}</p>
      <p class="cityDetail-p"><span>费用：</span>{{cityDataList.price_range}}<a class="officialTicket">官方售票</a></p>
    </div>
  </router-link>
</template>
<style lang="stylus" rel="stylesheet/stylus">

</style>
<script>
  export default{
    props: [
      'cityDataList'
    ],
    data () {
      return {}
    }
  }
</script>
