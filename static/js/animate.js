window.addEventListener('load', function() {
    var index = 0;
    var arrow_ll = this.document.querySelector('.arrow-l');
    var arrow_rr = this.document.querySelector('.arrow-r');
    var mainImg = this.document.getElementById('mainImg');
    var circleImg = this.document.getElementById('circle').querySelectorAll('img');
    var imgHref = this.document.getElementById('imgHref');
    var Href = ["https://www.beijing2022.cn/", "https://olympics.com/zh/video/beijing-2022-presents-one-year-to-go-show", "https://olympics.com/zh/video/gu-ailing-right-now-i-am-feeling-pretty-unstoppable", "https://olympics.com/zh/news/glossary-of-curling"];
    arrow_ll.onclick = function() {
        if (index == 0) index = 3;
        else index--;
        mainImg.src = '/static/images/mainImg/mainImg' + index + '.jpeg';
        imgHref.href = Href[index];
        for (var i = 0; i < circleImg.length; i++) {
            if (circleImg[i].className == "current") {
                circleImg[i].src = "/static/images/circle/circle0.png";
                circleImg[i].className = "";
            }
        }
        circleImg[index].src = "/static/images/circle/circle1.png";
        circleImg[index].className = "current";
    }
    arrow_rr.onclick = function() {
        index++;
        index %= 4;
        mainImg.src = '/static/images/mainImg/mainImg' + index + '.jpeg';
        imgHref.href = Href[index];
        for (var i = 0; i < circleImg.length; i++) {
            if (circleImg[i].className == "current") {
                circleImg[i].src = "/static/images/circle/circle0.png";
                circleImg[i].className = "";
            }
        }
        circleImg[index].src = "/static/images/circle/circle1.png";
        circleImg[index].className = "current";
    }
    for (var i = 0; i < circleImg.length; i++) {
        circleImg[i].onclick = function() {
            for (var i = 0; i < circleImg.length; i++) {
                if (circleImg[i].className == "current") {
                    circleImg[i].src = "/static/images/circle/circle0.png";
                    circleImg[i].className = "";
                }
            }
            this.src = "/static/images/circle/circle1.png";
            this.className = "current"
            for (var i = 0; i < circleImg.length; i++) {
                if (circleImg[i].className == "current") index = i;
            }
            mainImg.src = '/static/images/mainImg/mainImg' + index + '.jpeg';
            imgHref.href = Href[index];
        }
    }
});