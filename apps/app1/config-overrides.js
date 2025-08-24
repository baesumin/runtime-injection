const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    webpack: config => {
        config.output.filename = 'main.js'
        config.output.publicPath = 'http://localhost:7001/'
        config.output.library = {
            type: 'umd',
            name: 'app1',
        };

        // HtmlWebpackPlugin을 찾아서 제거
        config.plugins = config.plugins.filter(
            plugin => plugin.constructor.name !== 'HtmlWebpackPlugin'
        );

        // 수정된 옵션으로 HtmlWebpackPlugin 다시 삽입
        config.plugins.push(
            new HtmlWebpackPlugin({
                template: 'public/index.html', // CRA 기본 경로
                scriptLoading: 'blocking',
                inject: 'head',
                // 필요한 다른 옵션 추가
            })
        );

        // MiniCssExtractPlugin 찾아서 제거
        config.plugins = config.plugins.filter(
            plugin => plugin.constructor.name !== 'MiniCssExtractPlugin'
        );

        config.module.rules.forEach(rule => {
            rule?.oneOf?.forEach(oneOfRule => {
                const _loader = oneOfRule?.use?.find(loader =>
                    loader === require.resolve('style-loader') ||
                    loader.loader === MiniCssExtractPlugin.loader)

                if (_loader) {
                    oneOfRule.use = oneOfRule.use.map(loader =>
                        loader.loader === MiniCssExtractPlugin.loader ||
                            loader === require.resolve('style-loader')
                            ? require.resolve('to-string-loader')
                            : loader
                    )
                }
            })
        })

        return config;
    }
}
