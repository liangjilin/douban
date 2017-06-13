<template>
    <ul>
      <li v-for="item in groupData">
        <a class="group-item-list">
          <img class="group-item-listHead" v-if="item.images.small" :src="item.images.small" alt="">
          <div class="group-item-listContent">
            <h3>{{item.title}}</h3>
            <p v-if="item.group_topic">{{item.group_topic.title}}</p>
          </div>
          <div class="group-item-listRight">
            <span>{{item.group_member}}人</span>
            <a class="check"></a>
          </div>
        </a>
      </li>
    </ul>
</template>
<style lang="stylus" rel="stylesheet/stylus">

</style>
<script>
    export default{
      props: [
        'groupData'
      ],
      data () {
        return {
        }
      }
    }
</script>
