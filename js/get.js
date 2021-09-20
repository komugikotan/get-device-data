var userAgent = window.navigator.userAgent.toLowerCase();

if(userAgent.indexOf('msie') != -1 ||
        userAgent.indexOf('trident') != -1) {
    console.log('Internet Explorer');
    document.getElementById('browser-name').innerHTML = '<p>　Internet Explorer</p>';
} else if(userAgent.indexOf('edge') != -1) {
    console.log('Edge');
    document.getElementById('browser-name').innerHTML = '<p>　Edge</p>';
} else if(userAgent.indexOf('chrome') != -1) {
    console.log('Google Chrome');

    document.getElementById('browser-name').innerHTML = '<p>　Google Chrome</p>';
} else if(userAgent.indexOf('safari') != -1) {
    console.log('Safari');
    document.getElementById('browser-name').innerHTML = '<p>　Safari</p>';
} else if(userAgent.indexOf('firefox') != -1) {
    document.getElementById('browser-name').innerHTML = '<p>　firefox</p>';
    console.log('FireFox');
} else if(userAgent.indexOf('opera') != -1) {
    console.log('Opera');
    document.getElementById('browser-name').innerHTML = '<p>　Opera</p>';
} else {
    console.log('お使いのブラウザを調べることができませんでした');
    document.getElementById('browser-name').innerHTML = '　お使いのブラウザを調べることができませんでした';
}

var userOS = window.navigator.userAgent.toLowerCase();

if(userOS.indexOf("windows nt") !== -1) {
  console.log("Microsoft Windows");
  document.getElementById('os-name').innerHTML = '<p>　Microsoft Windows</p>';
} else if(userOS.indexOf('android') !== -1) {
  console.log("Android");
  document.getElementById('os-name').innerHTML = '<p>　Android</p>';
} else if(userOS.indexOf('iphone') !== -1 || ua.indexOf("ipad") !== -1) {
  console.log("iOS");
  document.getElementById('os-name').innerHTML = '<p>　iOS</p>';
} else if(userOS.indexOf(('mac os x') !== -1)) {
  console.log("macOS");
  document.getElementById('os-name').innerHTML = '<p>　macOS</p>';
} else {
  document.getElementById('os-name').innerHTML = '<p>　お使いのOSを調べることができませんでした。</p>';
  console.log("お使いのOSを調べることができませんでした");
}

var language = (window.navigator.languages && window.navigator.languages[0]) ||
            window.navigator.language ||
            window.navigator.userLanguage ||
            window.navigator.browserLanguage;


document.getElementById('language-name').innerHTML = '　' + language;

$.ajax({
    url: "https://ipinfo.io",
    dataType: "jsonp",
    success: function(res){
        document.getElementById('ip-address').innerHTML = '　' + (res.ip);
    }
});

var sw = window.screen.width; //横幅
var sh = window.screen.height; //高さ

document.getElementById('display-size').innerHTML = '　' +document.body.clientWidth + '×' + document.body.clientHeight;