<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {

    }
  },
  created () {
    this.initRouter()
  },
  methods: {
    /**
     * 初始化路由
     * @author zc
     */
    initRouter () {
      this.$store.dispatch('initRouter')
    }
  }
}
</script>

<style>
#app {
  height: 100%;
}
</style>
