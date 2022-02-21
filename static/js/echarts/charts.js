(function() {
    var myChart = echarts.init(document.querySelector(".chart.bar"));
    option = {
        color: ["white"],
        tooltip: {
            trigger: 'axis',
            axisPointer: {
                type: 'shadow'
            }
        },
        grid: {
            top: '0%',
            left: '0%',
            right: '0%',
            bottom: '0%',
            containLabel: true
        },
        xAxis: [{
            type: 'category',
            data: ['陕西', '浙江', '四川', '黑龙江', '吉林', '河北', '北京', '新疆', '河南', '山西'],
            itemStyle: {
                color: '#000000',
            },
            axisTick: {
                alignWithLabel: true,
            },
            axisLabel: {
                color: "white"
            },
            axisLine: {
                lineStyle: {
                    color: "white"
                },
                color: "white"
            }
        }],
        yAxis: [{
            type: 'value',
            axisLabel: {
                color: "white"
            },
            axisLine: {
                lineStyle: {
                    color: "white"
                },
                color: "white"
            }
        }],
        series: [{
            name: 'Direct',
            type: 'bar',
            barWidth: '35%',
            data: [79, 94, 99, 149, 202, 221, 188, 133, 98, 79],
            itemStyle: {
                barBorderRadius: 5
            }
        }]
    };
    myChart.setOption(option);
    window.addEventListener("resize", function() {
        myChart.resize();
    });
})();

(function() {
    // 基于准备好的dom，初始化echarts实例
    var myChart = echarts.init(document.querySelector(".chart.charCloud"));

    // (1)准备数据

    // 2. 指定配置和数据
    let colorList = [
        '#CF4645', '#B580B2', '#29008A', '#146A90', '#8956FF', '#70C9A8',
        '#bfbfbf', '#595959',
        '#40a9ff', '#1890ff',
        '#ffd666', '#ffc53d', '#ffc53d', '#ffc069', '#ffa940', '#fa8c16',
        '#eccbd9', '#ffadad', '#ff6392', '#ffc09f', '#ffcb77', '#ffe066', '#ffd53e', '#ffda3d', '#adf7b6', '#a0e8af', '#80ed99', '#07beb8', '#17c3b2', '#48cae4', '#97d2fb', '#83bcff', '#91e5f6', '#9381ff'
    ]
    let colorListLen = colorList.length
    let fontSizeList = [
        12, 12.5, 13, 13.5, 14, 14.5,
        15, 15.5, 16, 16.5, 17, 17.5,
        18, 18.5, 19, 19.5, 20, 20.5,
        21, 22, 23,
        24
    ]
    let fontSizeListLen = fontSizeList.length
    let customLabel = {
        color: colorList[Math.floor(Math.random() * colorListLen)],
        fontSize: fontSizeList[Math.floor(Math.random() * fontSizeListLen)]
    }
    let bgColor = '#fffcf9'
    let canDraggable = false
    option = {
            //backgroundColor: '#fffcf9',
            color: ['#37A2DA', '#32C5E9', '#67E0E3'],
            title: {
                show: false,
                x: 'center',
                y: 'bottom',
                // 文字的颜色,默认 #333。
                color: '#666',
                fontSize: 24
            },
            toolbox: {
                show: true,
                feature: {
                    // dataView: {readOnly: false},
                    // magicType: {type: ['line', 'bar']},
                    restore: {},
                    // saveAsImage: {}
                }
            },
            itemStyle: {
                color: bgColor
            },
            series: [{
                type: 'graph',
                layout: 'force',
                force: {
                    repulsion: 80,
                    edgeLength: 10
                },
                roam: 'scale',
                // symbol: '',
                // symbolSize: 0,
                label: {
                    show: true,
                    color: 'auto',
                    fontSize: 14
                },
                data: [{
                        name: '高山滑雪',
                        value: 148,
                        draggable: canDraggable,
                        itemStyle: {
                            color: bgColor
                        },
                        label: {
                            color: colorList[Math.floor(Math.random() * colorListLen)],
                            fontSize: fontSizeList[Math.floor(Math.random() * fontSizeListLen)]
                        }
                    },
                    {
                        name: '冬季两项',
                        value: 25,
                        draggable: canDraggable,
                        itemStyle: {
                            color: bgColor
                        },
                        label: {
                            color: colorList[Math.floor(Math.random() * colorListLen)],
                            fontSize: fontSizeList[Math.floor(Math.random() * fontSizeListLen)]
                        }
                    },
                    {
                        name: '雪车',
                        value: 77,
                        draggable: canDraggable,
                        itemStyle: {
                            color: bgColor
                        },
                        label: {
                            color: colorList[Math.floor(Math.random() * colorListLen)],
                            fontSize: fontSizeList[Math.floor(Math.random() * fontSizeListLen)]
                        }
                    },
                    {
                        name: '冰壶',
                        value: 168,
                        draggable: canDraggable,
                        itemStyle: {
                            color: bgColor
                        },
                        label: {
                            color: colorList[Math.floor(Math.random() * colorListLen)],
                            fontSize: fontSizeList[Math.floor(Math.random() * fontSizeListLen)]
                        }
                    },
                    {
                        name: '花样滑冰',
                        value: 20,
                        draggable: canDraggable,
                        itemStyle: {
                            color: bgColor
                        },
                        label: {
                            color: colorList[Math.floor(Math.random() * colorListLen)],
                            fontSize: fontSizeList[Math.floor(Math.random() * fontSizeListLen)]
                        }
                    },
                    {
                        name: '自由式滑雪',
                        value: 37,
                        draggable: canDraggable,
                        itemStyle: {
                            color: bgColor
                        },
                        label: {
                            color: colorList[Math.floor(Math.random() * colorListLen)],
                            fontSize: fontSizeList[Math.floor(Math.random() * fontSizeListLen)]
                        }
                    },
                    {
                        name: '冰球',
                        value: 50,
                        draggable: canDraggable,
                        itemStyle: {
                            color: bgColor
                        },
                        label: {
                            color: colorList[Math.floor(Math.random() * colorListLen)],
                            fontSize: fontSizeList[Math.floor(Math.random() * fontSizeListLen)]
                        }
                    },
                    {
                        name: '雪橇',
                        value: 1,
                        draggable: canDraggable,
                        itemStyle: {
                            color: bgColor
                        },
                        label: {
                            color: colorList[Math.floor(Math.random() * colorListLen)],
                            fontSize: fontSizeList[Math.floor(Math.random() * fontSizeListLen)]
                        }
                    },
                    {
                        name: '北欧两项',
                        value: 59,
                        draggable: canDraggable,
                        itemStyle: {
                            color: bgColor
                        },
                        label: {
                            color: colorList[Math.floor(Math.random() * colorListLen)],
                            fontSize: fontSizeList[Math.floor(Math.random() * fontSizeListLen)]
                        }
                    },
                    {
                        name: '短道速滑',
                        value: 12,
                        draggable: canDraggable,
                        // itemStyle: {
                        //     color: bgColor
                        // },
                        label: {
                            color: colorList[Math.floor(Math.random() * colorListLen)],
                            fontSize: fontSizeList[Math.floor(Math.random() * fontSizeListLen)]
                        }
                    },
                    {
                        name: '钢架雪车',
                        value: 89,
                        draggable: canDraggable,
                        label: {
                            color: colorList[Math.floor(Math.random() * colorListLen)],
                            fontSize: fontSizeList[Math.floor(Math.random() * fontSizeListLen)]
                        }
                    },
                    {
                        name: '跳台滑雪',
                        value: 7,
                        draggable: canDraggable,
                        label: {
                            color: colorList[Math.floor(Math.random() * colorListLen)],
                            fontSize: fontSizeList[Math.floor(Math.random() * fontSizeListLen)]
                        }
                    },
                    {
                        name: '单板滑雪',
                        value: 69,
                        draggable: canDraggable,
                        label: {
                            color: colorList[Math.floor(Math.random() * colorListLen)],
                            fontSize: fontSizeList[Math.floor(Math.random() * fontSizeListLen)]
                        }
                    },
                    {
                        name: '速度滑冰',
                        value: 4,
                        draggable: canDraggable,
                        label: {
                            color: colorList[Math.floor(Math.random() * colorListLen)],
                            fontSize: fontSizeList[Math.floor(Math.random() * fontSizeListLen)]
                        }
                    }
                ]
            }]
        }
        // 3. 把配置和数据给实例对象
    myChart.setOption(option);

    myChart.on('click', function(params) {
        var nameSrc = ["高山滑雪", "冬季两项", "雪车", "冰壶", "花样滑冰", "自由式滑雪", "冰球", "雪橇", "北欧两项", "短道速滑", "钢架雪车", "跳台滑雪", "单板滑雪", "速度滑冰"];
        var imgHref = ["https://olympics.com/zh/beijing-2022/sports/alpine-skiing/", "https://olympics.com/zh/beijing-2022/sports/biathlon/", "https://olympics.com/zh/beijing-2022/sports/bobsleigh/", "https://olympics.com/zh/beijing-2022/sports/curling/", "https://olympics.com/zh/beijing-2022/sports/figure-skating/",
            "https://olympics.com/zh/beijing-2022/sports/freestyle-skiing/", "https://olympics.com/zh/beijing-2022/sports/ice-hockey/", "https://olympics.com/zh/beijing-2022/sports/luge/", "https://olympics.com/zh/beijing-2022/sports/nordic-combined/", "https://olympics.com/zh/beijing-2022/sports/short-track-speed-skating/",
            "https://olympics.com/zh/beijing-2022/sports/skeleton/", "https://olympics.com/zh/beijing-2022/sports/ski-jumping/", "https://olympics.com/zh/beijing-2022/sports/snowboard/", "https://olympics.com/zh/beijing-2022/sports/speed-skating/"
        ];
        for (var i = 0; i < 14; i++) {
            if (params.name == nameSrc[i]) location.href = imgHref[i];
        }
    });
    // 重新把配置好的新数据给实例对象
    window.addEventListener("resize", function() {
        myChart.resize();
    });

})();

(function() {
    var myChart = echarts.init(document.querySelector(".chart.line"));
    var option = {
        color: ["skyblue", "white", "yellow", "red", "pink"],
        tooltip: {
            trigger: 'axis'
        },
        grid: {
            left: '0%',
            right: '0%',
            bottom: '0%',
            top: '0%',
            containLabel: true
        },
        toolbox: {
            feature: {
                saveAsImage: {}
            }
        },
        xAxis: {
            type: 'category',
            boundaryGap: false,
            data: ['2016', '2017', '2018', '2019', '2020', '2021'],
            axisLabel: {
                color: 'white'
            },
            axisLine: {
                lineStyle: {
                    color: "white"
                },
                color: "white"
            }
        },
        yAxis: {
            type: 'value',
            axisLabel: {
                color: 'white'
            },
            axisLine: {
                lineStyle: {
                    color: "white"
                },
                color: "white"
            }
        },

        series: [{
                name: '架空索道滑雪场数量',
                type: 'line',
                stack: 'Total',
                data: [109, 125, 145, 149, 155, 159]
            },
            {
                name: '滑雪场数量',
                type: 'line',
                stack: 'Total',
                data: [568, 646, 703, 742, 770, 715]
            },
            {
                name: '滑雪场人次（万人）',
                type: 'line',
                stack: 'Total',
                data: [1445, 1690, 1915, 2060, 1045, 2076]
            }
        ]
    };
    myChart.setOption(option);
    window.addEventListener("resize", function() {
        myChart.resize();
    });
})();

(function() {
    var myChart = echarts.init(document.querySelector(".chart.pie"));
    option = {
        legend: {
            top: 'right'
        },
        grid: {
            left: '0%',
            right: '0%',
            bottom: '0%',
            top: '00%',
            containLabel: false
        },
        toolbox: {
            show: true,
            feature: {
                mark: { show: true },
                dataView: { show: true, readOnly: false },
                restore: { show: true },
                saveAsImage: { show: true }
            }
        },
        series: [{
            name: 'Nightingale Chart',
            type: 'pie',
            radius: [20, 80],
            center: ['50%', '50%'],
            roseType: 'area',
            itemStyle: {
                borderRadius: 11,
            },
            data: [
                { value: 11, name: '吉林', itemStyle: { color: "white" } },
                { value: 7, name: '黑龙江' },
                { value: 6, name: '上海', itemStyle: { color: "orange" } },
                { value: 5, name: '新疆', itemStyle: { color: "yellow" } },
                { value: 4, name: '山东' },
                { value: 4, name: '江苏' },
                { value: 3, name: '安徽' },
                { value: 6, name: '其他' },
                { value: 22, name: '北京', itemStyle: { color: "skyblue" } },
                { value: 18, name: '河北' },
                { value: 14, name: '辽宁' },

            ]
        }]
    };
    myChart.setOption(option);
    window.addEventListener("resize", function() {
        myChart.resize();
    });
})();

(function() {
    var chartDom = document.querySelector(".chart.query");
    var myChart = echarts.init(chartDom);
    var option;

    const data = [];
    for (let i = 0; i <= 360; i++) {
        let t = (i / 180) * Math.PI;
        let r = Math.sin(2 * t) * Math.cos(2 * t);
        data.push([r, i]);
    }
    option = {
        tooltip: {
            trigger: 'axis',
            axisPointer: {
                type: 'shadow'
            }
        },
        // legend: {
        //     show: false
        // },
        grid: {
            left: '0%',
            right: '0%',
            bottom: '0%',
            top: '0%',
            containLabel: true
        },
        xAxis: {
            type: 'value',
            boundaryGap: [0, 0.01],
            axisLabel: {
                color: 'white'
            },
            axisLine: {
                lineStyle: {
                    color: "white"
                },
                color: "white"
            }
        },
        yAxis: {
            type: 'category',
            data: ['室内滑雪', '户外滑雪', '雪道面积>30公顷', '垂直落差>300米', '总滑雪场'],
            axisLabel: {
                color: 'white'
            },
            axisLine: {
                lineStyle: {
                    color: "white"
                },
                color: "white"
            }
        },
        series: [{
                name: '2021',
                type: 'bar',
                data: [321, 1755, 500, 371, 2076],
                itemStyle: {
                    color: "skyblue"
                }
            },
            {
                name: '2021',
                type: 'bar',
                data: [269, 1019, 318, 234, 1288],
                itemStyle: {
                    color: '#0fe492',
                }
            }
        ]
    };

    option && myChart.setOption(option);
    window.addEventListener("resize", function() {
        myChart.resize();
    });

})();

(function() {
    var myChart = echarts.init(document.querySelector(".chart.radar"));
    var option;
    // Schema:
    // date,AQIindex,PM2.5,PM10,CO,NO2,SO2
    const dataBJ = [
        [55, 9, 56, 0.46, 18, 6, 1],
        [25, 11, 21, 0.65, 34, 9, 2],
        [56, 7, 63, 0.3, 14, 5, 3],
        [33, 7, 29, 0.33, 16, 6, 4],
        [42, 24, 44, 0.76, 40, 16, 5],
        [82, 58, 90, 1.77, 68, 33, 6],
        [74, 49, 77, 1.46, 48, 27, 7],
        [78, 55, 80, 1.29, 59, 29, 8],
        [267, 216, 280, 4.8, 108, 64, 9],
        [185, 127, 216, 2.52, 61, 27, 10],
        [39, 19, 38, 0.57, 31, 15, 11],
        [41, 11, 40, 0.43, 21, 7, 12],
        [64, 38, 74, 1.04, 46, 22, 13],
        [108, 79, 120, 1.7, 75, 41, 14],
        [108, 63, 116, 1.48, 44, 26, 15],
        [33, 6, 29, 0.34, 13, 5, 16],
        [94, 66, 110, 1.54, 62, 31, 17],
        [186, 142, 192, 3.88, 93, 79, 18],
        [57, 31, 54, 0.96, 32, 14, 19],
        [22, 8, 17, 0.48, 23, 10, 20],
        [39, 15, 36, 0.61, 29, 13, 21],
        [94, 69, 114, 2.08, 73, 39, 22],
        [99, 73, 110, 2.43, 76, 48, 23],
        [31, 12, 30, 0.5, 32, 16, 24],
        [42, 27, 43, 1, 53, 22, 25],
        [154, 117, 157, 3.05, 92, 58, 26],
        [234, 185, 230, 4.09, 123, 69, 27],
        [160, 120, 186, 2.77, 91, 50, 28],
        [134, 96, 165, 2.76, 83, 41, 29],
        [52, 24, 60, 1.03, 50, 21, 30],
        [46, 5, 49, 0.28, 10, 6, 31]
    ];
    const dataZJK = [
        [26, 37, 27, 1.163, 27, 13, 1],
        [85, 62, 71, 1.195, 60, 8, 2],
        [78, 38, 74, 1.363, 37, 7, 3],
        [21, 21, 36, 0.634, 40, 9, 4],
        [41, 42, 46, 0.915, 81, 13, 5],
        [56, 52, 69, 1.067, 92, 16, 6],
        [64, 30, 28, 0.924, 51, 2, 7],
        [55, 48, 74, 1.236, 75, 26, 8],
        [76, 85, 113, 1.237, 114, 27, 9],
        [91, 81, 104, 1.041, 56, 40, 10],
        [84, 39, 60, 0.964, 25, 11, 11],
        [64, 51, 101, 0.862, 58, 23, 12],
        [70, 69, 120, 1.198, 65, 36, 13],
        [77, 105, 178, 2.549, 64, 16, 14],
        [109, 68, 87, 0.996, 74, 29, 15],
        [73, 68, 97, 0.905, 51, 34, 16],
        [54, 27, 47, 0.592, 53, 12, 17],
        [51, 61, 97, 0.811, 65, 19, 18],
        [91, 71, 121, 1.374, 43, 18, 19],
        [73, 102, 182, 2.787, 44, 19, 20],
        [73, 50, 76, 0.717, 31, 20, 21],
        [84, 94, 140, 2.238, 68, 18, 22],
        [93, 77, 104, 1.165, 53, 7, 23],
        [99, 130, 227, 3.97, 55, 15, 24],
        [146, 84, 139, 1.094, 40, 17, 25],
        [113, 108, 137, 1.481, 48, 15, 26],
        [81, 48, 62, 1.619, 26, 3, 27],
        [56, 48, 68, 1.336, 37, 9, 28],
        [82, 92, 174, 3.29, 0, 13, 29],
        [106, 116, 188, 3.628, 101, 16, 30],
        [118, 50, 0, 1.383, 76, 11, 31]
    ];
    const dataSH = [
        [91, 45, 125, 0.82, 34, 23, 1],
        [65, 27, 78, 0.86, 45, 29, 2],
        [83, 60, 84, 1.09, 73, 27, 3],
        [109, 81, 121, 1.28, 68, 51, 4],
        [106, 77, 114, 1.07, 55, 51, 5],
        [109, 81, 121, 1.28, 68, 51, 6],
        [106, 77, 114, 1.07, 55, 51, 7],
        [89, 65, 78, 0.86, 51, 26, 8],
        [53, 33, 47, 0.64, 50, 17, 9],
        [80, 55, 80, 1.01, 75, 24, 10],
        [117, 81, 124, 1.03, 45, 24, 11],
        [99, 71, 142, 1.1, 62, 42, 12],
        [95, 69, 130, 1.28, 74, 50, 13],
        [116, 87, 131, 1.47, 84, 40, 14],
        [108, 80, 121, 1.3, 85, 37, 15],
        [134, 83, 167, 1.16, 57, 43, 16],
        [79, 43, 107, 1.05, 59, 37, 17],
        [71, 46, 89, 0.86, 64, 25, 18],
        [97, 71, 113, 1.17, 88, 31, 19],
        [84, 57, 91, 0.85, 55, 31, 20],
        [87, 63, 101, 0.9, 56, 41, 21],
        [104, 77, 119, 1.09, 73, 48, 22],
        [87, 62, 100, 1, 72, 28, 23],
        [168, 128, 172, 1.49, 97, 56, 24],
        [65, 45, 51, 0.74, 39, 17, 25],
        [39, 24, 38, 0.61, 47, 17, 26],
        [39, 24, 39, 0.59, 50, 19, 27],
        [93, 68, 96, 1.05, 79, 29, 28],
        [188, 143, 197, 1.66, 99, 51, 29],
        [174, 131, 174, 1.55, 108, 50, 30],
        [187, 143, 201, 1.39, 89, 53, 31]
    ];
    const lineStyle = {
        width: 1,
        opacity: 0.5
    };
    option = {
        // backgroundColor: '#161627',
        // title: {
        //     text: 'AQI - Radar',
        //     left: 'center',
        //     textStyle: {
        //         color: '#eee'
        //     }
        // },
        legend: {
            bottom: 5,
            data: ['北京', '张家口', '上海'],
            itemGap: 20,
            textStyle: {
                color: '#fff',
                fontSize: 14
            },
            selectedMode: 'single'
        },
        grid: {
            left: '3%',
            right: '3%',
            bottom: '3%',
            top: '4%',
            containLabel: true
        },
        radar: {
            indicator: [
                { name: 'AQI', max: 300 },
                { name: '冬季持续时间', max: 250 },
                { name: '纬度', max: 300 },
                { name: '降雪量', max: 5 },
                { name: '气温', max: 200 },
                { name: '地形', max: 100 }
            ],
            shape: 'circle',
            splitNumber: 5,
            axisName: {
                color: 'rgb(0, 197, 102)'
            },
            splitLine: {
                lineStyle: {
                    color: [
                        'rgba(238, 197, 102, 0.1)',
                        'rgba(238, 197, 102, 0.2)',
                        'rgba(238, 197, 102, 0.4)',
                        'rgba(238, 197, 102, 0.6)',
                        'rgba(238, 197, 102, 0.8)',
                        'rgba(238, 197, 102, 1)'
                    ].reverse()
                }
            },
            splitArea: {
                show: false
            },
            axisLine: {
                lineStyle: {
                    color: 'rgba(238, 197, 102, 0.5)'
                }
            }
        },
        series: [{
                name: '北京',
                type: 'radar',
                lineStyle: lineStyle,
                data: dataBJ,
                symbol: 'none',
                itemStyle: {
                    color: '#F9713C'
                },
                areaStyle: {
                    opacity: 0.1
                }
            },
            {
                name: '张家口',
                type: 'radar',
                lineStyle: lineStyle,
                data: dataZJK,
                symbol: 'none',
                itemStyle: {
                    color: '#B3E4A1'
                },
                areaStyle: {
                    opacity: 0.05
                }
            },
            {
                name: '上海',
                type: 'radar',
                lineStyle: lineStyle,
                data: dataSH,
                symbol: 'none',
                itemStyle: {
                    color: 'rgb(238, 197, 102)'
                },
                areaStyle: {
                    opacity: 0.05
                }
            }
        ]
    };

    option && myChart.setOption(option);
    window.addEventListener("resize", function() {
        myChart.resize();
    });
})();