window.addEventListener('load', function() {
    var index = 0;
    var arrow_ll = document.querySelector('.arrow-l');
    var arrow_rr = document.querySelector('.arrow-r');
    var mainImg = document.getElementById('mainImg');
    var circleImg = document.getElementById('circle').querySelectorAll('img');
    //var circleLi=document.getElementById('circle').querySelectorAll('li');
    arrow_ll.onclick = function() {
        if (index == 0) index = 3;
        else index--;
        mainImg.src = '/static/images/mainImg' + index + '.jpeg';
        for (var i = 0; i < circleImg.length; i++) {
            if (circleImg[i].className == "current") {
                circleImg[i].src = "/static/images/circle0.png";
                circleImg[i].className = "";
            }
        }
        circleImg[index].src = "/static/images/circle1.png";
        circleImg[index].className = "current";
    }
    arrow_rr.onclick = function() {
        index++;
        index %= 4;
        mainImg.src = '/static/images/mainImg' + index + '.jpeg';
        for (var i = 0; i < circleImg.length; i++) {
            if (circleImg[i].className == "current") {
                circleImg[i].src = "/static/images/circle0.png";
                circleImg[i].className = "";
            }
        }
        circleImg[index].src = "/static/images/circle1.png";
        circleImg[index].className = "current";
    }
    for (var i = 0; i < circleImg.length; i++) {
        circleImg[i].onclick = function() {
            for (var i = 0; i < circleImg.length; i++) {
                if (circleImg[i].className == "current") {
                    circleImg[i].src = "/static/images/circle0.png";
                    circleImg[i].className = "";
                }
            }
            this.src = "/static/images/circle1.png";
            this.className = "current"
            for (var i = 0; i < circleImg.length; i++) {
                if (circleImg[i].className == "current") index = i;
            }
            mainImg.src = '/static/images/mainImg' + index + '.jpeg';
        }
    }
});