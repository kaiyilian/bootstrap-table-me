/**
 * Created by Administrator on 2017/12/20.
 * bootstrap 静态表格
 */

"use strict";

let $bootstrap_basic_container;//页面容器

let bootstrap_basic = {
    arr: [
        {
            id: "1",
            name: "张三",
            phone: "13151200013",
            check_in_time: "2017-12-20",
            position: "H5工程师",
            remark: ""
        },
        {
            id: "1",
            name: "张三",
            phone: "13151200013",
            check_in_time: "2017-12-20",
            position: "H5工程师",
            remark: ""
        },
        {
            id: "1",
            name: "张三",
            phone: "13151200013",
            check_in_time: "2017-12-20",
            position: "H5工程师",
            remark: ""
        },
        {
            id: "1",
            name: "张三",
            phone: "13151200013",
            check_in_time: "2017-12-20",
            position: "H5工程师",
            remark: ""
        },
        {
            id: "1",
            name: "张三",
            phone: "13151200013",
            check_in_time: "2017-12-20",
            position: "H5工程师",
            remark: ""
        },
        {
            id: "1",
            name: "张三",
            phone: "13151200013",
            check_in_time: "2017-12-20",
            position: "H5工程师",
            remark: ""
        },
        {
            id: "1",
            name: "张三",
            phone: "13151200013",
            check_in_time: "2017-12-20",
            position: "H5工程师",
            remark: ""
        },
        {
            id: "1",
            name: "张三",
            phone: "13151200013",
            check_in_time: "2017-12-20",
            position: "H5工程师",
            remark: ""
        },
        {
            id: "1",
            name: "张三",
            phone: "13151200013",
            check_in_time: "2017-12-20",
            position: "H5工程师",
            remark: ""
        },
        {
            id: "1",
            name: "张三",
            phone: "13151200013",
            check_in_time: "2017-12-20",
            position: "H5工程师",
            remark: ""
        }
    ],//数据数组

    //初始化 页面
    init(){

        $bootstrap_basic_container = $(".bootstrap_basic_container");

        bootstrap_basic.initData();//初始化 数据
        bootstrap_basic.initTb();//表格 初始化（分页）

    },
    //初始化 数据
    initData(){

        let list = "";
        for (let $item of bootstrap_basic.arr) {

            let id = $item.id ? $item.id : "";//
            let name = $item.name ? $item.name : "";//
            let phone = $item.phone ? $item.phone : "";//
            let check_in_time = $item.check_in_time ? $item.check_in_time : "";//
            let position = $item.position ? $item.position : "";//
            let remark = $item.remark ? $item.remark : "";//

            list += "<tr class='item' " +
                "data-id='" + id + "' " +
                ">" +
                "<td class='choose_item' onclick=''>" +
                "<img src='../image/UnChoose.png'/>" +
                "</td>" +
                "<td class='name'>" + name + "</td>" +
                "<td class='phone'>" + phone + "</td>" +
                "<td class='check_in_time'>" + check_in_time + "</td>" +
                "<td class='position'>" + position + "</td>" +
                "<td class='remark'>" + remark + "</td>" +
                "<td class='operate'>" +
                "<button class='btn btn-sm btn-success btn_modify'>修改</button>" +
                "<button class='btn btn-sm btn-success btn_del'>删除</button>" +
                "</td>" +
                "</tr>";

        }
        $bootstrap_basic_container.find(".table_container table tbody").html(list);

    },

    //表格 初始化（分页）
    initTb(){

        let $bootstrap_basic_table = $bootstrap_basic_container.find(".bootstrap_basic_table");
        let $item = $bootstrap_basic_table.find("tbody .item");
        let $page_container = $bootstrap_basic_container.find('.pager_container');

        if ($item.length <= 0) {
            $page_container.hide();
        }
        else {

            let options = {
                bootstrapMajorVersion: 3, //版本  3是ul  2 是div
                //containerClass:"sdfsaf",
                //size: "small",//大小
                alignment: "left",//对齐方式
                currentPage: 1, //当前页数
                totalPages: 3, //总页数
                numberOfPages: 5,//每页显示的 页数
                useBootstrapTooltip: true,//是否使用 bootstrap 自带的提示框
                itemContainerClass: function (type, page, currentpage) {  //每项的类名
                    //alert(type + "  " + page + "  " + currentpage)
                    var classname = "p_item ";

                    switch (type) {
                        case "first":
                            classname += "p_first";
                            break;
                        case "last":
                            classname += "p_last";
                            break;
                        case "prev":
                            classname += "p_prev";
                            break;
                        case "next":
                            classname += "p_next";
                            break;
                        case "page":
                            classname += "p_page";
                            break;
                    }

                    if (page === currentpage) {
                        classname += " active "
                    }

                    return classname;
                },
                itemTexts: function (type, page, current) {  //
                    switch (type) {
                        case "first":
                            return "首页";
                        case "prev":
                            return "上一页";
                        case "next":
                            return "下一页";
                        case "last":
                            return "末页";
                        case "page":
                            return page;
                    }
                },
                tooltipTitles: function (type, page, current) {
                    switch (type) {
                        case "first":
                            return "去首页";
                        case "prev":
                            return "上一页";
                        case "next":
                            return "下一页";
                        case "last":
                            return "去末页";
                        case "page":
                            return page === current ? "当前页数 " + page : "前往第 " + page + " 页"
                    }
                },
                onPageClicked: function (event, originalEvent, type, page) { //点击事件
                    //alert(page)

                    var currentTarget = $(event.currentTarget);

                    bootstrap_basic.initData();//初始化 数据

                    //switch (type) {
                    //    case "first": currentTarget.bootstrapPaginator("show",1); break;
                    //    case "prev": currentTarget.bootstrapPaginator("showPrevious"); break;
                    //    case "next": currentTarget.bootstrapPaginator("showNext"); break;
                    //    case "last": currentTarget.bootstrapPaginator("showLast"); break;
                    //    case "page": currentTarget.bootstrapPaginator("show", page)
                    //}

                }

            };

            let ul = '<ul class="pagenation" style="float:right;"></ul>';
            $page_container.show();
            $page_container.html(ul);
            $page_container.find(".pagenation").bootstrapPaginator(options);

        }

    }

};

$(function () {
    bootstrap_basic.init();
});
