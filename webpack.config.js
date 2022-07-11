const path = require('path');

module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'kfunc.js',
        path: path.resolve(__dirname, 'dist'),
        libraryExport: "default",
        libraryTarget: "umd",
        library: "Kfunc"
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: ['es2015']
                    }
                }
            }
        ]
    },
    mode: 'production'
};