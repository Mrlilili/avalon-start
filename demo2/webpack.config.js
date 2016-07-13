var webpack = require("webpack");

var path = require("path");
module.exports = {
    entry: './dev/index', //我们开发时的入口文件

    output: {path: path.join(__dirname, "dist"), filename: "bundle.js"}, //页面引用的文件
    module: {
        loaders: [
            {test: /\.css$/, loader: 'style-loader!css-loader'},
            {test: /\.tpl$/, loader: 'text-loader'}
        ],
        preLoaders: [
            {test: /\.js$/, loader: "amdcss-loader"}
        ]
    },
    resolve: {
        extensions: ['','.js', ".tpl", ".css"],
        alias: {
            avalon1: '../../lib/avalon/avalon1.4.7.shim', //在正常情况下我们以CommonJS风格引用avalon,以require('avalon')
            avalon2: '../../lib/avalon/avalon2.0.1',
            mmRequest: '../../lib/mmrequest/mmRequest',
            jquery: '../../lib/jquery/jquery',

        }
    },
    amd:{jquery:true},
}
