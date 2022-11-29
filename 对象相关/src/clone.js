//借助拓展运算符

//形参是变量
function clone1(target) {
    //类型判断 {} []
    if (typeof target === 'object' && target !== null) {
        //判断数据是否为数组
        if (Array.isArray(target)) {
            //如果是对数组，创建一个新数组，把target展开放进新数组中
            return [...target];
        } else {
            //如果是对象，创建一个新对象，把target展开放进新数组中
            return { ...target };
        }
    } else {
        return target;
    }
}