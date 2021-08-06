import { defineConfig, } from 'dumi';

export default defineConfig({
    chainWebpack(memo) {
        // memo.plugins.delete('copy');
    },
    title: 'AtheneUI',
    mode: 'site',
    logo: '/images/favicon.png',
    outputPath: 'site',
    exportStatic: {},
    publicPath: './',
    history: {
        type: 'hash',
    },
    theme: {
        '@primary-color': '#DDDDDD',
    },
    navs: {
        'en-US': [
            null,
            {
                title: 'GitHub',
                path: 'https://github.com/AtheneUI/athene-ui',
            },
            {
                title: 'changelog',
                path: 'https://www.baidu.com',
            },
        ],
        'zh-CN': [
            null,
            {
                title: 'GitHub',
                path: 'https://github.com/AtheneUI/athene-ui',
            },
            {
                title: '更新日志',
                path: 'https://www.baidu.com',
            },
        ],
    },
});