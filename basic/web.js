/**
 * Created by xiaoma on 2017/9/15.
 */

// window
// window对象有innerWidth和innerHeight属性，可以获取浏览器窗口的内部宽度和高度
alert('window inner size: ' + window.innerWidth + ' x ' + window.innerHeight);

// navigator
// navigator对象表示浏览器的信息，最常用的属性包括：
    // navigator.appName：浏览器名称；
    // navigator.appVersion：浏览器版本；
    // navigator.language：浏览器设置的语言；
    // navigator.platform：操作系统类型；
    // navigator.userAgent：浏览器设定的User-Agent字符串。


// screen
//
// screen对象表示屏幕的信息，常用的属性有：
//
//     screen.width：屏幕宽度，以像素为单位；
//     screen.height：屏幕高度，以像素为单位；
//     screen.colorDepth：返回颜色位数，如8、16、24。


// location
//
// location对象表示当前页面的URL信息。例如，一个完整的URL：
// http://www.example.com:8080/path/index.html?a=1&b=2#TOP

location.protocol; // 'http'
location.host; // 'www.example.com'
location.port; // '8080'
location.pathname; // '/path/index.html'
location.search; // '?a=1&b=2'
location.hash; // 'TOP'

if (confirm('重新加载当前页' + location.href + '?')) {
    location.reload();
} else {
    location.assign('/discuss'); // 设置一个新的URL地址
}

// document
// document对象表示当前页面。由于HTML在浏览器中以DOM形式表示为树形结构，document对象就是整个DOM树的根节点。
document.title = '努力学习JavaScript!';

<d1 id="drink-menu" style="border:solid 1px #ccc;padding:6px;">
    <dt>摩卡</dt>
    <dd>热摩卡咖啡</dd>
    <dt>酸奶</dt>
    <dd>北京老酸奶</dd>
    <dt>果汁</dt>
    <dd>鲜榨苹果汁</dd>
</d1>

var menu = document.getElementById('drink-menu');
var drinks = document.getElementsByTagName('dt');
var i, s, menu, drinks;

menu = document.getElementById('drink-menu');
menu.tagName; // 'DL'

drinks = document.getElementsByTagName('dt');
s = '提供的饮料有:';
for (i=0; i<drinks.length; i++) {
    s = s + drinks[i].innerHTML + ',';
}
alert(s);

document.cookie; // 'v=123; remember=true; prefer=zh'


