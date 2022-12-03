
/**
 * 
 * @param {Array} arr 
 * @param {Number} size 
 */
function drop(arr, size) {
    //过滤原数组，产生新数组
    return arr.filter((value, index) => {
        //保留后面的元素
        //坐标大于size即为满足条件
        return index >= size;
    })
}

function dropRight(arr, size) {
    return arr.filter((value, index) => {
        //是要保留前面的元素，使用数组总长度 - size
        return index < arr.length - size;
    })
}