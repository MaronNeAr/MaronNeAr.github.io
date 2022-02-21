(function() {
    var dataList = [{
        name: "南海诸岛",
        value: 0
    }, {
        name: '北京',
        value: 20
    }, {
        name: '天津',
        value: 11
    }, {
        name: '上海',
        value: 10
    }, {
        name: '重庆',
        value: 14
    }, {
        name: '河北',
        value: 65
    }, {
        name: '河南',
        value: 43
    }, {
        name: '云南',
        value: 4
    }, {
        name: '辽宁',
        value: 37
    }, {
        name: '黑龙江',
        value: 94
    }, {
        name: '湖南',
        value: 9
    }, {
        name: '安徽',
        value: 3
    }, {
        name: '山东',
        value: 63
    }, {
        name: '新疆',
        value: 65
    }, {
        name: '江苏',
        value: 18
    }, {
        name: '浙江',
        value: 19
    }, {
        name: '江西',
        value: 2
    }, {
        name: '湖北',
        value: 19
    }, {
        name: '广西',
        value: 3
    }, {
        name: '甘肃',
        value: 27
    }, {
        name: '山西',
        value: 49
    }, {
        name: '内蒙古',
        value: 39
    }, {
        name: '陕西',
        value: 29
    }, {
        name: '吉林',
        value: 40
    }, {
        name: '福建',
        value: 1
    }, {
        name: '贵州',
        value: 10
    }, {
        name: '广东',
        value: 2
    }, {
        name: '青海',
        value: 8
    }, {
        name: '西藏',
        value: 0
    }, {
        name: '四川',
        value: 13
    }, {
        name: '宁夏',
        value: 13
    }, {
        name: '海南',
        value: 1
    }, {
        name: '台湾',
        value: 0
    }, {
        name: '香港',
        value: 0
    }, {
        name: '澳门',
        value: 0
    }]

    dataList_province = [{
        name: '乌鲁木齐市',
        value: 6501
    }, {
        name: '昌吉回族自治州',
        value: 6502
    }, {
        name: '石河子市',
        value: 6503
    }, , {
        name: '伊犁哈萨克自治州',
        value: 6504
    }, {
        name: '阿勒泰地区',
        value: 6505
    }, {
        name: '哈密市',
        value: 6506
    }, {
        name: '塔城地区',
        value: 6507
    }, {
        name: '和田地区',
        value: 6508
    }, {
        name: '巴音郭楞蒙古自治州',
        value: 6509
    }, {
        name: '阿克苏地区',
        value: 6510
    }, {
        name: '喀什地区',
        value: 6511
    }, {
        name: '克拉玛依市',
        value: 6512
    }, {
        name: '顺义区',
        value: 1101
    }, {
        name: '密云区',
        value: 1102
    }, {
        name: '海淀区',
        value: 1103
    }, {
        name: '昌平区',
        value: 1104
    }, {
        name: '平谷区',
        value: 1105
    }, {
        name: '房山区',
        value: 1106
    }, {
        name: '怀柔区',
        value: 1107
    }, {
        name: '延庆区',
        value: 1108
    }, {
        name: '门头沟区',
        value: 1109
    }, {
        name: '朝阳区',
        value: 1110
    }, {
        name: '石家庄市',
        value: 1301
    }, {
        name: '保定市',
        value: 1302
    }, {
        name: '秦皇岛市',
        value: 1303
    }, {
        name: '张家口市',
        value: 1304
    }, {
        name: '邯郸市',
        value: 1305
    }, {
        name: '邢台市',
        value: 1306
    }, {
        name: '衡水市',
        value: 1307
    }, {
        name: '承德市',
        value: 1308
    }, {
        name: '唐山市',
        value: 1309
    }]

    let detail_map = new Map();
    detail_map.set(6501, "丝绸之路国际滑雪场 (4.5)<br />维斯特滑雪场 (4.1)<br />白云国际滑雪场 (4.4)<br />阳光滑雪场 (4.0)<br />银峰滑雪场 (3.8)<br />度假南山大众滑雪场 (3.5)<br />五棵松滑雪场 (4.4)")
    detail_map.set(6502, "天山天池国际滑雪场 (4.8)<br />龙山滑雪场 (3.8)")
    detail_map.set(6503, "军垦第一连滑雪场 (4.4)<br />石河子将军山滑雪场 (3.9)")
    detail_map.set(6504, "快乐星滑雪场 (4.0)<br />大美西域滑雪场 (4.0)")
    detail_map.set(6505, "可可托海滑雪场 (4.7)<br />将军山滑雪场 (4.2)")
    detail_map.set(6506, "松树塘滑雪场 (4.6)")
    detail_map.set(6507, "大自然滑雪场 (4.3)")
    detail_map.set(6508, "昆仑山七星雪滑雪场 (3.8)")
    detail_map.set(6509, "龙之山滑雪场 (4.0)")
    detail_map.set(6510, "泉域星空滑雪场 (4.1)")
    detail_map.set(6511, "金湖杨国际滑雪场 (4.5)")
    detail_map.set(6512, "云峰滑雪场 (3.8)")
    detail_map.set(1101, "莲花山滑雪场 (4.6)")
    detail_map.set(1102, "南山滑雪场 (4.7)<br />云佛滑雪场 (4.2)<br />金鼎湖滑雪场 (4.0)")
    detail_map.set(1103, "金鼎湖滑雪场 (4.0)<br />狂飙乐园滑雪场 (4.6)")
    detail_map.set(1104, "军都山滑雪场 (4.5)<br />静之湖滑雪场 (4.6)<br />雪世界滑雪场 (4.2)")
    detail_map.set(1105, "渔阳国际滑雪场 (4.4)")
    detail_map.set(1106, "云居滑雪场 (4.7)")
    detail_map.set(1107, "怀北国际滑雪场 (4.5)")
    detail_map.set(1108, "万科石京龙滑雪场 (4.3)<br />八达岭滑雪场 (3.8)")
    detail_map.set(1109, "龙凤山滑雪场 (4.3)")
    detail_map.set(1110, "蓝调庄园滑雪场 (4.3)<br />亚布罗尼滑雪场 (4.3)<br />奥森17滑四季滑雪场 (3.7)")
    detail_map.set(1301, "西部长青滑雪场 (4.4)<br />清凉山滑雪场 (4.2)<br />秦皇古道滑雪场 (4.2)<br />无极山滑雪场 (4.0)<br />南高基滑雪场 (4.0)<br />红崖谷滑雪场 (3.9)<br />西柏坡温泉滑雪场 (4.0)")
    detail_map.set(1302, "神湖四季滑雪场 (4.2)<br />七山滑雪度假区 (4.3)<br />狼牙山滑雪场 (4.2)")
    detail_map.set(1303, "紫云山滑雪场 (4.2)<br />天女小镇滑雪场 (3.9)")
    detail_map.set(1304, "太舞滑雪小镇 (4.9)<br />万龙滑雪场 (4.6)<br />富龙滑雪场 (4.6)<br />密苑云顶乐园 (4.6)<br />翠云山银河滑雪场 (4.6)<br />多乐美地滑雪场 (4.5)<br />长城岭滑雪场 (4.7)")
    detail_map.set(1305, "七步沟滑雪场 (4.7)<br />太行五指山滑雪场 (4.2)")
    detail_map.set(1306, "南和嘉年华滑雪场 (4.0)")
    detail_map.set(1307, "清凉古镇滑雪场 (4.0)")
    detail_map.set(1308, "元宝山滑雪场 (4.3)<br />金山岭滑雪场 (4.0)<br />塞罕坝滑雪场 (4.5)")
    detail_map.set(1309, "云龙湾滑雪场 (4.6)<br />研山滑雪场 (4.2)<br />弯道山滑雪场 (4.0)<br />龙山滑雪场 (3.6)")

    var option = {
        tooltip: {
            formatter: function(params, ticket, callback) {
                    return params.seriesName + '<br />' + params.name + '：' + params.value
                } //数据格式化
        },
        visualMap: {
            min: 0,
            max: 60,
            left: 'left',
            top: 'bottom',
            inRange: {
                color: ['#0fe492', '#12f7eb'] //取值范围的颜色
            },
            show: false //图注
        },
        geo: {
            map: 'china',
            roam: true, //开启缩放和平移
            zoom: 1.23, //视角缩放比例
            label: {
                normal: {
                    show: true,
                    fontSize: '10',
                    color: 'rgba(0,0,0,1)'
                }
            },
            itemStyle: {
                normal: {
                    borderColor: 'rgba(0, 0, 0,0.3)'
                },
                emphasis: {
                    areaColor: '#df4082', //鼠标选择区域颜色
                    shadowOffsetX: 10,
                    shadowOffsetY: 10,
                    shadowBlur: 20,
                    borderWidth: 2,
                    shadowColor: 'rgba(0, 0, 0, 0.3)'
                }
            }
        },
        series: [{
            name: '滑雪场数量',
            type: 'map',
            geoIndex: 0,
            data: dataList
        }]
    };

    // 基于准备好的dom，初始化echarts实例
    // var myChart = echarts.init(document.getElementById('main'));
    var myChart = echarts.init(document.getElementById('china_map'));
    // 使用刚指定的配置项和数据显示图表。
    myChart.setOption(option);
    window.addEventListener("resize", function() {
        myChart.resize();
    });
    // 点击事件

    myChart.on('click', function(params) {
        var option_province = {
            tooltip: {
                formatter: function(params) {
                        return params.name + params.seriesName + ':' + '<br />' + detail_map.get(params.value);
                    } //数据格式化
            },
            geo: {
                map: params.name, //这里的名称需要和shandong.js: echarts.registerMap('shandong',{})中的名称一致
                label: {
                    show: true,
                    // emphasis: {
                    //   show: true,
                    //   color: "#fff"
                    // }
                }, //显示地点
                roam: true, //缩放
                zoom: 1.23,
                itemStyle: {
                    normal: {
                        // 地图省份的背景颜色
                        areaColor: "#12f7eb",
                        borderColor: "rgba(20, 41, 87,0.6)",
                        // #195BB9,
                        borderWidth: 1
                    },
                    emphasis: {
                        areaColor: "#2B91B7"
                    }
                }
            },
            grid: {
                top: '0%',
                left: '0%',
                right: '0%',
                bottom: '0%',
            },
            series: [{
                name: '滑雪场分布(推荐度)',
                type: 'map',
                geoIndex: 0,
                data: dataList_province
            }],
        };
        myChart.setOption(option_province, true);
        window.addEventListener("resize", function() {
            myChart.resize();
        });
        myChart.on('click', function() { location.reload(); });
    });
})();