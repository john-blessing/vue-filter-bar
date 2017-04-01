<template>
  <div id="app">
    <filter-bar :top-menus="topMenus" @selecteditem="handleClick" @selectedsidemenu="handleSelectedSidemenu" @selectednav="handleSelectedNav"
      @selecteddialogmenu="handleSelectedDialogMenu">
      <p v-for="product in productList">{{product}}</p>
    </filter-bar>
  </div>
</template>

<script>
  import FilterBar from '@/components/FilterBar'
  export default {
    name: 'app',
    data() {
      return {
        productList: [
          '幸福海岸咖啡(通州万达店)',
          'ZooYoo佐佑(鼓楼店)',
          '那间咖啡',
          '你不知道的地方',
          '咖啡库(富力城店)',
          '莲COFFEE&T',
          '1920艺术商店咖啡馆',
          '幸福海岸咖啡(通州万达店)',
          'ZooYoo佐佑(鼓楼店)',
          '那间咖啡',
          '你不知道的地方',
          '咖啡库(富力城店)',
          '莲COFFEE&T',
          '1920艺术商店咖啡馆',
          '幸福海岸咖啡(通州万达店)',
          'ZooYoo佐佑(鼓楼店)',
          '那间咖啡',
          '你不知道的地方',
          '咖啡库(富力城店)',
          '莲COFFEE&T',
          '1920艺术商店咖啡馆'
        ],
        topMenus: [{
            name: '全部商品',
            icon: 'el-icon-date',
            navs: [{
              icon: 'el-icon-date',
              name: '商区',
              detailList: [{
                name: '附近',
                icon: 'el-icon-star-off',
                list: [{
                    name: '附近（只能范围）'
                  },
                  {
                    name: '500米',
                  },
                  {
                    name: '1000米'
                  }, {
                    name: '2000米'
                  }, {
                    name: '5000米'
                  }
                ]
              }, {
                name: '热门商城',
                icon: 'el-icon-star-off',
                list: [{
                    name: '全部商城'
                  },
                  {
                    name: '三里屯'
                  },
                  {
                    name: '望京'
                  },
                  {
                    name: '国贸'
                  },
                  {
                    name: '朝外大街'
                  },
                  {
                    name: '亚运村'
                  }, {
                    name: '五道口'
                  }
                ]
              }, {
                name: '朝阳区',
                icon: 'el-icon-star-off',
                list: [{
                  name: '全部朝阳区'
                }, {
                  name: '三里屯'
                }, {
                  name: '望京'
                }]
              }]
            }, {
              icon: 'el-icon-message',
              name: '地铁'
            }]
          },

          {
            name: '全部分类',
            header: false,
            icon: '',
            navs: [{
              detailList: [{
                  name: '500m',
                  icon: 'el-icon-date'
                },
                {
                  name: '1000m',
                  icon: 'el-icon-date'
                },
                {
                  name: '1500m',
                  icon: 'el-icon-date'
                },
                {
                  name: '2000m',
                  icon: 'el-icon-date'
                }
              ]
            }]
          },

          {
            name: '只能排序',
            icon: '',
            header: true,
            navs: [{
              icon: 'icon1',
              name: '等级',
              detailList: [{
                  name: '初级',
                  icon: 'el-icon-date'
                },
                {
                  name: '中级',
                  icon: 'el-icon-date'
                },
                {
                  name: '高级',
                  icon: 'el-icon-date'
                },
                {
                  name: '终极',
                  icon: 'el-icon-date'
                }
              ]
            }, {
              icon: 'icon2',
              name: '任务',
              detailList: [{
                  name: '简单',
                  icon: 'el-icon-document'
                },
                {
                  name: '困难',
                  icon: 'el-icon-document'
                }
              ]
            }]
          }
        ]
      }
    },
    methods: {
      handleClick(v) {
        // console.log(v);
      },
      handleSelectedSidemenu(v) {
        // console.log(v);
      },
      handleSelectedNav(v) {
        // console.log(v);
      },
      handleSelectedDialogMenu(v) {
        // console.log(v)
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
