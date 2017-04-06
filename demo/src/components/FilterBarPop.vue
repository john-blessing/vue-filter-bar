<template>
  <transition name="fade">
    <div class="filterbarpop-wrap" v-if="visible" :style="{'top': bgTop + 'px'}">
      <div class="filterbarpop-bg" @click="closeDialog" :style="{'top': bgTop + 'px'}"></div>
      <div class="filterbarpop">
        <div class="tab-bar" v-show="hasTabHeader">
          <a href="javascript:;" :style="{'flex': column}" role="button" @click="clickTab(tab, index)" v-for="(tab, index) in menu.tabs"
            :class="{'selected': selectIndexTab == index}"><span :class="tab.icon"></span>{{tab.name}}</a>
        </div>
        <div class="main">
          <div class="main-sidebar" :class="{'full-line': !items,'bg-style':items,'line-style':!items,}">
            <div v-if="menu.type !== 'filter'" class="item" @click="clickSidebar(sidemenu, index)" v-for="(sidemenu, index) in sideMenus.detailList"
              :class="{'selected': currentSelectIndex == index}">
              <span :class="sidemenu.icon"></span>{{ sidemenu.name }}
            </div>
            <div v-if="menu.type == 'filter'" v-for="(sm, _index) in menu.tabs">
              <div class="filter-name">{{sm.name}}</div>
              <div class="filter-item">
                <span v-for="(sidemenu, index) in sm.detailList" class="item-operation" @click="clickFilterbar(sm, _index, index)" :class="{'multi-selected': sidemenu.selectIndex == index}">
                {{ sidemenu.name }}
                </span>
              </div>
            </div>
            <div v-if="menu.type == 'filter'" class="filter-btns">
              <a href="javascript:;" role="button" @click="handleClean">取消</a>
              <a href="javascript:;" role="button" @click="handleEnsure">确认</a>
            </div>
          </div>
          <div class="main-list line-style" v-if="items">
            <span class="item" @click="clickItem(item, index)" v-for="(item, index) in items.list" :class="{'selected': currentSelectIndex == sideMenus.selectIndex && items.selectIndex == index}">{{item.name}}</span>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
  export default {
    props: {
      menu: {
        type: Object
      },
      showDialog: {
        type: Boolean,
        default: true
      },
      hasTabHeader: {
        type: Boolean,
        default: true
      },
      filterTop: {
        type: String
      }
    },
    data() {
      return {
        selectIndexTab: 0,
        currentSelectIndex: 0,
        sideMenus: {},
        items: {},
        column: '',
        visible: false,
        top: 1,
        bgTop: 0,
        range: {}
      }
    },
    mounted() {
      this.bgTop = document.querySelector('.filterbar').offsetHeight + this.filterTop / 1;
    },
    watch: {
      showDialog(v) {
        this.visible = v;
        if (v) {
          //初始化数据        
          this.initData();
        }
      },
      menu(m) {
        //根据tabs数量计算列宽
        this.column = '0 0 ' + 100 / m.tabs.length + '%';
        //初始化数据 
        this.initData();
      }
    },
    methods: {
      //初始化数据
      initData(tabIndex) {
        var tmpTabIndx = 0;
        tabIndex === undefined ? tmpTabIndx = this.menu.selectIndex : tmpTabIndx = tabIndex
        //判断tabindex的范围是否在数组内
        if (tmpTabIndx >= 0 && tmpTabIndx < this.menu.tabs.length) {
          this.selectIndexTab = tmpTabIndx;
        } else {
          this.selectIndexTab = 0;
        }
        //确认选中tab的一级列表
        this.sideMenus = this.menu.tabs[this.selectIndexTab];
        //如果当前选中tab是对应选中结果的tab
        // debugger;
        if (this.selectIndexTab == this.menu.selectIndex) {
          this.currentSelectIndex = this.sideMenus.selectIndex;
        }
        // else{
        //   this.sideMenus.selectIndex = -1;
        //   this.currentSelectIndex = -1;
        // }
        //判断是否包含二级列表，包含则赋值
        //如果一级列表的选中状态正确，则查询二级列表        
        if (this.currentSelectIndex >= 0 && this.currentSelectIndex < this.sideMenus.detailList.length) {
          //判断是否有二级列表
          if (this.sideMenus.detailList[this.currentSelectIndex].list) {
            this.items = this.sideMenus.detailList[this.currentSelectIndex];
          } else {
            //不显示二级列表
            this.items = false;
          }
        } else { //如果一级列表选中状态不正确，按第一项的的数据判断
          //判断是否有二级列表
          if (this.sideMenus.detailList[0].list) {
            //显示空的二级列表          
            this.items = [];
          } else {
            //不显示二级列表
            this.items = false;
          }
        }
      },
      //修改选项
      changeSelect(index) {
        //记录tabIndex
        this.menu.selectIndex = this.selectIndexTab;
        //记录一级列表选项
        this.sideMenus.selectIndex = this.currentSelectIndex;
        if (this.items) {
          //确认二级列表选项
          this.items.selectIndex = index;
          //显示名称
          this.menu.name = this.items.list[this.items.selectIndex].name;
          this.menu.value = this.items.list[this.items.selectIndex].value;
        } else {
          //显示名称
          this.menu.name = this.sideMenus.detailList[this.sideMenus.selectIndex].name;
          this.menu.value = this.sideMenus.detailList[this.sideMenus.selectIndex].value;
        }
        this.$emit('changeSelect');
        this.closeDialog();
      },
      // 帅选修改选项
      changeRangeSelect() {
        this.menu.name = '筛选';
        var l = [], _l = [];
        for (var i in this.range) {
          if (!(this.range[i] == '')) {
            for(var _i in this.range[i].value){
              _l.push(this.range[i].value[_i]);
            }
            this.range[i].value = _l;
            l.push(this.range[i]);
          }
        }
        this.menu.value = l.length > 0 ? l : '全部';
        this.$emit('changeSelect');
        this.closeDialog();
      },
      // 选择Tab菜单
      clickTab(tab, index) {
        if (index !== this.selectIndexTab) {
          //根据选中的tab初始化数据
          this.initData(index);
          this.$emit('changeTab', {
            tab,
            index
          })
        }
      },
      // 筛选方法
      clickFilterbar(v, I, i) {
        v.detailList[i].selectIndex = i;
        if(!this.range[I]){
          this.range[I] = {name: v.name, value: {}};
          this.range[I].value[i] = v.detailList[i].value;
        } else {
          if(!this.range[I].value[i]){
            this.range[I].value[i] = v.detailList[i].value;
          } else {
            this.range[I].value[i] = '';
            v.detailList[i].selectIndex = -1;
          }
        }
      },
      // 点击左侧列表
      clickSidebar(v, i) {
        if (this.currentSelectIndex !== i) {
          this.currentSelectIndex = i;
          //存在二级列表
          if (this.sideMenus.detailList[this.currentSelectIndex].list) {
            this.items = this.sideMenus.detailList[this.currentSelectIndex];
          } else {
            //只有一级列表，记录选项，退出
            this.changeSelect();
          }
          this.$emit('changeMainItem', {
            v,
            i
          });
        }
      },
      // 点击右侧列表
      clickItem(v, i) {
        //只有一级列表，记录选项，退出
        this.changeSelect(i);
      },
      // 关闭弹框
      closeDialog() {
        this.visible = false;
        this.$emit('closeDialog');
      },
      // 提交已选内容
      handleEnsure() {
        this.changeRangeSelect();
        this.$emit('changeMainItem', this.range);
        // this.closeDialog();
      },
      // 清除已选内容
      handleClean() {
        this.menu.tabs.map(item => {
          item.detailList.map(_item => {
            _item.selectIndex = -1;
          })
        });
        this.range = {};
      }
    }
  }

  /**
    TODOS:

    1. 需要一个属性去辨别帅选项
    2. 多选
    3. 添加多选框
  
   */
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
    max-height: 100%;
    .filterbarpop-bg {
      position: fixed;
      top: 0;
      bottom: 0;
      left: 0;
      width: 100%;
      background: rgba(0, 0, 0, .6);
    }
    .filterbarpop {
      position: absolute;
      width: 100%;
      border-top: 1px solid #ccc;
      .tab-bar {
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
        .selected {
          border-bottom: 2px solid orange;
          box-sizing: border-box;
        }
        a {
          background: #fff;
          height: 100%;
          line-height: 40px;
          text-decoration: none;
          color: #323232;
          text-align: center;
        }
      }
      .main {
        display: flex;
        display: -webkit-flex;
        flex-direction: row;
        -webkit-flex-direction: row;
        height: 250px;
        background: #fff;
        .main-sidebar {
          flex: 0 0 50%;
          overflow: auto;
          width: 100%;
        }
        .full-line {
          flex: 0 0 100%;
          div {
            text-align: left; // text-indent: 1.5em;
          }
        }
        .item-operation {
          display: inline-block;
          padding: 10px 4px 10px 4px;
          border: 1px solid rgb(91, 149, 255);
          border-radius: 3px;
          height: 0;
          line-height: 1px;
        }
        .multi-selected {
          background: rgb(91, 149, 255);
          color: #fff !important;
        }
        .filter-item {
          border-top: 1px solid #ccc;
          border-bottom: 1px solid #ccc;
          padding: 13px 0 5px 10px;

          span {
            margin-right: 8px;
            margin-bottom: 8px;
          }
        }
        .filter-name {
          padding: 10px 0 10px 10px;
        }
        .filter-btns {
          display: flex;
          display: -webkit-flex;
          flex-direction: row;
          -webkit-flex-direction: row;
          justify-content: space-around;
          -webkit-box-pack: space-around;
          -moz-box-pack: space-around;
          -ms-flex-pack: space-around;
          position: absolute;
          bottom: -40px;
          width: 100%;
          line-height: 40px;
          z-index: 100;
          background: #fff;
          a {
            display: block;
            width: 100%;
            text-align: center;
            text-decoration: none;
            color: #ccc;
            border-top: 1px solid #ccc;
            &:last-child {
              background: #39f;
              color: #fff;
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
        .line-style {
          .item {
            text-align: left;
            margin-left: 10px;
            padding-left: 15px;
            border-bottom: 1px solid #ccc;
            position: relative;
            &.selected {
              color: orange;
              border-color: orange;
              span {
                color: orange;
              }
            }
            .checkbox {
              position: absolute;
              right: 50px;
              top: 10px;
            }
          }
        }
        .bg-style {
          .item {
            background-color: #f5f5f5;
            &.selected {
              background-color: #FFF;
            }
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
          span {
            font-size: 14px;
            color: #888;
            margin-right: 10px;
            vertical-align: middle;
          }
          &:active {
            color: #fff;
          }
        }
      }
    }
  }
</style>