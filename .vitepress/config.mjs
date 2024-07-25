import {defineConfig} from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
    title: "升华工作室｜文档",
    lang: 'zh-CN',
    titleTemplate: ':title - 升华工作室文档站',
    description: "中南大学升华工作室的文档网站，包含代码规范，技术教学文档，项目文档等",
    lastUpdated: true,
    themeConfig: {
        // https://vitepress.dev/reference/default-theme-config
        logo: 'logo.png',
        nav: [
            {text: '主页', link: '/', activeMatch: '^/$'},
            {text: '代码规范', link: '/styleguide/', activeMatch: '^/styleguide/'},
            {text: '问题解决', link: '/solutions/', activeMatch: '^/solutions/'},
            {text: '快速上手｜Spring Boot', link: '/springboot-quickstart/', activeMatch: '^/springboot-quickstart/'},
            {text: '快速上手｜Vue.js 3', link: '/vue3-quickstart/', activeMatch: '^/vue3-quickstart/'},
            {text: '项目｜社团注册', link: '/club-register/', activeMatch: '^/club-register/'},
            {text: '项目｜实践打卡', link: '/practice-checkin/', activeMatch: '^/practice-checkin/'},
            {text: '项目｜升华网', link: '/shenghua-web/', activeMatch: '^/shenghua-web/'},
        ],

        sidebar: {
            '/styleguide/': [
                {
                    text: '代码规范',
                    items: [
                        {text: '简述', link: '/styleguide/'},
                        {text: 'PART1-前后端通信', link: '/styleguide/part1'},
                        {text: 'PART2-前端（Vue.js）', link: '/styleguide/part2'},
                        {text: 'PART3-后端（FastAPI & Spring Boot）', link: '/styleguide/part3'},
                        {text: 'PART4-部署与运维', link: '/styleguide/part4'},
                        {text: 'PART5-其他', link: '/styleguide/part5'}
                    ]
                }
            ],
            '/solutions/': [
                {
                    text: '问题解决',
                    items: [
                        {text: '简述', link: '/solutions/'},
                        {text: 'Vue3项目中使用微信SDK开发微信网页', link: '/solutions/wx-js-sdk-config'},
                        {text: '使用Less变量和媒体查询实现深浅色模式适配', link: '/solutions/less-media-variable'},
                    ],
                }
            ],
            '/springboot-quickstart/': [],
            '/vue3-quickstart/': [],
            '/club-register/': [],
            '/practice-checkin/': [],
            '/shenghua-web/': [],
        },

        socialLinks: [
            {icon: 'github', link: 'https://github.com/54shenghua/54sh-docs'}
        ],
        footer: {
            message: '部分文档内容遵循 MIT License.',
            copyright: 'Copyright © 2024-present 升华工作室'
        },
        search: {
            provider: 'local',
            options: {
                locales: {
                    zh: {
                        translations: {
                            button: {
                                buttonText: '搜索文档',
                                buttonAriaLabel: '搜索文档'
                            },
                            modal: {
                                noResultsText: '无法找到相关结果',
                                resetButtonTitle: '清除查询条件',
                                footer: {
                                    selectText: '选择',
                                    navigateText: '切换'
                                }
                            }
                        }
                    }
                }
            }
        },
    }
})
