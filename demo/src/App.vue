<template>
  <div id="app">
    <filter-bar top="40" :bar-menus="barMenus" @showDialog="handleShowDialog" @closeDialog="handleCloseDialog" @changeTab="handleChangeTab"
      @changeMainItem="handleChangeMainItem" @changeSelect="changeData">
    </filter-bar>
  </div>
</template>

<script>
  import FilterBar from '@/components/FilterBar'
  import barMenus from '@/data';
  export default {
    name: 'app',
    data() {
      return {
        barMenus: barMenus
      }
    },
    methods: {
      handleShowDialog(v) {
        // console.log(v);
      },
      handleCloseDialog(v) {
        console.log(v);
      },
      handleChangeTab(v) {
        console.log(v);
      },
      handleChangeMainItem(v) {
        console.log(v)
      },
      changeData(v) {
        console.log(v);
      }
    },
    components: {
      'filter-bar': FilterBar
    }

  }
</script>

<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }
</style>