<template>
  <transition name="fade">
    <div class="filterbarpop-wrap" v-if="visible" :style="{'top': bgTop + 'px'}">
      <div class="filterbarpop-bg" @click="handleClose" :style="{'top': bgTop + 'px'}"></div>
      <div class="filterbarpop" :style="{'top': top + 'px'}">
        <div class="nav-bar" v-show="isNav">
          <a href="javascript:;" :style="{'flex': column}" role="button" @click="handleSelected(nav, index)" v-for="(nav, index) in navs"
            :class="{'is-selected': isSelected == index}"><span :class="nav.icon"></span>{{nav.name}}</a>
        </div>
        <div class="main">
          <div class="main-sidebar" :class="{'full-line': !items}">
            <div class="item" @click="handleClickSidebar(sidemenu, index)" v-for="(sidemenu, index) in sideMenus" :class="{'s-selected': sideSelected == index}">
              <span :class="sidemenu.icon"></span>{{ sidemenu.name }}</div>
          </div>
          <div class="main-list" v-if="items">
            <span class="item" @click="handleClickItem(item, index)" v-for="(item, index) in items">{{item.name}}</span>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
  export default {
    props: {
      navs: {
        type: Array
      },
      showDialog: {
        type: Boolean,
        default: true
      },
      isNav: {
        type: Boolean,
        default: true
      }
    },
    data() {
      return {
        isSelected: 0,
        sideSelected: 0,
        sideMenus: [],
        items: [],
        column: '',
        visible: false,
        randomNum: 0,
        dataInfo: [],
        top: 0,
        bgTop: 0
      }
    },
    mounted() {
      this.top = document.querySelector('.filterbar').offsetTop + 1;
      this.bgTop = document.querySelector('.filterbar').offsetHeight;
    },
    watch: {
      showDialog(v) {
        this.visible = v;
      },
      navs(v) {
        if (v) {
          this.column = '0 0 ' + 100 / v.length + '%';
          if (v[0].detailList) {
            this.sideMenus = v[0].detailList;
            if (this.sideMenus[0].list) {
              this.items = this.sideMenus[0].list;
            } else {
              this.items = false;
            }
          }else {
            this.handleClearList();
          }
        }
      }
    },
    methods: {
      // 选择弹框顶部菜单
      handleSelected(v, i) {
        this.isSelected = i;

        if (v.detailList) {
          this.sideMenus = v.detailList;
          this.items = this.sideMenus[i].list;
        } else {
          this.handleClearList();
        }

        this.$emit('checkmenu', {
          v,
          i
        })
      },
      // 清除原有数据
      handleClearList(){
        this.sideMenus = [];
        this.items = [];
      },
      // 点击左侧列表
      handleClickSidebar(v, i) {
        this.sideSelected = i;
        
        if(this.items){
          this.items = this.sideMenus[i].list;
        } else {
          setTimeout(() => {
            this.handleClose();
          }, 200);
        }

        this.$emit('clicksidebar', {
          v,
          i
        })
      },
      // 点击右侧列表
      handleClickItem(v, i) {
        setTimeout(() => {
          this.$emit('clickitem', {
            v,
            i
          });
        }, 200)
      },
      // 关闭弹框
      handleClose() {
        this.visible = false;
        this.$emit('close');
      }
    }
  }

</script>

<style lang="scss">
  .fade-enter-active,
  .fade-leave-active {
    transition: opacity .5s
  }

  .fade-enter,
  .fade-leave-active {
    opacity: 0
  }
  
  .filterbarpop-wrap {
    position: fixed;
    width: 100%;
    top: 0;
    bottom: 0;
    left: 0;
    overflow: hidden;
    z-index: 2017;
    max-height: 100%;
    .filterbarpop-bg {
      position: fixed;
      top: 0;
      bottom: 0;
      left: 0;
      width: 100%;
      max-height: 100%;
      background: rgba(0, 0, 0, .6);
    }
    .filterbarpop {
      position: absolute;
      width: 100%;
      .nav-bar {
        width: 100%;
        display: flex;
        display: -ms-flexbox;
        display: -moz-box;
        display: -webkit-box;
        display: -webkit-flex;
        flex-directives: row;
        -webkit-flex-direction: row;
        align-items: center;
        -webkit-align-items: center;
        -webkit-box-align: center;
        -moz-box-align: center;
        -ms-flex-align: center;
        height: 40px;

        a {
          background: #fff;
          height: 100%;
          line-height: 40px;
          text-decoration: none;
          color: #323232;
          text-align: center;
          span{
            margin-right: 5px;
            display: inline-block;
          }
        }
      }
      .main {
        display: flex;
        display: -webkit-flex;
        flex-direction: row;
        -webkit-flex-direction: row;
        height: 250px;
        background: #fff;
        border-top: 1px solid #f5f5f5;
        .main-sidebar {
          flex: 0 0 50%;
          overflow: auto;
          width: 100%;
          div {
            background: #f5f5f5;
          }
        }
        .full-line {
          flex: 0 0 100%;
          div {
            text-align: left;
            padding-left: 1.5em;
          }
          .item{
            span{
              position: relative;
              top: 0;
              left: 0;
              margin-right: 15px;
            }
          }
        }
        .main-list {
          flex: 0 0 50%;
          overflow: auto;
          span:active {
            background: #f5f5f5;
          }
        }
        .item {
          display: inline-block;
          height: 40px;
          background: #fff;
          line-height: 40px;
          width: 100%;
          text-decoration: none;
          color: #444;
          text-align: center;
          position: relative;
          &:active {
            color: #fff;
          }
          span{
            margin-right: 5px;
            position: absolute;
            left: 15px;
            top: 12px;
          }
        }
      }
    }
    .is-selected {
      border-bottom: 2px solid orange;
      box-sizing: border-box;
    }
    .s-selected {
      background: #fff !important;
    }
  }

</style>
