import { defineConfig } from 'vitepress';

// https://vitepress.dev/reference/site-config
export default defineConfig({
    title: "升华工作室｜文档",
    lang: 'zh-CN',
    titleTemplate: ':title - 升华工作室文档站',
    description: "中南大学升华工作室的文档网站，包含代码规范，技术教学文档，项目文档等",
    lastUpdated: true,
    publicDir: 'public',
    head: [['link', { rel: 'icon', href: './favicon.ico' }]],
    sitemap: {
        hostname: 'https://docs.54sher.com'
    },
    themeConfig: {
        // https://vitepress.dev/reference/default-theme-config
        logo: '/logo.png',
        nav: [
            // 优化nav层次结构
            // { text: '主页', link: '/', activeMatch: '^/$' },
            {
                text: '开发指南',
                items: [
                    { text: '代码规范', link: '/styleguide/', activeMatch: '^/styleguide/' },
                    { text: '问题解决', link: '/solutions/', activeMatch: '^/solutions/' },
                ]
            },
            {
                text: '快速上手',
                items: [
                    { text: 'Spring Boot', link: '/springboot-quickstart/', activeMatch: '^/springboot-quickstart/' },
                    { text: 'Vue.js 3', link: '/vue3-quickstart/', activeMatch: '^/vue3-quickstart/' },
                ]
            },
            {
                text: '现有项目',
                items: [
                    { text: '👏升华网', link: '/shenghua-web/', activeMatch: '^/shenghua-web/' },
                    { text: '社团注册', link: '/club-register/', activeMatch: '^/club-register/' },
                    { text: '实践打卡', link: '/practice-checkin/', activeMatch: '^/practice-checkin/' },
                ]
            },
        ],

        sidebar: {
            '/styleguide/': [
                {
                    text: '代码规范',
                    items: [
                        { text: '简述', link: '/styleguide/' },
                        { text: 'PART1-前后端通信', link: '/styleguide/part1' },
                        { text: 'PART2-前端（Vue.js）', link: '/styleguide/part2' },
                        { text: 'PART3-后端（FastAPI & Spring Boot）', link: '/styleguide/part3' },
                        { text: 'PART4-部署与运维', link: '/styleguide/part4' },
                        { text: 'PART5-其他', link: '/styleguide/part5' }
                    ]
                }
            ],
            '/solutions/': [
                {
                    text: '问题解决',
                    items: [
                        { text: '简述', link: '/solutions/' },
                        { text: 'Vue3项目中使用微信SDK开发微信网页', link: '/solutions/wx-js-sdk-config' },
                        { text: '使用Less变量和媒体查询实现深浅色模式适配', link: '/solutions/less-media-variable' },
                    ],
                }
            ],
            '/springboot-quickstart/': [],
            '/vue3-quickstart/': [],
            '/club-register/': [],
            '/practice-checkin/': [],
            '/shenghua-web/': [
                {
                    text: '升华网改版项目',
                    items: [
                        { text: '项目概述', link: '/shenghua-web/' },
                    ],
                },
                {
                    text: '内容维护',
                    items: [
                        { text: '维护指南', link: '/shenghua-web/content-guide' },
                    ],
                },
                {
                    text: '前端',
                    items: [
                        { text: '前端概述', link: '/shenghua-web/frontend/introduce/' },
                        { text: '页面样式', link: '/shenghua-web/frontend/style/' },
                    ],
                },
                {
                    text: '后端',
                    items: [
                        { text: '博达系统概述', link: '/shenghua-web/backend/introduce/' },
                        { text: '博达系统语法', link: '/shenghua-web/backend/language/' },
                    ],
                },
            ],
        },

        socialLinks: [
            { icon: 'github', link: 'https://github.com/54shenghua/54sh-docs' }
        ],
        footer: {
            message: '部分文档内容遵循 MIT License, 请参考文档版权声明',
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
        editLink: {
            pattern: 'https://github.com/54shenghua/54sh-docs',
            text: '在GitHub上编辑此条目'
        },
        lastUpdated: {
            text: '最后一次更新',
            formatOptions: {
                dateStyle: 'short',
                timeStyle: 'short'
            }
        },
        docFooter: {
            prev: '上一篇',
            next: '下一篇'
        }
    }
})
