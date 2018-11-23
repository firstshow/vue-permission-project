<template>
  <el-scrollbar wrap-class="scrollbar-wrapper">
    <el-menu
      unique-opened
      router
      :collapse="collapsed"
      :show-timeout="200"
      :default-active="$route.path"
      mode="vertical"
      background-color="#304156"
      text-color="#bfcbd9"
      active-text-color="#409EFF">
      <template v-for="(menu, index) in menuList">
        <el-menu-item v-if="!menu.functionMenuModels" :class="classes" :index="menu.link" :route="{path:menu.link}" :key="index">
          <svg-icon :icon-class="menu.icon"/>
          <span slot="title">{{menu.moduleName}}</span>
        </el-menu-item>
        <el-submenu v-else :index="index+''" :key="index">
          <template slot="title">
            <svg-icon :icon-class="menu.icon"/>
            <span slot="title">{{menu.moduleName}}</span>
          </template>
          <template v-for="(item, subIndex) in menu.functionMenuModels">
            <el-menu-item v-if="item.isHavePermission==1" :route="{path:item.link}"  :index="item.link" :key="subIndex">
              {{item.moduleName}}
            </el-menu-item>
          </template>
        </el-submenu>
      </template>
    </el-menu>
  </el-scrollbar>
</template>

<script>
export default {
  data () {
    return {
      menuList: [{
        isHavePermission: 1,
        link: '/',
        moduleId: '0',
        moduleName: '首页',
        icon: 'dashboard',
        functionMenuModels: null
      }, {
        isHavePermission: 1,
        link: '/about',
        moduleId: '0',
        moduleName: '文档',
        icon: 'documentation',
        functionMenuModels: null
      }, {
        isHavePermission: 1,
        link: '/guide',
        moduleId: '0',
        moduleName: '引导页',
        icon: 'guide',
        functionMenuModels: null
      }, {
        isHavePermission: 1,
        moduleId: '1',
        moduleName: '组件',
        icon: 'component',
        functionMenuModels: [{
          isHavePermission: 1,
          link: '/editor',
          moduleId: '101',
          moduleName: '富文本编辑器'
        }, {
          isHavePermission: 1,
          link: '/markdown',
          moduleId: '101',
          moduleName: 'Markdown'
        }]
      }, {
        isHavePermission: 1,
        moduleId: '1',
        moduleName: '图表',
        icon: 'chart',
        functionMenuModels: [{
          isHavePermission: 1,
          link: '/chart',
          moduleId: '101',
          moduleName: '饼图'
        }]
      }, {
        isHavePermission: 1,
        moduleId: '1',
        moduleName: 'Table',
        icon: 'table',
        functionMenuModels: [{
          isHavePermission: 1,
          link: '/table',
          moduleId: '101',
          moduleName: '表格'
        }]
      }, {
        isHavePermission: 1,
        moduleId: '1',
        moduleName: '用户管理',
        icon: 'user',
        functionMenuModels: [{
          isHavePermission: 1,
          link: '/userlist',
          moduleId: '101',
          moduleName: '用户列表'
        }]
      }]
    }
  },
  computed: {
    classes () {
      return {
        closed: !this.$store.state.user.opened
      }
    },
    collapsed () {
      return !this.$store.state.user.opened
    }
  },
  methods: {
    handleOpen (key, keyPath) {
      console.log(key, keyPath)
    },
    handleClose (key, keyPath) {
      console.log(key, keyPath)
    }
  }
}
</script>

<style lang="scss">
.el-menu-item.closed {
  padding-left: 10px !important;
  .el-tooltip {
    padding-left: 10px !important;
  }
}
</style>
