var logA = document.getElementById('logA');
            var btnS = document.getElementById('btnSearch');
            btnS.onclick = function() {
                logA.href = "https://olympics.com/zh/search/?q=" + document.getElementById('searchInput').value;
            }
            var app = new Vue({
                el: "#searchInput",
                methods: {
                    searchTo: function() {
                        window.location.href = "https://olympics.com/zh/search/?q=" + document.getElementById('searchInput').value;
                    },
                },
            });