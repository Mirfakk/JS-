/**
 * 数组扁平化:将多维数组变为一维数组
 * @param {Array} arr
 */

//参数接收一个数组
function flatten1(arr) {
    //声明空数组来接收最后的结果
    let result = [];
    //遍历数组
    arr.forEach(item => {
        //判断是否为数组
        if (Array.isArray(item)) {
            //如果是数组，就使用递归再来执行flatten1函数
            result = result.concat(flatten1(item));

        } else {
            //若不重新赋值，原数组就是空的
            //将item的值压入result数组
            result = result.concat(item);//concat拼接数组
        }
    });
    //返回结果
    return result;
}

/**
 * 方法2，使用some和concat
 */

function flatten2(arr) {
    //是对新的数组操作，而不是原数组    
    let result = [...arr];//这里result里面的元素和arr一模一样
    //判断该数组里面是否还有子数组，有的话接着展开
    while (result.some(item => Array.isArray(item))) {
        // 只要还有一个子数组，some返回值就为1
        result = [].concat(...result);
        console.log(result);
    }
    //返回结果
    return result;
}
