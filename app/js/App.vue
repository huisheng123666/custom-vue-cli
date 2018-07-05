<template>
  <div id="app">
    <m-header></m-header>
    <navbar></navbar>
    <keep-alive>
      <router-view/>
    </keep-alive>
  </div>
</template>

<script>
  import navbar from './public/navebar'
  import mHeader from './public/header'
export default {
  name: 'app',
  components: {
      navbar,
      mHeader
  }
}
</script>
