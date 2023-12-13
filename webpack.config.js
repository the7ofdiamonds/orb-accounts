const defaultConfig = require('@wordpress/scripts/config/webpack.config');
const path = require('path');
const dotenv = require('dotenv-webpack');
const envPath = `.env`;
const webpack = require('webpack');

module.exports = {
    ...defaultConfig,
    target: 'web',
    entry: './src/index.js',
    output: {
        filename: 'index.js',
        path: path.resolve(__dirname, 'dist'),
    },
    mode: 'development',
    module: {
        ...defaultConfig.module,
        rules: [
            ...defaultConfig.module.rules,
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options:
                    {
                        "presets": ["@babel/preset-env", "@babel/preset-react"]
                    },
                },
            },
        ],
    },
    resolve: {
        extensions: ['.js', '.jsx'],
        fallback: {
            ...defaultConfig.resolve.fallback,
            "crypto": require.resolve("crypto-browserify"),
            "stream": require.resolve("stream-browserify"),
            "os": require.resolve("os-browserify/browser")
        }
    },
    plugins: [
        ...defaultConfig.plugins,
        new dotenv({ path: envPath }),
        new webpack.ProvidePlugin({
            process: 'process/browser.js',
        }),
    ]
};