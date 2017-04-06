## vue-filter-bar

vue编写的移动端帅选条。

## Example

![Alt text](/demo/static/filterbar.gif)

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
          @showDialog="handleShowDialog" @closeDialog="handleCloseDialog" 
          @changeTab="handleChangeTab"
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

![Alt text](/demo/static/data1.jpeg)

### Detail Params

   * name(String, default: ''): 按钮名称
   * icon(String, default: ''): 按钮icon (弃用)
   * value(String, default: ''): 按钮的值
   * type(String, default: ''): 区分帅选按钮
   * showTabHeader(Boolean, default: true): 显示弹框一级目录
   * defaultIcon(String, default: ''): 按钮默认icon
   * selectIcon(String, default: ''): 按钮被选中icon
   * selectIndex(Number, default: 0): index


![Alt text](/demo/static/data2.jpeg)


### Detail Params

   * icon(String, default: ''): 按钮icon
   * name(String, default: ''): 列表项名称
   * selectIndex(Number, default: 0): index
   * detailList(Array, default:[]): 二级目录列表左侧

![Alt text](/demo/static/data3.jpeg)

### Detail Params

  * list(Array, default: []): 二级目录列表右侧
  * name(String, default: ''): 列表项名称
## API

   * bar-menus(Array, default: []): 按钮相关数据的入口。
   * showDialog(Function, return: Object): 显示按钮相对应的弹框时调用。
   * closeDialog(Function, return: Object): 弹框消失时调用。
   * changeTab(Function, return: Object): 切换弹框一级目录时调用。
   * changeMainItem(Function, return: Object): 选择二级目录左侧列表时调用。
   * changeSelect(Function, return: Array): 返回最终结果

## Issues