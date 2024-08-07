# 概述
本页面将介绍整个升华网项目的大致情况
::: tip
升华网开发工作全部完成，已就绪。目前等待信网中心和校团委协调上线。
:::

::: warning
请仔细阅读内容维护指南，错误的内容维护会导致页面显示错误。
:::

::: danger
根据《教育行业信息系统安全等级保护定级工作指南（试行）》的通知（教技厅函【2014】74号），
中南大学站群平台属于“学校信息系统安全保护等级建议”中 **I类学校的（04）综合服务类（01）门户网站**，等保定级为三级。

请恪守学校规定与国家法律法规，违者除了会依照学校规定处理，还将追究法律责任。
:::

## 开发者名单

<script setup>
import { VPTeamMembers } from 'vitepress/theme'

// 在任
const Members = [
  {
    avatar: 'https://www.github.com/grtsinry43.png',
    name: 'grtsinry43',
    title: 'Dev',
    org:'升华工作室',
    orgLink:'https://github.com/54shenghua',
    links: [
      { icon: 'github', link: 'https://github.com/grtsinry43' }
    ]
  },  
]

// 老东西
const OldMembers = [
  {
    avatar: 'https://www.github.com/steamfinder.png',
    name: 'SteamFinder',
    title: 'Dev',
    org:'升华工作室',
    orgLink:'https://github.com/54shenghua',
    links: [
      { icon: 'github', link: 'https://github.com/steamfinder' }
    ]
  },
  {
    avatar: 'https://www.github.com/thetheorange.png',
    name: 'thetheOrange',
    title: 'Dev',
    org:'升华工作室',
    orgLink:'https://github.com/54shenghua',
    links: [
      { icon: 'github', link: 'https://github.com/thetheorange' }
    ]
  },
]
</script>
### 全栈开发

在任成员
<VPTeamMembers size="small" :members="Members" />

离任成员
<VPTeamMembers size="small" :members="OldMembers" />

### 后端开发
- 韦姚宇
- 季昆霖

### 设计
- 赵彦哲

## 前言
升华网是中南大学校团委官方网站，承担校团委信息发布的重任，校内多数学生活动相关的信息和通知通过升华网公布。

升华网诞生在2001年。二十一世纪伊始，互联网刚刚展露头角，彼时国内各个高校还没有全面拥抱互联网进行信息化工作。

中南大学作为最年轻的985高校，走在了时代的潮头，依托校团委成立了升华网，成为了国内首家网上团校。

随着升华网的发展，教育系统内许多领导和兄弟高校都来学习，在此期间，中南小团子这一形象icon产生，深受中南学子喜爱。

升华网历史悠久，因此也产生了许多历史包袱。升华网主要有三个阶段：
- 2001 - 2010s 创立初期
- 2010s - 2018 成熟期，网站功能和样式基本稳定
- 2018 - 2024 学校统一使用博达站群系统，页面样式较为单一，甚至有些简陋
- 2024至今 依托博达系统，重构升华网前端页面和后端逻辑，更美观，更流畅，更智能

## 改版项目技术栈选择
由于等保要求，升华网作为一类学校的官网站群（等保三级），需要统一使用学校的站群平台（博达系统）进行网站建设。

博达系统提供了一整套站群解决方案，开发整体类似于PHP/JSP前后端耦合式开发，无需使用axios等进行数据交互以及react/vue进行渲染（也无法使用...）。

所以前端技术可选择性不高，后端则毫无选择，必须使用博达系统。

升华网的主要功能是公布通知等信息，在移动互联网影响力大幅增强的今天，大多数同学使用电脑的时间在减少，因此要求升华网能够满足桌面/移动双端访问的需求。

目前来看，最为经济快速的方案就是响应式布局。响应式布局开发的鼻祖和利刃就是Bootstrap，Bootstrap曾称霸前端界，即使react/vue成为新秀，但是Bootstrap
仍被许多开发者使用，Antd等优秀前端库也大量借鉴Bootstrap，作为历经考验的响应式框架，选择它是应有之义。

升华网中使用的许多icon都可以利用fontawesome实现，同时视频播放可以使用轻量快速的Dplayer。

我们现在已经有了一份技术栈选型名单。

::: warning
警惕上游供应链投毒，此处使用的为字节跳动静态资源CDN
:::

|名称|说明|静态文件CDN地址|
|----|----|----|
|Bootstrap|响应式前端框架|[5.1.1 CSS](https://lf6-cdn-tos.bytecdntp.com/cdn/expire-1-M/bootstrap/5.1.1/css/bootstrap.min.css) [5.1.1 JS](https://lf26-cdn-tos.bytecdntp.com/cdn/expire-1-M/bootstrap/5.1.1/js/bootstrap.bundle.min.js)|
|Fontawesome|矢量图标|[4.7.0](https://lf26-cdn-tos.bytecdntp.com/cdn/expire-1-M/font-awesome/4.7.0/css/font-awesome.min.css)|
|Dplayer|视频播放|[1.26.0](https://lf9-cdn-tos.bytecdntp.com/cdn/expire-1-M/dplayer/1.26.0/DPlayer.min.js)|

