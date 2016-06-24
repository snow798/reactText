/**
 * Created by Administrator on 2016/6/23.
 */
//完整支持的浏览器和平台
var browser = (function() {
  var M, R = {
    platform: 'unknown',
    name: 'unsupported',
    version: 0
  };
  if (navigator.userAgent.match(/Android/)) {
    R.platform = 'Android';
    if (M = navigator.userAgent.match(/(Chrome|Firefox)\/([\d\.]+)/)) {
      R.name = M[1];
      R.version = M[2];
    }
  } else if (M = navigator.userAgent.match(/(iPhone|iPad|iPod)(?: Touch)?; CPU(?: iPhone)? OS ([\d_\.]+)/)) {
    R.platform = M[1];
    R.name = 'IOS';
    R.version = M[2].replace(/_/g, '.');
  } else if (navigator.userAgent.match(/Windows/)) {
    R.platform = 'Windows';
    if (M = navigator.userAgent.match(/(Trident)\/([\d\.]+).+Touch/)) {
      R.name = M[1];
      R.version = M[2];
    } else if ((navigator.maxTouchPoints || window.TouchEvent) && (M = navigator.userAgent.match(/(Chrome|Firefox)\/([\d\.]+)/))) {
      R.name = M[1];
      R.version = M[2];
    }
  }
  if (navigator.userAgent.match(/QQ\/[\d\.]+/i)) {
    R.app = 'QQ';
  } else if (navigator.userAgent.match(/micromessenger\/[\d\.]+/i)) {
    R.app = 'WeChat';
  }
  return R;
})();

//自适应REM设置
!function(){
  var isChange= false, oldScreenWidth= 375, oldRem= 50;   // 默认iPhone6为基准[屏款375，默认根字体大小50px]
  var html= document.getElementsByTagName('html')[0];
  var getStyle = function (element,attr) {
    if(typeof window.getComputedStyle!='undefined'){
      return parseFloat(window.getComputedStyle(element,null)[attr]);
    }else if(element.currentStyle){
      return parseFloat(element.currentStyle[attr]);
    }
  };
  function initRem(){
    console.log(document.body.clientWidth, getStyle(html, 'font-size'));
    html.style.fontSize= document.body.clientWidth*oldRem/oldScreenWidth+'px';
    oldScreenWidth= document.body.clientWidth;
    oldRem= getStyle(html, 'font-size');
    isChange= false;
  }
  document.addEventListener('DOMContentLoaded', function(){
    initRem();
  });
  window.addEventListener('resize', function(){
    if(!isChange){
      isChange= true;
      setTimeout(initRem, 700);
      //musicPlay.init();
    }
  })

}();
