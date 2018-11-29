<template>
  <el-scrollbar wrap-class="scrollbar-wrapper">
    <el-menu
      unique-opened
      router
      :collapse="collapsed"
      :show-timeout="200"
      :default-active="'/' + $route.path.split('/')[1]"
      mode="vertical"
      background-color="#304156"
      text-color="#bfcbd9"
      active-text-color="#409EFF">
      <template v-for="(menu) in permissionList">
        <el-menu-item v-if="!menu.hasNextMenu" :class="classes" :index="menu.path" :route="{name:menu.name}" :key="menu.path">
          <svg-icon :icon-class="menu.icon"/>
          <span slot="title">{{menu.title}}</span>
        </el-menu-item>
        <el-submenu v-else :index="menu.path" :key="menu.path">
          <template slot="title">
            <svg-icon :icon-class="menu.icon"/>
            <span slot="title">{{menu.title}}</span>
          </template>
          <template v-for="(subMenu) in menu.children">
            <el-menu-item v-if="!subMenu.hasNextMenu" :route="{name:subMenu.name}"  :index="subMenu.path" :key="subMenu.path">
              {{subMenu.title}}
            </el-menu-item>
            <el-submenu v-else :index="subMenu.path" :key="subMenu.path">
              <template slot="title">
                <span slot="title">{{subMenu.title}}</span>
              </template>
              <template v-for="(item) in subMenu.children">
                <el-menu-item v-if="!item.hasNextMenu" :route="{name:item.name}"  :index="item.path" :key="item.path">
                  {{item.title}}
                </el-menu-item>
              </template>
            </el-submenu>
          </template>
        </el-submenu>
      </template>
    </el-menu>
  </el-scrollbar>
</template>

<script>
import { mapGetters } from 'vuex'
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
    ...mapGetters([
      'permissionList'
    ]),
    classes () {
      return {
        closed: !this.$store.state.user.opened
      }
    },
    collapsed () {
      return !this.$store.state.user.opened
    }
  },
  created () {
    console.log(this.permissionList)
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
