<template>
  <div class="home">
    <div ref="tabs">
      <el-button type="primary" v-has="'countryClass'" data-name="countryClass" @click="checkTabs('countryClass')">全国分类</el-button>
      <el-button type="primary" v-has="'provinceClass'" data-name="provinceClass" @click="checkTabs('provinceClass')">省级分类</el-button>
      <el-button type="primary" v-has="'cityClass'" data-name="cityClass" @click="checkTabs('cityClass')">市级分类</el-button>
      <el-button type="primary" v-has="'areaClass'" data-name="areaClass" @click="checkTabs('areaClass')">区级分类</el-button>
    </div>
    <router-view/>
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
  mounted () {
    this.redirectRouterName()
  },
  methods: {
    /**
     *  切换tab页
     **/
    checkTabs (val) {
      this.$router.push({
        name: val
      })
    },
    /**
     * 当有子路由的时候，做一个重定向；因为子路由有权限，
     **/
    redirectRouterName () {
      setTimeout(() => {
        let redirectRouterName = this.$refs.tabs.children[0].getAttribute('data-name')
        this.$router.push({
          name: redirectRouterName
        })
      }, 100)
    }
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
