<template>
  <div class="app-wrapper" :class="classes">
    <sidebar class="sidebar-container"/>
    <div class="main-container">
      <navbar/>
      <Main/>
    </div>
  </div>
</template>

<script>
import Sidebar from '@/components/Sidebar'
import Navbar from '@/components/Navbar'
import Main from '@/components/Main'
export default {
  name: 'Layout',
  components: {
    Sidebar,
    Navbar,
    Main
  },
  computed: {
    classes () {
      return {
        hideSidebar: !this.$store.state.user.opened,
        openSidebar: this.$store.state.user.opened
      }
    }
  }
}
</script>

<style lang="scss">
.app-wrapper {
  position: relative;
  width: 100%;
  height: 100%;
}
</style>
