<template>
  <div class="home">
    这是power页面
    <p>
      <router-link :to="{name: 'powerManage1'}" v-has="'powerManage1'">我是tab1</router-link>|||
      <router-link :to="{name: 'userManage1'}" v-has="'userManage1'">我是tab2</router-link><br>
      <router-link :to="{path: '/powerManage/powerManage11'}">我是错误的tab页:/powerManage/powerManage11</router-link><br>
      <router-link :to="{name: 'powerManage1'}">不存在tab1权限，但是我想跳转到tab1</router-link><br>
      <router-link :to="{name: 'userManage1'}">不存在tab2权限，但是我想跳转到tab2</router-link><br>
    </p>
    <p class="x-back-box">
      <router-view></router-view>
    </p>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'home',
  computed: {
    ...mapGetters([
      'permissionRouterObj'
    ])
  },
  watch: {
    /**
     * 监听路由的变化，如果当前页面跳转的tab页不存在路由对象中，则跳转至404页面
     * @param val 最新的值
     */
    $route (val) {
      if (!this.permissionRouterObj[val.name]) {
        this.$router.replace({
          name: '404'
        })
      }
    }
  }
}
</script>

<style>
  .x-back-box {
    padding: 30px;
    background-color: #f8f8f8;
  }
</style>
