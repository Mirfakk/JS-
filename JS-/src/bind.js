function bind(Fn, obj, ...args) {
    //返回一个新的函数
    return function (...args2) {
        //新函数的作用是调用目标函数Fn，改变其内部this指向为obj
        //与call函数的作用是一样的，所以执行call函数
        return call(Fn, obj, ...args, ...args2);
    }
}