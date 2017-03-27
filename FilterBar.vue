<template>
  <div class="filterbar">
    <div class="container">
      <div class="row">
        <div class="col" :class="{'is-selected': index == selectedIndex}" @click="handleShowDialog(topMenu, index)" v-for="(topMenu, index) in topMenus">
          <span :class="topMenu.icon"></span>{{topMenu.name}}</div>
        <filter-bar-pop :show-dialog="isShow" :isNav="isNav" :navs="navs" @close="handleClose" @clickitem="handleQuery" @checkmenu="handleCheckMenu"
          @clicksidebar="handleClickSideBar"></filter-bar-pop>
      </div>
    </div>
  </div>
</template>
<script>
  import FilterBarPop from './FilterBarPop'

  export default {
    props: {
      topMenus: {
        type: Array
      }
    },
    data() {
      return {
        isShow: false,
        isNav: true,
        navs: [],
        selectedIndex: undefined
      }
    },
    methods: {
      handleShowDialog(v, i) {
        this.isShow = true;
        this.navs = v.navs;
        this.selectedIndex = i;
        this.$emit('selecteddialogmenu', {
          v,
          i
        });
        if (v.header == false) {
          this.isNav = v.header;
        } else {
          this.isNav = true;
        }
      },
      handleQuery(v) {
        this.handleClose();
        this.$emit('selecteditem', v);
      },
      handleClickSideBar(v) {
        this.$emit('selectedsidemenu', v);
      },
      handleCheckMenu(v) {
        this.$emit('selectednav', v);
      },
      handleClose() {
        this.isShow = false;
        this.isNav = true;
      }
    },
    components: {
      'filter-bar-pop': FilterBarPop
    }
  }

</script>
<style lang="scss">
  .filterbar {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    background: #fff;
  }

  .container {
    width: 100%;
    outline: 1px solid #DBDCDE;
    position: relative;
  }

  .row {
    display: flex;
    display: -ms-flexbox;
    display: -moz-box;
    display: -webkit-box;
    display: -webkit-flex;
    flex-direction: row;
    -webkit-flex-direction: row;
    justify-content: space-between;
    -webkit-box-pack: space-between;
    -moz-box-pack: space-between;
    -ms-flex-pack: space-between;
    width: 90%;
    height: 40px;
    margin: 0 auto;
    line-height: 40px;
    .is-selected {
      color: orange;
    }
  }

</style>
