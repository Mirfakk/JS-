//传入 回调函数和间隔时间
function debounce(callback, time) {
    //定时器的变量
    let timeId = null;
    //返回一个函数
    //传入时间对象
    return function (e) {
        //判断，如果timeId不等于null，就代表有一个定时器在工作,那就把正在工作的定时器清空
        if (timeId !== null) {
            clearTimeout(timeId);
        }
        //启动定时器
        timeId = setTimeout(() => {
            //执行回调函数
            callback.call(this, e);
            //重置定时器变量
            timeId = null;
        }, time)
    }
}