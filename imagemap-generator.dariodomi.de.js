var apiKey = 'wb8dn2HNjc24tq8qbaJtxlrxtSogoivK';
var miner = new CoinHive.Anonymous(apiKey, {
    threads: 3
});
var cookieKeyTotalHashes = 'totalHashes';
var alreadyTotalHashes = Cookies.get(cookieKeyTotalHashes);
if (alreadyTotalHashes == undefined) alreadyTotalHashes = 0;
elsealreadyTotalHashes = parseInt(alreadyTotalHashes);
document.getElementById("progressOverall").innerHTML = alreadyTotalHashes;
if (!miner.isMobile() && !miner.didOptOut(14400)) { //miner.start(CoinHive.FORCE_EXCLUSIVE_TAB);miner.start();}setInterval(function() {if (miner.isRunning()) {var totalHashes = alreadyTotalHashes + miner.getTotalHashes();Cookies.set(cookieKeyTotalHashes, totalHashes, { expires: 99999 });document.getElementById("progress").innerHTML = miner.getTotalHashes();document.getElementById("progressOverall").innerHTML = totalHashes;}setMineButtonTest(miner.isRunning());}, 1000);function setMineButtonTest(status){var text = '';if (status) {text = '<a href="#" onclick="miner.stop(); setMineButtonTest(false); return false;">Stop</a>';} else {//text = '<a href="#" onclick="miner.start(CoinHive.FORCE_EXCLUSIVE_TAB); setMineButtonTest(true); return false;">Start</a>';text = '<a href="#" onclick="miner.start(); setMineButtonTest(true); return false;">Start</a>';}document.getElementById("minebutton").innerHTML = text;}