// js 基本数据类型

number 
string 
boolean 
null 
undefined 
object

并且 object = array + 狭义的object + function

##如何确定一个值到底是什么类型？

1. typeof 
typeof 1 == number
typeof 'asd'  == string 
typeof true == boolean

typeof null  == object  这里是因为设计问题 null 的前三位和object前三位相同导致
typeof undefined == undefined


let a = [];
typeof a == object;

let b = {};
typeof b == object

let c = function () {
    //...
}
typeof c == function 

可以看到 除了数组无法被typeof 识别之外，其他类型的值都可以被识别

##那么如何识别数组呢？

a instanceof Array  == true
b instanceof Array  == false

js 用法里比较奇葩的就是 null 和 undefined

null 可以理解为是一个占位符 
undefined 表示未定义

##那么什么情况下会返回 undefined 呢？
 
1. 变量声明未赋值
2. 函数参数没有提供，那么函数体内该参数默认undefined
3. 对象属性没有赋值 （智障吗？）
4. 函数没有返回值的时候，默认返回undefined


if 判断的时候，哪些值会自动转为false呢？

1. undefined
2. null 
3. false 
4. '' 
5. 0 
6. NaN 

除此之外，全部都会返回true，就算是 [] 也是如此


有的时候，回出现一个特别奇葩的值 NaN (not a number) 表示非数字

typeof NaN == number  因为还是属于特殊的数字的

NaN 和任何数字运算都是NaN

##那么如何判断一个数字是不是NaN 呢？

isNaN(参数)    // 会返回一个布尔值

但是这里会有很多智障一类的转化，所以参考下面的封装

function isNumberNaN (index) {
    return typeof index == 'number' && isNaN(index);
}


一般涉及到数字的时候都是 string 类型 转 number 类型

parseInt  用于讲字符串转为number 会把参数先转为string 再转为number
1. parseInt('123')  // 123
2. parseInt('12123asd')  // 12123 遇到不能转未数字的部分就不继续了
3. parseInt('a12212')    // NaN  如果第一个字符都转不了 那就是 NaN 了 
 

parseFloat() 转浮点数

##对象找到了吗？ 

查看对象的全部属性
let obj = {name: 'tomas'};
Object.keys(obj); // 会返回一个包含全部键值的数组

遍历对象的全部属性
Object.keys(obj).map(res=>{
    console.log(obj['res']);
})
for (var a in obj) {    // 会跳过不可遍历的属性，会便利继承的属性
    console.log(obj[a]);
}

for (let a in fuckName) {
    if (fuckName.hasOwnProperty(a)) {
        console.log('这里确保遍历的是自身的属性，而不包含继承来的属性');
    }
}

##闭包

其实是因为没有块级作用域，所以现在es6 已经有了，这个不需要了解

function bag() {
    var a = 1;
    function getA() {
        return a;
    }
    return getA;
}

var cc = bag();
cc(); // 1


##函数的运算符部分

首先你需要明白，运算符是针对数字进行运算的，所以一些string会插进来，本身就是不符合逻辑的。

+ 法   // 加法会出现很多的问题， 因为除了加法以外，都会自动转为数字进行运算

对象相加  （sb） 会先调用 valueOf() 再调用toString() 

显式类型转换
Number(12)  == 12
Number('12')  == 12
Number(true)  == 1
Number('asd')   == NaN
Number('12asd')  == NaN     // 有一个字母都不行 区别于parseInt()
Number(undefined)  == NaN 
Number(null)   == 0

Number(对象)  // 会先调用valueOf () 如果返回的不是原始类型的值， 会调用 toString() 

String(对象)   //会先调用toString () 如果返回的不是原始类型的值， 会调用 valueOf() 
   
Boolean()  //转的时候就是会转为false的那几个， 其他的都会转化为true









