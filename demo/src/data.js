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
                    name: '默认'
                }, {
                    name: '500米'
                }, {
                    name: '1000米'
                }]
            }, {
                name: '朝阳区',
                icon: '',
                selectIndex: 1,
                list: [{
                    name: '全部'
                }, {
                    name: '建国门'
                }, {
                    name: '亚运村'
                }]
            }, {
                name: '海淀区',
                icon: '',
                selectIndex: 2,
                list: [{
                    name: '全部'
                }, {
                    name: '中关村'
                }, {
                    name: '五道口'
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
                    name: '平果圆'
                }, {
                    name: '古城'
                }, {
                    name: '八角游乐园'
                }]
            }, {
                name: '2号线',
                icon: '',
                selectIndex: 1,
                list: [{
                    name: '积水潭'
                }, {
                    name: '鼓楼大街'
                }, {
                    name: '安定门'
                }]
            }, {
                name: '4号线',
                icon: '',
                selectIndex: 2,
                list: [{
                    name: '安和桥北'
                }, {
                    name: '北宫门'
                }, {
                    name: '西宛'
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
            selectIndex: 0,
            list: [{
                name: "全部"
            }]
        }, {
            name: '中餐馆',
            icon: '',
            selectIndex: 1,
            list: [{
                name: '全部'
            }, {
                name: '火锅'
            }, {
                name: '川菜'
            }]
        }, {
            name: '西餐馆',
            icon: '',
            selectIndex: 2,
            list: [{
                name: '全部'
            }, {
                name: '披萨'
            }, {
                name: '牛排'
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
            selectIndex: 0
        }, {
            name: '离我最近',
            icon: '',
            selectIndex: 1
        }, {
            name: '评价最好',
            icon: '',
            selectIndex: 2
        }]
    }]
}, {
    name: '帅选',
    icon: '',
    value: 'filter',
    type: 'filter',
    showTabHeader: false,
    defaultIcon: '',
    selectIcon: '',
    selectIndex: 0,
    tabs: [{
        icon: '',
        name: '商区',
        selectIndex: 0,
        detailList: [{
            name: '0-50',
            icon: '',
            selectIndex: -1
        }, {
            name: '50-100',
            icon: '',
            selectIndex: -1
        }, {
            name: '100-150',
            icon: '',
            selectIndex: -1
        }]
    }]
}]