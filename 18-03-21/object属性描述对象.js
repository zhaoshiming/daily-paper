// 属性描述对象

  value: 123,
  writable: false,
  enumerable: true,
  configurable: false,
  get: undefined,
  set: undefined


  // 获取对象的属性描述对象
  var obj = { p: 'a' };

  Object.getOwnPropertyDescriptor(obj, 'p')

// 获取对象的全部属性
Object.getOwnPropertyNames(obj); 


// 修改一个对象的属性

var obj = Object.defineProperty(obj, 'p', {
    value: 123,
    writable: false,
    enumerable: true,
    configurable: false
});


// 修改一个对象的多个属性
Object.defineProperties(obj, {
    p: {value: 'fucku'},
    p1: {enumerable: false}
})



// 判断对象的属性是否可遍历

obj.propertyIsEnumerable('p')
















