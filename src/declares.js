//map函数调用------------------------------------
//接收两个参数
//原数组和回调函数
function map(arr, callback) {
    //声明空数组
    let result = [];
    //遍历数组
    for (let i = 0; i < arr.length; i++) {
        //执行回调
        //实参是数组里面正在遍历的元素以及下标
        //将返回结果压进result里面
        result.push(callback(arr[i], i));
    }
    //返回结果
    return result;
}
//reduce函数调用------------------------------------
/**
 * 初始值类型,*为任何类型
 * @param {Array} arr 
 * @param {Function} callback 
 * @param {*} initValue 
 * @returns 
 */
//实参接收三个参数：数组，回调函数，初始值
function reduce(arr, callback, initValue) {
    //声明结果的变量
    let result = initValue;//初始等于初始值
    //执行毁掉
    for (let i = 0; i < arr.length; i++) {
        //执行回调，传进去的是上一次运行的结果，当前正在遍历的元素
        //第一次用result接收结果，第一次结果传进去得到第二个结果，用第二次结果传进去得到第三个结果，依次类推。
        result = callback(result, arr[i]);
    }
    //循环结束后，返回最终的结果
    return result;
}

//filter函数调用------------------------------------
/**
 * 用来过滤数组当中的元素，并且返回一个新数组
 * @param {Array} arr 
 * @param {Function} callback 
 */
//接收两个参数，第一个是数组，第二是回调
function filter(arr, callback) {
    //声明空数组接收满足条件的结果值
    let result = [];
    //遍历数组做回调执行
    for (let i = 0; i < arr.length; i++) {
        //参数是数组的值和坐标
        let res = callback(arr[i], i);//callback就是回调函数：item => item % 2 == 1
        //如果结果为真，就压入result结果（数组）中
        if (res) {
            result.push(arr[i]);
        }
    }
    //返回结果
    return result;
}

//find函数调用------------------------------------
/**
 * 用来查找数组当中的元素，找到返回该数值，未找到返回undefined
 * @param {Array} arr 
 * @param {Function} callback 
 */
function find(arr, callback) {
    //遍历数组
    for (let i = 0; i < arr.length; i++) {
        //执行回调
        let res = callback(arr[i], i);
        //如果满足条件，返回真，那就返回当前遍历的数
        if (res) {
            //返回当前正在遍历的元素
            return arr[i];
        }
    }
    //如果没有遇到满足条件的元素，返回undefined
    return undefined;
}

//findIndex函数调用------------------------------------
/**
 * 用来查找数组当中的元素的索引，找到返回该索引，未找到返回-1
 * @param {Array} arr 
 * @param {Function} callback 
 */
function findIndex(arr, callback) {
    //遍历数组
    for (let i = 0; i < arr.length; i++) {
        //执行回调函数
        let res = callback(arr[i], i);
        //判断是否满足
        if (res) {
            return i;//返回索引
        }
    }
    //都不满足则返回-1
    return -1;
}
//every函数调用------------------------------------
/**
 * 如果数组中每个元素都满足测试函数，则返回true，否则返回false
 * @param {Array} arr
 * @param {Function} callback
 */
function every(arr, callback) {
    //遍历数组
    for (let i = 0; i < arr.length; i++) {
        //判断，只要有一个不满足，就返回false
        if (!callback(arr[i], i)) {
            return false;
        }
    }
    //若都满足，则退出循环后什么也没做，返回true
    return true;
}



//some函数调用------------------------------------
/**
 * 数组中有任何一个元素满足测试函数，则返回true，否则返回false
 * @param {Array} arr 
 * @param {Function} callback 
 */
function some(arr, callback) {
    //遍历数组
    for (let i = 0; i < arr.length; i++) {
        //只要有其中一个满足条件，就返回true
        if (callback(arr[i], i)) {
            return true;
        }
    }
    //若都不满足条件，返回false
    return false;
}

