/*
如何判断一个对象是否为构造函数的实例，只需要检测该对象的原型对象(prototype)是否在obj的原型链上的某个对象，是的话返回 true，不是返回false
 */

function myInstanceOf(obj, Fn) {
    //检测Fn函数原型是否在 obj的原型链上
    //获取函数的显式原型
    let prototype = Fn.prototype;
    //获取obj的显式原型
    let proto = obj.__proto__;
    //遍历原型链
    while (proto) {
        //检测原型对象是否相等
        if (prototype === proto) {
            return true;
        }
        // 如果不相等，再检测原型对象的原型对象，以此类推
        proto = proto.__proto__;
    }
    return false;
}