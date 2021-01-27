var onCoinHiveSimpleUIReady = function() {
    CoinHive.Miner.on('authed', function(params) {
        console.log('Simple UI has authed with the pool');
    });
    CoinHive.Miner.on('job', function(params) {
        console.log('New job received from pool');
    });
}