
//参数：父级元素选择器，触发事件类型，回调函数，子元素选择器
function addEventListener(el, type, fn, selector) {
    //判断el 的类型，如果是字符串，就变成元素对象
    if (typeof el === 'string') {
        //获取事件源
        el = document.querySelector(el);

    }

    //事件绑定分两种情况，一种是传了子元素，一种是没传子元素
    //如果没传子元素，给ul绑定事件，如果传了子元素，那就做事件委托
    //没传子元素
    if (!selector) {
        //给el绑定事件
        el.addEventListener(type, fn);
    } else {
        //传了子元素，也是给el绑定事件
        el.addEventListener(type, function (e) {
            //获取点击的目标事件源，这里点击完ul后，应该判断当前点的是不是li，是的话就执行回调函数，不是就不执行
            const target = e.target;//获取目标元素
            //判断选择器和目标元素是否相符合 使用matches方法
            if (target.matches(selector)) {
                //若符合，调用回调函数，反之不操作
                fn.call(target, e);//第一个参数放target指向，第二个放事件对象e
            }
        });
    }
}