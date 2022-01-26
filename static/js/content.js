var content = new Vue({
    el: "#contentBox",
    data: {
        url: "http://www.qq.com",
        imgSrc: ["/static/images/content/alpine-skiing.svg", "/static/images/content/biathlon.svg", "/static/images/content/bobsleigh.svg", "/static/images/content/curling.svg",
            "/static/images/content/figure-skating.svg", "/static/images/content/freestyle-skiing.svg", "/static/images/content/ice-hockey.svg", "/static/images/content/luge.svg", "/static/images/content/nordic-combined.svg",
            "/static/images/content/short-track.svg", "/static/images/content/skeleton.svg", "/static/images/content/jumping.svg", "/static/images/content/snowboard.svg", "/static/images/content/speed-skating.svg"
        ],
        nameSrc: ["高山滑雪", "冬季两项", "雪车", "冰壶", "花样滑冰", "自由式滑雪", "冰球", "雪橇", "北欧两项", "短道速滑", "钢架雪车", "跳台滑雪", "单板滑雪", "速度滑冰"],
        imgHref: ["https://olympics.com/zh/beijing-2022/sports/alpine-skiing/", "https://olympics.com/zh/beijing-2022/sports/biathlon/", "https://olympics.com/zh/beijing-2022/sports/bobsleigh/", "https://olympics.com/zh/beijing-2022/sports/curling/", "https://olympics.com/zh/beijing-2022/sports/figure-skating/",
            "https://olympics.com/zh/beijing-2022/sports/freestyle-skiing/", "https://olympics.com/zh/beijing-2022/sports/ice-hockey/", "https://olympics.com/zh/beijing-2022/sports/luge/", "https://olympics.com/zh/beijing-2022/sports/nordic-combined/", "https://olympics.com/zh/beijing-2022/sports/short-track-speed-skating/",
            "https://olympics.com/zh/beijing-2022/sports/skeleton/", "https://olympics.com/zh/beijing-2022/sports/ski-jumping/", "https://olympics.com/zh/beijing-2022/sports/snowboard/", "https://olympics.com/zh/beijing-2022/sports/speed-skating/"
        ]
    },
})