const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    webpack: config => {
        // output 라이브러리 설정
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

        return config;
    }
}
