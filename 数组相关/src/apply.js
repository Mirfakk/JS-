//apply函数和call函数基本相同，不同之处是apply传入的参数是数组，而call函数则是个体

function apply(Fn, obj, args) {
    //判断是否为null或者undefined，是的话指向全局对象
    if (obj === null || obj === undefined) {
        obj = globalThis;
    }
    //为obj添加临时方法
    obj.temp = Fn;
    //调用 temp 方法，获取执行结果
    let result = obj.temp(...args);
    //删除temp方法(临时属性)
    delete obj.temp();
    //返回执行结果
    return result;
}