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

//使用es5实现浅拷贝
//形参是变量
function clone2(target) {
    //判断
    if (typeof target === 'object' && target !== null) {
        //创建一个容器, 如果对象是个数组，就用[]，如果是对象则{}
        const result = Array.isArray(target) ? [] : {};
        //使用for循环，只能遍历数组，forof循环只能遍历具有迭代器接口的数据
        //遍历target数据，要是用for in（不仅能遍历当前身上的属性，还能遍历原型上的属性）
        for (let key in target) {
            //不需要原型对象上的属性，所以判断
            // 判断当前对象身上是否包含该属性，如果有，就进行拷贝，没有则不做操作
            if (target.hasOwnProperty(key)) {
                //将属性设置到result结果数据中
                result[key] = target[key];
            }
            return result;
        }

    } else {
        //不满足条件则返回target
        return target;
    }
}