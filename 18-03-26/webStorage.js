// 浏览器端的数据存储机制



window.addEventListener("storage",onStorageChange);

回调函数接受一个event对象作为参数。这个event对象的key属性，保存发生变化的键名。

function onStorageChange(e) {
     console.log(e.key);    
}


除了key属性，event对象的属性还有三个：

oldValue：更新前的值。如果该键为新增加，则这个属性为null。
newValue：更新后的值。如果该键被删除，则这个属性为null。
url：原始触发storage事件的那个网页的网址。










































































