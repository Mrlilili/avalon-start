var avalon = require('avalon2');
require('mmRequest');
var t = require("./t");

avalon.ajax({
    url: 'http://op.juhe.cn/onebox/weather/query',
    type: 'get',
    dataType:'jsonp',
    success: function (e) {
        console.log(e);
    }
})


//var obj = [{
//    a: [{b: [{d: 'e'}]}]
//}]
//var app = {
//    $id: 'test',
//    a: '123',
//    arr: ['aaa', 'bbb', 'ccc'],
//    obj: obj,
//    font: t,
//    fuc: function () {
//        alert(123);
//    }
//}
//avalon.define(app)
