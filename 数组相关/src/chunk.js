/**
 * 数组分块
 * @param {Array} arr 
 * @param {Number} size 
 */
function chunk(arr, size = 1) {
    //声明两个数组
    let result = [];//用来存放最终结果
    let temp = [];//临时存放分块的数组，划分后将temp整体往result压入
    //遍历
    arr.forEach(item => {
        //判断temp长度是否为0，是的话将其压入result，此时result就是[[],],然后再将元素压入temp即可，当temp满了，将temo置0，再将temp压入result，以此类推
        if (temp.length === 0) {
            result.push(temp);
        }
        //将元素压入临时数组temp
        temp.push(item);
        //判断，当temp长度等于size，说明已经满了，则将其清空
        if (temp.length === size) {
            temp = [];
        }
    });
    //返回结果
    return result;
}   