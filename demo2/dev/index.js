//define(['jquery'], function ($) {
//
//})
var avalon = require('avalon2');
require('jquery');
require('mmRequest');
var t = require("./t");
console.log($.fn.jquery);
avalon.ajax({
    url: 'http://op.juhe.cn/onebox/weather/query',
    type: 'get',
    dataType: 'jsonp',
    success: function (e) {
        console.log(e);
    }
})


var obj = [1, 2, 3, 4, 5, 6, 7, 8, 9]
var app = {
    $id: 'test',
    a: '123',
    arr: ['aaa', 'bbb', 'ccc'],
    obj: obj,
    font: t,
    fuc: function () {
        alert(123);
    }
}
avalon.define(app)


avalon.effect('animate', {
    enter: function (el, done) {
        $(el).animate({width: 300}, 1000, done)
    },
    leave: function (el, done) {
        $(el).animate({width: 100}, 1000, done)
    }
})
var vm = avalon.define({
    $id: 'effect',
    aaa: "test",
    action: 'enter',
    enterCb: function () {
        avalon.log('动画完成')
    },
    leaveCb: function () {
        avalon.log('动画回到原点')
    }
})
