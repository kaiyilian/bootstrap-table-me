/**
 * Created by Administrator on 2017/12/20.
 * bootstrap 静态表格
 */

"use strict";

let bootstrap_basic = {
    arr: [
        {
            name: "张三",
            phone: "13151200013",
            check_in_time: "2017-12-20",
            position: "H5工程师",
            remark: ""
        }
    ],//数据数组

    //初始化 页面
    init(){

        let arr = [{
            name: "张三"
        }];

        console.log(arr);





    }

};

$(function () {
    bootstrap_basic.init();
});
