export default [{
    name: '附近',
    icon: '',
    value: 'area',
    showTabHeader: true,
    defaultIcon: '',
    selectIcon: '',
    selectIndex: 0,
    tabs: [{
            icon: '',
            name: '商圈',
            selectIndex: 0,
            detailList: [{
                name: '附近',
                icon: '',
                selectIndex: 0,
                list: [{
                    name: '默认',
                    value: 'all'
                }, {
                    name: '500米',
                    value: '500'
                }, {
                    name: '1000米',
                    value: '1000'
                }]
            }, {
                name: '朝阳区',
                icon: '',
                selectIndex: 1,
                list: [{
                    name: '全部',
                    value: 'all'
                }, {
                    name: '建国门',
                    value: 'jianguomen'
                }, {
                    name: '亚运村',
                    value: 'yayuncun'
                }]
            }, {
                name: '海淀区',
                icon: '',
                selectIndex: 2,
                list: [{
                    name: '全部',
                    value: 'all'
                }, {
                    name: '中关村',
                    value: 'zhongguancun'
                }, {
                    name: '五道口',
                    value: 'wudaokou'
                }]
            }]
        },
        {
            icon: '',
            name: '地铁沿线',
            selectIndex: 1,
            detailList: [{
                name: '1号线',
                icon: '',
                selectIndex: 0,
                list: [{
                    name: '平果圆',
                    value: 'pingguoyuan'
                }, {
                    name: '古城',
                    value: 'gucheng'
                }, {
                    name: '八角游乐园',
                    value: 'bajiaoyouleyuan'
                }]
            }, {
                name: '2号线',
                icon: '',
                selectIndex: 1,
                list: [{
                    name: '积水潭',
                    value: 'jishuitan'
                }, {
                    name: '鼓楼大街',
                    value: 'guloudajie'
                }, {
                    name: '安定门',
                    value: 'andingmen'
                }]
            }, {
                name: '4号线',
                icon: '',
                selectIndex: 2,
                list: [{
                    name: '安和桥北',
                    value: 'anheqiaobei'
                }, {
                    name: '北宫门',
                    value: 'beigongmen'
                }, {
                    name: '西宛',
                    value: 'xiwan'
                }]
            }]
        }
    ]
}, {
    name: '菜系',
    icon: '',
    value: 'food',
    showTabHeader: false,
    defaultIcon: '',
    selectIcon: '',
    selectIndex: 0,
    tabs: [{
        icon: '',
        name: '',
        selectIndex: 0,
        detailList: [{
            name: '全部',
            icon: '',
            value: '全部',
            selectIndex: 0,
            list: [{
                name: "全部",
                value: 'all'
            }]
        }, {
            name: '中餐馆',
            icon: '',
            value: '中餐馆',
            selectIndex: 1,
            list: [{
                name: '全部',
                value: 'all'
            }, {
                name: '火锅',
                value: 'hot pot'
            }, {
                name: '川菜',
                value: 'Sichuan cuisine'
            }]
        }, {
            name: '西餐馆',
            icon: '',
            value: '西餐管',
            selectIndex: 2,
            list: [{
                name: '全部',
                value: 'all'
            }, {
                name: '披萨',
                value: 'pizza'
            }, {
                name: '牛排',
                value: 'steak'
            }]
        }]
    }]
}, {
    name: '排序',
    icon: '',
    value: 'compositor',
    showTabHeader: false,
    defaultIcon: '',
    selectIcon: '',
    selectIndex: 0,
    tabs: [{
        icon: '',
        name: '',
        selectIndex: 0,
        detailList: [{
            name: '只能排序',
            icon: '',
            value: '0',
            selectIndex: 0
        }, {
            name: '离我最近',
            icon: '',
            value: '1',
            selectIndex: 1
        }, {
            name: '评价最好',
            icon: '',
            value: '2',
            selectIndex: 2
        }]
    }]
}, {
    name: '筛选',
    icon: '',
    value: 'filter',
    type: 'filter',
    showTabHeader: false,
    defaultIcon: '',
    selectIcon: '',
    selectIndex: 0,
    tabs: [{
        icon: '',
        name: '价格',
        selectIndex: 0,
        detailList: [{
                name: '0-50',
                value: '0-50',
                selectIndex: -1
            }, {
                name: '50-100',
                value: '50-100',
                selectIndex: -1
            }, {
                name: '100-150',
                value: '100-150',
                selectIndex: -1
            },
            {
                name: '150-200',
                value: '150-200',
                selectIndex: -1
            }, {
                name: '200-250',
                value: '200-250',
                selectIndex: -1
            }, {
                name: '300-350',
                value: '300-350',
                selectIndex: -1
            }
        ]
    },{
        icon: '',
        name: '入住类型',
        selectIndex: 1,
        detailList: [{
                name: '不限',
                value: 'all',
                selectIndex: -1
            }, {
                name: '全日房',
                value: 'daily',
                selectIndex: -1
            }, {
                name: '钟点房',
                value: 'time',
                selectIndex: -1
            },
            {
                name: '支持团购',
                value: 'group buy',
                selectIndex: -1
            }
        ]
    }]
}]