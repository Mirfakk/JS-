/**
 * 
 * @param {Array} arr 
 * @param  {...any} args 
 */

function pull(arr, ...args) {
    //声明空数组，存放返回的结果(保存删掉的元素)
    const result = [];
    //遍历 arr
    for (let i = 0; i < arr.length; i++) {
        //判断当前元素是否存在于 args数组中,args数组就是要删除的数组
        if (args.includes(arr[i])) {
            //将当前元素的值存入result
            result.push(arr[i]);
            //删除当前的元素
            arr.splice(i, 1);//参数：从第几个下标开始删，删除个数
            //下标自减
            i--;
        }
    }
    //返回
    return result;
}

function pullAll(arr, values) {
    return pull(arr, ...values);
}