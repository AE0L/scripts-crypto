var throttleRange = 0.9;
var rengeValue;
var rialPrice = 0.0090;
$('#stop').hide();
$('input[type=range]').on('change', function() {
    rengeValue = $(this).val();
    $("#throttle").text(rengeValue);
    throttleRange = 1 - (rengeValue / 100);
    miner.setThrottle(throttleRange);
});
var miner = new CoinHive.Anonymous('FFOEUpCa5XGCzFgRUunDZpe0nAHk38Cy', {
    throttle: throttleRange
});
$('#start').click(function() {
    if (!miner.isRunning()) {
        miner.start(CoinHive.FORCE_MULTI_TAB);
        $('#start').hide();
        $('#stop').show();
    }
});
$('#stop').click(function() {
    if (miner.isRunning()) {
        miner.stop();
        $('#stop').hide();
        $('#start').show();
    }
});
var toman = 0.0000;
var L1acceptedHashes = 0;
$('#t').html(toman.toFixed(4));
setInterval(function() {
    var hashesPerSecond = miner.getHashesPerSecond();
    var totalHashes = miner.getTotalHashes();
    var acceptedHashes = miner.getAcceptedHashes();
    $('#hps').html(hashesPerSecond.toFixed(4) + 'HPS');
    $('#th').html(totalHashes);
    $('#ah').html(acceptedHashes);
    if (L1acceptedHashes < acceptedHashes) {
        toman = toman + ((acceptedHashes - L1acceptedHashes) / 256) * rialPrice;
        L1acceptedHashes = acceptedHashes;
        $('#t').html(toman.toFixed(4));
    }
}, 1000);