// Core
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const { resolve } = require('path');

module.exports = () => {
    return {
        mode:    'none',
        devtool: false,
        output: {
            filename: 'bundle.js',
            path:     resolve(__dirname, './build'),
        },
        plugins: [
            new HtmlWebpackPlugin({
                template: './static/template.html',
                title: 'УуууууУУУУ',
            }),
            new CleanWebpackPlugin('./build'),
        ],
    }
};