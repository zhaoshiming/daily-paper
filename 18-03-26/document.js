// document 对象


document是文档的根结点，只要浏览器开始加载html文档，该对象就已经存在，可以直接使用了。


正常的网页，直接使用document或window.document。
iframe框架里面的网页，使用iframe节点的contentDocument属性。
Ajax 操作返回的文档，使用XMLHttpRequest对象的responseXML属性。
内部节点的ownerDocument属性。

## 那么如何知道当前的document属不属于window对象呢？

document.defaultView == window  // 如果当前文档不属于windiow对象，会返回null

document.doctype  // 返回文档类型

document.readyState  // 返回当前文档的状态

1. loading  加载html代码阶段（尚未完成解析）解析script脚本的时候，状态还是loading
2. interactive  加载外部资源阶段
3. complete   加载完成

## 如何检查网页是否加载成功？

if (document.readyState == 'complete') // load success


#查找节点 this is important

document.querySelector()，document.querySelectorAll()

document.querySelector方法接受一个CSS选择器作为参数，返回匹配该选择器的元素节点。如果有多个节点满足匹配条件，则返回第一个匹配的节点。如果没有发现匹配的节点，则返回null

document.querySelector('*')  会返回文档中所有的html元素节点

document.getElementsByTagName()

document.getElementsByClassName('wrap-img')

getElementById()

document.createElement('div')  生成元素节点，返回该节点

document.createTextNode()      生成文本节点

document.createAttribute(name)  

document.addEventListener(）

document.removeEventListener()

document.dispatchEvent()
















