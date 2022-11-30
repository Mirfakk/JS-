
//翻转
function reverseString(str) {
    //可以借助数组，先将字符串转换为数组

    // let arr = str.split(''); //使用split将字符串分割为数组
    let arr = [...str];//也可以使用拓展运算符转换为数组
    //翻转数组
    arr.reverse();
    //用空字符串做连接器，将翻转后的数组拼接起来
    let s = arr.join('');
    return s;
}

//判断是否回文
function palindrome(str) {
    // return reverseString(str) === str;//老师的方法
    //将字符串转换为数组后，将其反转，然后判断反转前后是否一致即可
    let arr = [...str];
    console.log(arr);
    //定义新变量接收反转数组
    let newArr = reverseString(str);
    console.log(newArr);
    //判断反转前后是否一致
    return str === newArr;//这里将传进来的字符串比较，而不是跟转换为数组的字符串比较
}

//传入操作的字符串，截取的长度
function truncate(str, size) {
    //第一个参数，从0开始截取,第二个参数是结束的下标+1,传入size即可
    return str.slice(0, size) + '...';//只保留前10个元素，多出的用...表示
}