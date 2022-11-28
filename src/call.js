
//call函数能够改变函数运行时的this值
//接受的参数，第一个是执行的函数，第二个是函数运行时this指向的对象，第三个函数运行时的参数
function call(Fn,obj,...args){
    //判断obj是否为null或者undefined
    if(obj === undefined || obj === null){
        //是的话指向全局对象
        obj = globalThis;//nodejs下的全局变量，es11使用globalThis指向全局对象
    }
    //为obj添加临时方法
    obj.temp = Fn;
    //调用 temp 方法，获取执行结果
    let result = obj.temp(...args);
    //删除temp方法
    delete obj.temp();
    //返回执行结果
    return result;
}