var btntime = document.getElementById('btntime');
            var timer = document.getElementById('timeDisplay');
            btntime.onclick = function() {
                timer.innerHTML = getDate();
            }

            function getDate() {
                var data = new Date();
                var year = data.getFullYear();
                var month = data.getMonth() + 1;
                var datas = data.getDate();
                var arr = ['星期日', '星期一', '星期二', '星期三', '星期四', '星期五', '星期六'];
                var day = data.getDay();
                return '<strong>今天是:' + year + '年' + month + '月' + datas + '日 ' + arr[day] + '</strog>';
            }