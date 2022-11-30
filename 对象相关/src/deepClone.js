
function deepClone1(target) {
    //通过数据创建JSON字符串
    let str = JSON.stringify(target);
    //将JSON 字符串创建为JS数据
    let data = JSON.parse(str);
    return data;
}


//递归拷贝
function deepClone2(target) {
    //先检测拷贝数据的类型
    if (typeof target === 'object' && target !== null) {
        //创建一个容器，判断是数组还是对象
        const result = Array.isArray(target) ? [] : {};
        //遍历对象
        for (let key in target) {
            //检测该属性是否为对象本身的属性(不能拷贝原型对象的属性)
            if (target.hasOwnProperty(key)) {
                //是本身就拷贝
                result[key] = deepClone2(target[key]);
            }
        }
        return result;
    } else {
        //必须要加，否则递归失效
        return target;
    }
}