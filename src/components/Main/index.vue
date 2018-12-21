<template>
<section class="main">
  <span>{{$route.meta}}</span>
  <transition name="fade" mode="out-in">
    <router-view/>
  </transition>
</section>
</template>

<script>
export default {
  name: 'Main',
  data () {
    return {
      keepAliveList: [
        'roleManage',
        'roleDetail',
        'userManage'
      ]
    }
  }
}
</script>

<style>
.main {
  padding: 10px;
}
</style>
