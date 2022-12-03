//数组去重------------------------------------
/**
 * 根据当前数组，产生一个去除重复元素后的新数组
 * 例如[1,2,2,3,4] => [1,2,3,4]
 * 方法1：
 *  利用forEach()和indexOf()
 *  本质是双重遍历，效率较差
 * 方法2：
 *  利用forEach() + 对象容器
 *  只需要一重遍历，效率较高
 * 方法3：
 *  利用es6语法，from + Set 或者 ... + Set
 *  编码更为简洁
 * @param {Array} arr 
 */

function unique(arr) {
    //声明空数组来接收最后的结果
    const result = [];
    //遍历原始数组
    arr.forEach(item => {
        //检测result数组中是否包含这个元素，返回的是下标,不存在为-1
        //等于-1表示result里面没有这个元素
        if (result.indexOf(item) === -1) {
            // 若没有该元素，则插入到数组result中
            result.push(item)
        }
    });
    //返回结果
    return result;
}

function unique2(arr) {
    //声明空数组存储结果
    const result = [];
    //声明空对象，把数组当中的值作为下标存入obj
    const obj = {};
    //遍历数组
    arr.forEach(item => {
        //默认是undefined，如果已经存在了下标，就是true
        if (obj[item] === undefined) {
            //将其赋值为true，然后压入result数组，只会再遇到则不会通过判断，以为已压入的元素就是true，只有undefined才可以通过判断
            obj[item] = true;
            result.push(item); //将 item 作为下标存储在 obj中
        }
    });
    //返回结果
    return result;
}

function unique3(arr) {
    //将数组转化为集合set
    let set = new Set(arr);
    //将set展开创建一个数组
    let array = [...set];
    // return array;//即可
    return [...new Set(arr)]//也可以

}