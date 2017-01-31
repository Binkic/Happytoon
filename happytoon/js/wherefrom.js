<!--
//平台、设备和操作系统
var system ={
win : false,
mac : false,
xll : false
};
//检测平台
var p = navigator.platform;
system.win = p.indexOf("Win") == 0;
system.mac = p.indexOf("Mac") == 0;
system.x11 = (p == "X11") || (p.indexOf("Linux") == 0);
//跳转语句，如果是手机访问就自动跳转到m.kkxm.com页面
if(system.win||system.mac||system.xll){
       
}else{
window.location.href="/index.php?m=3g&c=forumlist";
}
-->