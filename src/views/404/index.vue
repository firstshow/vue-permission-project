<template>
  <div class="home">
    我是404页面
    <router-link :to="{path: '/home'}">返回首页</router-link>
    <router-link :to="{path: '/login'}">返回登陆页</router-link>
  </div>
</template>

<script>
export default {
  name: 'home'
}
</script>
