
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

//递归拷贝
//借助 map，添加容器来保存克隆过的数据
function deepClone3(target, map = new Map) {
    //克隆数据之前，先进行判断，数据之前是否克隆过
    //如果被克隆过，那就直接返回即可
    let cache = map.get(target);
    if (cache) {
        return cache;
    }

    //先检测拷贝数据的类型
    if (typeof target === 'object' && target !== null) {
        //创建一个容器，判断是数组还是对象
        const result = Array.isArray(target) ? [] : {};
        //将新的结果存入到容器中
        map.set(target, result);
        //遍历对象
        for (let key in target) {
            //检测该属性是否为对象本身的属性(不能拷贝原型对象的属性)
            if (target.hasOwnProperty(key)) {
                //是本身就拷贝
                result[key] = deepClone3(target[key]);
            }
        }
        return result;
    } else {
        //必须要加，否则递归失效
        return target;
    }
}

//4.最终优化版本
//借助 map，添加容器来保存克隆过的数据
function deepClone4(target, map = new Map) {
    //克隆数据之前，先进行判断，数据之前是否克隆过
    //如果被克隆过，那就直接返回即可
    let cache = map.get(target);
    if (cache) {
        return cache;
    }

    //先检测拷贝数据的类型
    if (typeof target === 'object' && target !== null) {
        let isArray = Array.isArray(target);
        //创建一个容器，判断是数组还是对象
        const result = isArray ? [] : {};
        //将新的结果存入到容器中
        map.set(target, result);
        //遍历对象
        //如果目标数据为数组
        if (isArray) {
            //forEach 遍历
            target.forEach((item, index) => {
                result[index] = deepClone4(item, map);
            })
        } else {
            //如果是对象，获取所有的键名，然后forRach 遍历
            //这里的key就是最外层的abcd
            Object.keys(target).forEach(key => {
                //拿到元素后放入容器result
                result[index] = deepClone4(target[key], map);
            })
        }
        return result;
    } else {
        //必须要加，否则递归失效
        return target;
    }
}