
//接收的参数不固定
//将若干个对象合并，若是重名，则形成数组
function mergeObject(...objs) {
    //声明一个空对象
    const result = {};
    //遍历所有的参数对象
    objs.forEach(obj => {
        //获取当前对象所有的属性
        Object.keys(obj).forEach(key => {
            //这里的key就是 对象的键值对的键名 a,b,c
            // console.log(key);
            //检测result中是否存在key属性
            if (result.hasOwnProperty(key)) {
                //先拿到原来的值，再把新加入的值放进去，形成数组
                result[key] = [].concat(result[key], obj[key]);
            } else {
                //如果没有 则直接写入
                result[key] = obj[key];
            }
        })
    })
    return result;
}