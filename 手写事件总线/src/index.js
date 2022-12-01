//使用了eventBus.on， 是一个对象方法
const eventBus = {
    //保存类型与回调的容器 on时存进来，emit时取出去
    callbacks: {

    }
};

//该对象存在两个方法
//参数：类型，数据
//绑定事件方法
eventBus.on = function (type, callback) {
    //判断
    if (this.callbacks[type]) {
        //如果存在该类型事件，就压入
        this.callbacks[type].push(callback);
    } else {
        //如果callbacks属性中不存在该类型事件，那就往直接里存
        this.callbacks[type] = [callback];
    }
}

//参数：类型，数据
//触发事件方法,到容器中找有没有该类型的事件，有的话就取出来
eventBus.emit = function (type, data) {
    //判断
    if (this.callbacks[type] && this.callbacks[type].length > 0) {
        //如果有这个类型并且大于0，那就遍历数组
        this.callbacks[type].forEach(callback => {
            //执行回调
            callback(data);
        });
    }
}

//事件的解绑
//这里eventName就是传进来清除的事件名
eventBus.off = function (eventName) {
    //若传入事件名
    if (eventName) {
        //那就删除该事件名回调
        delete this.callbacks[eventName];
    } else {
        //若没有传事件名，则全部移除
        this.callbacks = {};
    }
}