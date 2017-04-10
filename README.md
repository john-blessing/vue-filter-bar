## vue-filter-bar

  vue编写的移动端条件搜索条组件。

## Introduction

  利用vue开发的移动端条件搜索条组件，方便在移动端进行多条件下搜索，提高用户的体验度，高速提取用户所要浏览的搜索条件，以便提供更精确的用户浏览内容。在使用过程中，希望开发者给予更多的建议和批评，使之更加完善，提供更好的服务。

## Example

![Alt text](/demo/static/filterbar1.gif)

### More Example

   * cd demo
   * npm i
   * npm run dev

## Use Setup

### Install vue-filter-bar

    npm i vue-filter-bar --save

### Vue mount

    // import
    import FilterBar from 'vue-filter-bar'

    export default {
      components: {
        FilterBar
      }
    }

## Use in SPA

    <template>
      <div id="app">
        <filter-bar 
          top="40" 
          :bar-menus="barMenus" 
          @showDialog="handleShowDialog" 
          @closeDialog="handleCloseDialog" 
          @changeTab="handleChangeTab"
          @changeMainItem="handleChangeMainItem" 
          @changeSelect="changeData">
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
              // console.log(v);
            },
            handleChangeTab(v) {
              // console.log(v);
            },
            handleChangeMainItem(v) {
              // console.log(v)
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

## Data Structure

  [data.js](/demo/src/data.js)

## Data Params
   
   * top(Number, default: 0): 筛选条离顶部的距离。
   * name(String, default: ''): 按钮名称。
   * icon(String, default: ''): 按钮icon (弃用)。
   * value(String, default: ''): 按钮的值。
   * type(String, default: ''): 区分筛选按钮，当type='filter'时，列表为筛选模式。
   * showTabHeader(Boolean, default: true): 显示弹框一级目录， 当type='filter'时，其值为false。
   * defaultIcon(String, default: ''): 按钮默认icon。
   * selectIcon(String, default: ''): 按钮被选中icon。
   * selectIndex(Number, default: 0): 序号，当type='filter'时，其值为-1。
   * detailList(Array, default:[]): 二级目录左侧列表数据。
   * list(Array, default: []): 二级目录右侧列表数据。

## API

   * bar-menus(Array, default: []): 按钮相关数据的入口。
   * showDialog(Function, return: Object): 显示按钮相对应的弹框时调用。
   * closeDialog(Function, return: Object): 弹框消失时调用。
   * changeTab(Function, return: Object): 切换弹框一级目录时调用。
   * changeMainItem(Function, return: Object): 选择二级目录左侧列表时调用。
   * changeSelect(Function, return: Array): 返回最终结果。(注：筛选结果的value返回json对象)

## Dodos


## Issues

1. 筛选返回数据类型

筛选条件返回的数据是json对象，及下图中：

![Alt text](/demo/static/value.png)

对应的value值是对象类型，需使用for in循环去获取数据。
 