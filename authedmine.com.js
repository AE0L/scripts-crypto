var miner = new CoinHive.Anonymous('yQuZxrrbBSEt2IQQBdgKLtj86Vi5acOz', {
    throttle: 0.8
});
miner.on('open', function() { // For purposes of this demo, we will immediately remove the opt-in// cookie again - after all, this demo is about showing the opt-in// screen.miner._auth.reset();});document.getElementById('start-mining').addEventListener('click', function(ev){ev.preventDefault();miner.start();return false;});