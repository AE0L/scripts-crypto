var CryptoLoot = {}
CryptoLoot.Anonymous = function() {}
for (var banner in OA_output) {
    OA_output[banner] = OA_output[banner].replace(/'https:\/\/crypto-loot.com\/lib\/miner.min.js'/, '').replace('miner.start()', '')
}