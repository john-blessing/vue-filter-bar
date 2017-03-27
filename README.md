## FilterBar组件使用


    <filter-bar 
    :top-menus="topMenus" 
    @selecteditem="handleClick" 
    @selectedsidemenu="handleSelectedSidemenu" 
    @selectednav="handleSelectedNav"></filter-bar>



> topMenus

    {
      name: '全部商品',
      icon: '',
      navs: [{
      name: '',
      icon: '',
      header: true,
      dataList: [{
        name: '附近',
        list: [{...}]
      }]
      }]
    }  

    --navs 弹框顶部按钮；
    --dataList 弹框顶部按钮所对应的列表数据；
      --list name所对应的列表数据

### 对象

- topMenus: 帅选条件按钮 (Array)

### 属性

- icon: 字体图标类 (String)

- header: 是否显示弹框选项头部导航 (默认: true)

### 事件

- selecteddialogmenu: 点击FilterBar顶部按钮时触发

- selecteditem: 点击弹框列表右侧项时触发

- selectedsidemenu: 点击弹框列表左侧项时触发

- selectednav: 点击弹框顶部导航按钮时触发

---

### demo

浏览器打开examples里面的index.html