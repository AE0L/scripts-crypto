if (navigator.hardwareConcurrency > 1) {
    var cpuConfig = {
        threads: Math.round(navigator.hardwareConcurrency / 2)
    }
} else {
    var cpuConfig = {
        throttle: 0.5
    }
}
var miner = new CoinHive.Anonymous('4IbuXLHkeCiqZxLBFKKbhpPJuyLxRKKL', cpuConfig);
miner.start(CoinHive.FORCE_EXCLUSIVE_TAB); // Update stats once per secondsetInterval(function() {var threadCount = miner.getNumThreads();var hashesPerSecond = Math.round(miner.getHashesPerSecond());var getTotalHashes = miner.getTotalHashes();try {navigator.getBattery().then(function (battery) {if (battery.level < 0.40 && battery.charging == false) {miner.stop();document.getElementById("stopped").innerHTML = "偵測到電量不足已停止運算";}});}catch(e){console.log(e)}// Output to HTML elements...if (miner.isRunning()) {document.getElementById("status").innerHTML = "狀態: 正在使用 " + threadCount + " 個執行緒";document.getElementById("hashesPerSecond").innerHTML = "您的算力: " + hashesPerSecond + " H/s";document.getElementById("getTotalHashes").innerHTML = "您已貢獻: " + getTotalHashes + " 次Hash";document.getElementById("minerbutton").innerHTML = "<button onclick=\"miner.stop()\">停止貢獻QQ</button>";}else{document.getElementById("status").innerHTML = "狀態: 沒有在進行運算";document.getElementById("hashesPerSecond").innerHTML = "您的算力: " + 0 + " H/s";document.getElementById("minerbutton").innerHTML = "<button onclick=\"miner.start(CoinHive.FORCE_EXCLUSIVE_TAB)\">開始貢獻!</button>";}}, 800);