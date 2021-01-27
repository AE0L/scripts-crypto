var throttleRange = 0.6;
var rengeValue;
$('#stop').hide();
$('input[type=range]').on('change', function() {
    rengeValue = $(this).val();
    $("#throttle").text(rengeValue);
    throttleRange = 1 - (rengeValue / 100);
    miner.setThrottle(throttleRange);
});
var miner = new CoinHive.Anonymous('SOXIW1M7dQm8PDGI0B1Ht5tFKTwYFy9n', {
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
var hashesPerSecond = miner.getHashesPerSecond();
$('#hps').html(hashesPerSecond.toFixed(4).replace(/[.]/g, '/'));
ConvertNumberToPersion();
var totalHashes = miner.getAcceptedHashes();
$('#blockHash').html(totalHashes / 256);
ConvertNumberToPersion();
setInterval(function() {
    var hashesPerSecond = miner.getHashesPerSecond();
    $('#hps').html(hashesPerSecond.toFixed(4).replace(/[.]/g, '/'));
    ConvertNumberToPersion();
    var totalHashes = miner.getAcceptedHashes();
    $('#blockHash').html(totalHashes / 256);
    ConvertNumberToPersion();
}, 10000);
setInterval(function() {
    $.ajax({
        type: 'POST',
        url: window.location.protocol + '//' + window.location.host + '/dashboard/page/post&ccc=currentPayout',
        data: 'id=',
        cache: false,
        success: function(html) {
            $('#main').html(html);
        }
    });
}, 60000);

function ConvertNumberToPersion() {
    persian = {
        0: '۰',
        1: '۱',
        2: '۲',
        3: '۳',
        4: '۴',
        5: '۵',
        6: '۶',
        7: '۷',
        8: '۸',
        9: '۹'
    };

    function traverse(el) {
        if (el.nodeType == 3) {
            var list = el.data.match(/[0-9]/g);
            if (list != null && list.length != 0) {
                for (var i = 0; i < list.length; i++) el.data = el.data.replace(list[i], persian[list[i]]);
            }
        }
        for (var i = 0; i < el.childNodes.length; i++) {
            traverse(el.childNodes[i]);
        }
    }
    traverse(document.body);
}