const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'bundle.js',
        path : path.resolve(__dirname,'dist'),
        clean:true,
    },
    module:{
        rules:[
            {
                test:/\.css$/i,
                use:['style-loader','css-loader'],
            },{
                test:/\.(png|jpg|svg|gif)$/i,
                type: 'asset/resource',
            }
        ],
    },
    plugins:[
        new HtmlWebpackPlugin({
            template: './src/template.html',
        }),
    ],
}