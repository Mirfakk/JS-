
/**
 * 
 * @param {Array} arr1 
 * @param {Array} arr2 
 * @returns 
 */
function difference(arr1, arr2 = []) {
    //判断arr1是否为空 是的话返回空
    if (arr1.length === 0) {
        return [];
    }

    //判断arr2是否为空 是的话返回arr1，因为是返回一个新数组，所以使用slice
    if (arr2.length === 0) {
        return arr1.slice(0);//使用slice则返回新数组，不使用则返回原数组
    }

    //对arr1进行过滤，如果有元素没有出现在arr2中，就满足，将其过滤出来
    const result = arr1.filter(item => !arr2.includes(item));
    return result;
}