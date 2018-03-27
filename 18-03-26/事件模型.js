// 事件模型

addEventListener(type,function(){
    
},useCapture);
useCapture 是布尔值，表示监听函数是否在捕获阶段触发，默认为false


removeEventListener('click'.listener,false)  方法用来移除addEventListener方法添加的事件监听函数

dispatchEvent方法在当前节点上触发指定事件，从而触发监听函数的执行。该方法返回一个布尔值，只要有一个监听函数调用了Event.preventDefault()，则返回值为false，否则为true。

事件的传播

第一阶段：从window对象传导到目标节点，称为“捕获阶段”（capture phase）。

第二阶段：在目标节点上触发，称为“目标阶段”（target phase）。

第三阶段：从目标节点传导回window对象，称为“冒泡阶段”（bubbling phase）。

用户点击网页的时候，浏览器总是假定click事件的目标节点，就是点击位置嵌套最深的那个节点。




捕获就是从顶部到点击的最底部元素，冒泡就是从最底部到最顶部元素。


##事件代理

由于事件会在冒泡阶段向上传播到父节点，因此可以把子节点的监听函数定义在父节点上，由父节点的监听函数统一处理多个子元素的事件。这种方法叫做事件的代理（delegation）。


停止冒泡  e.stopPropagation();

##Event对象

事件发生之后，会生成一个事件对象，作为参数传递给监听函数。

1）currentTarget

currentTarget属性返回事件当前所在的节点，
即正在执行的监听函数所绑定的那个节点。
作为比较，target属性返回事件发生的节点。
如果监听函数在捕获阶段和冒泡阶段触发，那么这两个属性返回的值是不一样的。

2）target

target属性返回触发事件的那个节点，即事件最初发生的节点。如果监听函数不在该节点触发，那么它与currentTarget属性返回的值是不一样的。


event.preventDefault()
preventDefault方法取消浏览器对当前事件的默认行为，
比如点击链接后，浏览器跳转到指定页面，
或者按一下空格键，页面向下滚动一段距离。
该方法生效的前提是，事件对象的cancelable属性为true，
如果为false，则调用该方法没有任何效果。


stopPropagation方法阻止事件在 DOM 中继续传播，
防止再触发定义在别的节点上的监听函数，但是不包括在当前节点上新定义的事件监听函数。


##自定义事件的监听分发

// 新建事件实例
var event = new Event('build');

// 添加监听函数
elem.addEventListener('build', function (e) { ... }, false);

// 触发事件
elem.dispatchEvent(event);



















































