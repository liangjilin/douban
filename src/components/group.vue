<template>
  <div class="group-item">
    <div class="group-item-title">{{title}}</div>
    <v-groupItem :groupData="groupData"></v-groupItem>
  </div>
</template>
<style lang="stylus" rel="stylesheet/stylus">

</style>
<script>
    import groupItem from './groupItem.vue'

    export default{
      props: [
        'groupData',
        'title'
      ],
      data () {
        return {
        }
      },
      components: {
        'v-groupItem': groupItem
      }
    }
</script>
