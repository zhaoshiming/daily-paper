// Array 

##如何判断数组是否是数组呢？ 

Array.isArray(arr);   返回布尔值
let a = [];
a instanceof Array  返回布尔值

数组转string   arr.toString();

push() 队尾推  返回数组长度
pop()  队尾删除  返回删除对象，空数组返回 undefined 

shift()  删除队首  返回被删除值
unshift()  队首添加  返回数组长度

join()   以指定字符为分割，返回string, undefined null 会自动转为 ''

concat()  连接数组，返回一个新数组，原来的数组不变

reverse() 翻转数组， 返回改变之后的数组

slice(start,end)  返回新数组，原数组不变

splice(start,num,新添加的数组成员)  改变原数组，返回剪接的数组

sort((a, b)=>{
    return a - b;
})  

map((res,index,arr)=> {}) 每次遍历的结果组成新的数组返回, 返回的是新的数组哦！

array.forEach(element => {
     // 只用来操作数据， 不返回值, 所以不要写return
});

filter(res,index,arr)  用于过滤数组， 满足条件的成员组成新的数组返回 

reduce(累积变量， 当前变量， 当前位置， 原数组) 依次处理数组的每个成员，

let arr = [1,2,3,4,5];
arr.reduce((a,b)=>{
    return a + b;
}, num)                      // num 是初始化值

// 选择数组中 最大的数
arr.reduce((a, b) => {
    return a > b ? a : b;
})




[].reduceRight()

[].indexOf('寻找的参数', '开始位置')    // 返回元素在数组里面第一次出现的位置，如果没有就返回 -1 

lastIndexOf()



可以链式调用的哦！