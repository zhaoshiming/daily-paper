// 重绘

读取DOM或者写入DOM，尽量写在一起，不要混杂
缓存DOM信息
不要一项一项地改变样式，而是使用CSS class一次性改变样式
使用document fragment操作DOM
动画时使用absolute定位或fixed定位，这样可以减少对其他元素的影响
只在必要时才显示元素
使用window.requestAnimationFrame()，因为它可以把代码推迟到下一次重流时执行，而不是立即要求页面重流
使用虚拟DOM（virtual DOM）库





















































