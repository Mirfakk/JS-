
//接收一个对象，里面有四个参数,使用解构赋值的方式，这样可以直接在函数中使用对象的属性
function axios({ method, url, params, data }) {
    //方法转换大写
    method = method.toUpperCase();
    //返回值是一个promise对象
    return new Promise((resolve, reject) => {
        //四步骤
        //1.创建对象
        const xhr = new XMLHttpRequest();
        //2.初始化
        //先处理params对象,将其转换为字符串 a=100 ...缀到后面才能发送请求
        //遍历
        let str = '';
        for (let k in params) {
            //a相当于键名，100相当于键值，a:100
            str += `${k}=${params[k]}&`;
        }
        //将&符移除
        str = str.slice(0, -1);
        xhr.open(method, url + '?' + str);
        //3.发送
        //如果是post要发送参数，所以要判断
        if (method === 'POST' || method === 'PUT' || method === 'DELETE') {
            //设置请求头信息 Content-type mime
            xhr.setRequestHeader('Content-type', 'application/json');
            //设置请求体,要将data转换为字符串
            xhr.send(JSON.stringify(data));
        } else {
            xhr.send();
        }
        //对响应结果预设，要求为json格式
        xhr.responseType = 'json';
        //4.处理结果
        xhr.onreadystatechange = function () {
            //
            if (xhr.readyState === 4) {
                //判断相应状态码 2xx为成功
                if (xhr.status >= 200 && xhr.status < 300) {
                    //改变成功状态,用对象来表示
                    resolve({
                        status: xhr.status,//成功状态码
                        message: xhr.statusText,//相应状态字符串
                        body: xhr.response,//响应体
                    });
                } else {
                    reject(new Error('请求失败，失败的状态码为' + xhr.status));
                }
            }
        }
    })
}

//添加axios身上的一些方法
//接收参数：url，配置对象
axios.get = function (url, options) {
    //ajax 请求get
    //直接调用axios，运行时需要接收对象参数
    let config = axios(Object.assign(options, { method: 'GET', url: url }));
    // console.log(config);
    return axios(config);
}
axios.post = function (url, options) {
    //ajax 请求get
    //直接调用axios，运行时需要接收对象参数
    let config = axios(Object.assign(options, { method: 'POST', url: url }));
    // console.log(config);
    return axios(config);
}
axios.put = function (url, options) {
    //ajax 请求get
    //直接调用axios，运行时需要接收对象参数
    let config = axios(Object.assign(options, { method: 'PUT', url: url }));
    // console.log(config);
    return axios(config);
}
axios.delete = function (url, options) {
    //ajax 请求get
    //直接调用axios，运行时需要接收对象参数
    let config = axios(Object.assign(options, { method: 'DELETE', url: url }));
    // console.log(config);
    return axios(config);
}