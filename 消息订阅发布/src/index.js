
//对象
const PubSub = {
    //订阅唯一编号
    id: 1,
    //频道与回调保存容器
    callbacks: {
        // pay: {
        //     token_1: fn,
        //     token_2: fn2
        // }
    }
}

//对象里包含两个方法

//订阅频道
//参数：频道，回调函数
PubSub.subscribe = function (channel, callback) {
    //创建唯一编号
    let token = 'token_' + this.id++;
    //先判断 callbacks属性中是否存在着 pay
    if (this.callbacks[channel]) {
        //如果存在，就压入
        this.callbacks[channel][token] = callback;
    } else {
        //不存在就初始化结构
        this.callbacks[channel] = {
            //因为是变量，声明时要用中括号表示
            [token]: callback
        }
    }
    //返回频道订阅的id
    return token;
}

//发布消息
//参数：频道，数据
PubSub.publish = function (channel, data) {
    //如果有回调，获取当前频道中的所有回调
    if (this.callbacks[channel]) {
        //
        Object.values(this.callbacks[channel]).forEach(callback => {
            //执行回调
            callback(data);
        });

    }
}

//取消订阅
//根据唯一的编号进行取消
/**
 * 如果没有传值，取消所有的订阅
 * 如果传入了token，取消指定的token
 * 如果传入 msgName (例如pay)，那就把所有pay都取消掉，（可能包含多个token）
 */

//参数可能是频道名，也可能是id  
PubSub.unsubscribe = function (flag) {
    //如果没有传值，清空callbacks
    if (flag == undefined) {
        this.callbacks = {};
    } else if (typeof flag === 'string') {
        //如果传入了字符串，判断该字符串是订阅的id还是频道的名字
        //等于 0 就表示以该字符串开头
        if (flag.indexOf('token_') === 0) {
            //如果是，表明是订阅id
            //先遍历所有的id,来找到对应的元素
            let callbackObj = Object.values(this.callbacks).find(obj => obj.hasOwnProperty(flag));
            //判断，如果找到了就删除
            if (callbackObj) {
                delete callbackObj[flag];
            }
        }

    } else {
        //如果不是,就是频道名称
        delete this.callbacks[flag];
    }
}
