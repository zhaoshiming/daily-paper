// element 

在使用获取元素的方法获取到元素之后

元素的属性有

1. element.attribute
2. element.id
3. element.tagName 
4. element.innerHTML  返回元素包含的html代码
5. element.outerHTML  返回指定元素节点所有的html 代码，包括自身和包含的所有子元素
6. element.className  返回当前元素节点的class属性，字符串，使用空格进行分割
   element.classList  返回类似数组的对象，当前元素节点的每个class就是对象的一个成员，下标是 0 -。。。



盒子模型相关属性

element.clientHeight  返回元素节点可见部分的高度
element.clientWidth   返回元素节点可见部分的宽度

可见部分指的是不包括溢出的大小，只返回该元素在容器里占据的大小 ？？？？？ 喵喵喵？

Element.clientLeft，Element.clientLeft属性等于元素节点左边框（left border）的宽度，

Element.clientTop  Element.clientTop属性等于网页元素顶部边框的宽度，单位为像素。

Element.scrollHeight属性返回某个网页元素的总高度，

Element.scrollWidth属性返回总宽度，可以理解成元素在垂直和水平两个方向上可以滚动的距离。它们都包括由于溢出容器而无法显示在网页上的那部分高度或宽度。这两个属性是只读属性。

Element.scrollLeft属性表示网页元素的水平滚动条向右侧滚动的像素数量，

Element.scrollTop属性表示网页元素的垂直滚动条向下滚动的像素数量。对于那些没有滚动条的网页元素，这两个属性总是等于0。

var rules = document.getElementById('rules');
rules.onscroll = checking;

function checking(){
  if (this.scrollHeight - this.scrollTop === this.clientHeight) {
    console.log('谢谢阅读');
  } else {
    console.log('您还未读完');
  }
}

Element.offsetHeight 属性返回元素的垂直高度，

Element.offsetWidth 属性返回水平宽度。offsetHeight可以理解成元素左下角距离左上角的位移，offsetWidth是元素右上角距离左上角的位移。它们的单位为像素，都是只读。

Element.offsetLeft 返回当前元素左上角相对于Element.offsetParent节点的水平位移，

Element.offsetTop 返回垂直位移，单位为像素。通常，这两个值是指相对于父节点的位移。

Element.getAttribute()：读取指定属性
Element.setAttribute()：设置指定属性
Element.hasAttribute()：返回一个布尔值，表示当前元素节点是否有指定的属性
Element.removeAttribute()：移除指定属性

Element.querySelector()
Element.querySelectorAll()
Element.getElementsByTagName()
Element.getElementsByClassName()

Element.addEventListener()：添加事件的回调函数
Element.removeEventListener()：移除事件监听函数
Element.dispatchEvent()：触发事件









































































