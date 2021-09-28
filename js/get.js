var userAgent = window.navigator.userAgent.toLowerCase();

if(userAgent.indexOf('msie') != -1 ||
        userAgent.indexOf('trident') != -1) {
            document.getElementById('browser-name').innerHTML = "Internet Explorer";
} else if(userAgent.indexOf('edge') != -1) {
    document.getElementById('browser-name').innerHTML = "Microsoft Edge";
} else if(userAgent.indexOf('chrome') != -1) {
    document.getElementById('browser-name').innerHTML = "Google Chrome";
} else if(userAgent.indexOf('safari') != -1) {
    document.getElementById('browser-name').innerHTML = "Safari";
} else if(userAgent.indexOf('firefox') != -1) {
    document.getElementById('browser-name').innerHTML = "Fire Fox";
} else if(userAgent.indexOf('opera') != -1) {
    document.getElementById('browser-name').innerHTML = "Opera";
} else {
    document.getElementById('browser-name').innerHTML = "ブラウザ名がリストにありません。代わりに、ブラウザ情報をそのまま表示します。" + "「" + userAgent + "」";
}



if(userAgent.indexOf("windows nt") !== -1) {
    document.getElementById('os-name').innerHTML = "Microsoft Windows";
  } else if(userAgent.indexOf("android") !== -1) {
    document.getElementById('os-name').innerHTML = "Android";
  } else if(userAgent.indexOf("iphone") !== -1 || userAgent.indexOf("ipad") !== -1) {
    document.getElementById('os-name').innerHTML = "iOS, or iPad OS";
  } else if(userAgent.indexOf("mac os x") !== -1) {
    document.getElementById('os-name').innerHTML = "macOS";
  } else {
    console.log("OS名がリストにありません。");
  }


var lang = navigator.language;
document.getElementById('language-name').innerHTML = lang;

fetch('https://ipinfo.io?callback')
  .then(res => res.json())
  .then(json => document.getElementById('ip-address').innerHTML = json.ip);
