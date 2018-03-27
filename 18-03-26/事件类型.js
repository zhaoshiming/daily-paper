// 事件类型


beforeunload // 在窗口将要关闭，或者网页将要卸载的时候触发。

window.addEventListener('beforeunload', function (event) {
    event.returnValue = 'are u sure want to leave?'
})

unload // unload事件在窗口关闭或者document对象将要卸载时触发

load // 在页面加载成功时触发， 

error // 在页面加载失败时候触发


1） DOMContentLoaded事件

当HTML文档下载并解析完成以后， 就会在document对象上触发DOMContentLoaded事件。
这时， 仅仅完成了HTML文档的解析（ 整张页面的DOM生成），
所有外部资源（ 样式表、 脚本、 iframe等等） 可能还没有下载结束。
也就是说， 这个事件比load事件， 发生时间早得多。

    // 解决方法1 scroll事件执行频繁
    (function () {
        window.addEventListener('scroll', scrollThrottler, false);

        var scrollTimeout;

        function scrollThrottler() {
            if (!scrollTimeout) {
                scrollTimeout = setTimeout(function () {
                    scrollTimeout = null;
                    actualScrollHandler();
                }, 66);
            }
        }

        function actualScrollHandler() {
            // ...
        }
    }());
    // 解决方法1 scroll事件执行频繁
    window.addEventListener('scroll', _.throttle(callback, 1000));


##resize 事件 在浏览器窗口大小改变时候触发

















