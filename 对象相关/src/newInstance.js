/*
    使用newInstance来模拟构造函数的创建过程
*/

function newInstance(Fn, ...args) {
    //1.创建一个新对象
    const obj = {};
    //2.修改函数内部， this 指向新对象，并执行
    const result = Fn.call(obj, ...args);
    //修改新对象的原型对象
    obj.__proto__ = Fn.prototype;
    //3.返回新对象
    //判断返回结果的数据类型，如果是对象类型，就返回数据结果，如果不是对象类型，就返回一个新对象
    return result instanceof Object ? result : obj;
}