// 跨域

同源的含义是：

协议相同
域名相同
端口相同


JSONP

它的基本思想是，
网页通过添加一个<script>元素，
向服务器请求 JSON 数据，
这种做法不受同源政策限制；
服务器收到请求后，
将数据放在一个指定名字的回调函数里传回来。


function addScriptTag(src) {
    var script = document.createElement('script');
    script.setAttribute("type","text/javascript");
    script.src = src;
    document.body.appendChild(script);
  }
  
  window.onload = function () {
    addScriptTag('http://example.com/ip?callback=foo');
  }
  
  function foo(data) {
    console.log('Your public IP address is: ' + data.ip);
  };

请求头里面的origin字段就是显示了当前请求来自哪个域名。


cors 跨域通信， 需要服务器实现cors接口






































