<template>
<section class="main">
  <transition name="fade" mode="out-in">
    <router-view/>
  </transition>
</section>
</template>

<script>
export default {
  name: 'Main'
}
</script>

<style>
.main {
  padding: 10px;
}
</style>
