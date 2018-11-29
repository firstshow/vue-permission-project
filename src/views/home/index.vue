<template>
  <div class="home">
    这是home页面
      <div v-has="'todayData'">我是今日数据</div>
      <div v-has="'yesterData'">我是昨日数据</div>
      <router-link :to="{path: '/home1'}">我是不存在的路由</router-link>
  </div>
</template>

<script>
export default {
  name: 'home'
}
</script>
