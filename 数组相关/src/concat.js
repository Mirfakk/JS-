/***
 * isArray() 方法用于判断一个对象是否为数组。
 */

//concat 拼接数组---------------------------------

//参数是一个原数组，和args是后续的数组或元素、

function concat(arr, ...args) {
    //声明空数组,用来存放原数组的元素
    const result = [...arr];//使用拓展运算符，能够将arr数组里面所有元素赋值给result，这里结果就是1.2.3
    //遍历数组，把后续元素都压进result数组中
    args.forEach(item => {
        //判断后续是否为数组
        if (Array.isArray(item)) {
            //如果是数组，将元素压入result，但需要使用拓展运算符，否则会形成二维数组
            result.push(...item);//展开才能够正常压入
            // result.push(item);//不展开就是二维数组
        } else {
            //如果不是数组，那就是元素，则不使用展开运算符
            result.push(item);
        }
    });
    // console.log(result);
    //返回压入完毕的一个新数组
    return result;
}

//slice 拆分数组---------------------------------
//参数是原数组，开始下标和结束下标，结束下标要加1
function slice(arr, begin, end) {
    //首先判断是否为空数组，是的话直接返回空数组即可
    if (arr.length === 0) {
        return [];
    }
    //判断begin,如果传入begin就是用begin，没有则为默认值0
    begin = begin || 0;

    //判断begin是否越界，如果开始下标大于数组长度，那么返回空数组
    if (begin >= arr.length) {
        return [];
    }

    //判断end,如果传入end就是用end，没有则为数组的长度
    end = end || arr.length;

    //如果end 小于 begin，那就将end设置为数组长度
    if (end < begin) {
        end = arr.length;
    }

    //声明空数组接收
    const result = [];

    //遍历对象
    for (let i = 0; i < arr.length; i++) {
        //判断下标是否满足条件，这里end如果<=的话，那么结束下标不用加1
        if (i >= begin && i < end) {
            result.push(arr[i]);
        }
    }
    //返回结果
    return result;
}