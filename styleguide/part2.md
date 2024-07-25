# PART 2 - 前端（Vue.js）

::: tip
接下来就是适合于前端的小伙伴啦，会先从 `axios` 的封装开始，还有关于 `Vue` 的项目的规范，以及一些细节问题，希望大家能够有所收获。
:::

## 2.1 - axios 封装

在项目中引入 `axios` 后，我们需要对其进行封装，以便于更好地处理请求和响应，比如添加请求拦截器，响应拦截器，统一处理错误等等。

首先，这是我在项目中经常使用的 `axios` 封装，大家可以参考一下（这里用了`vant`的弹窗组件，可以根据自己的项目需求进行修改，比如`El-Message`什么的都可以哇）：

::: details 点我查看代码
```js
import axios from "axios";
import {showDialog, showNotify} from "vant";
import {getToken, setToken} from "@/util/auth.js";

// 统一封装，便于调用
const ins = axios.create({
    baseURL: "/api/v2",
    timeout: 5000,
    headers: {
        "Content-Type": "application/json",
    },
});
ins.interceptors.response.use(
    function (resp) {
        // 如果响应头中有token，则存储到localStorage中，以便下次请求时携带
        console.log(resp.headers)
        if (resp.headers.Authorization) {
            console.log("存储token")
            setToken(resp.headers.Authorization);
        }
        if (resp.data.code !== 0) {
            showNotify({
                message: resp.data.msg,
                type: "warning",
            });
            return null;
        } else if (resp.data.code === 404) {
            showDialog({
                title: "提示",
                message: resp.data.msg,
            });
            return null;
        }

        // 成功则直接返回数据
        return resp.data.data;
    },
    function (error) {
        // 错误的响应处理
        showNotify({
            message: `获取数据失败：${error}`,
            type: "danger",
        });
        return null;
    });

ins.interceptors.request.use(
    function (config) {
        // 在localStorage中获取token
        const token = getToken();
        if (token) {
            // 如果存在token，则在请求头中携带token
            config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
    },
    function (error) {
        showNotify({
            message: `请求失败：${error}`,
            type: "danger",
        })
        return Promise.reject(error);
    });

export default ins;
```
:::

我们开始逐步讲解：

1. 首先我们引入了 `axios`，然后创建了一个实例 `ins`，并设置了一些默认值，比如 `baseURL`，`timeout`，`headers` 等等。
```js {2}
const ins = axios.create({
    baseURL: "/api/v2", // 设置基础URL
    timeout: 5000, // 设置超时时间
    headers: {
        "Content-Type": "application/json", // 设置请求头
    },
});
```
其中，`baseURL` 一定要确定好，这样在请求时就不用每次都写全路径了，这里补充一下，如果你正在本地开发，一定会设置代理服务器：

```js {11-19}
export default defineConfig({
  plugins: [
    vue(),
    VueDevTools(),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  server: {
    proxy: {
      '/api': {
        target: 'http://localhost:8000',
        changeOrigin: true,
      }
    },
    host: '0.0.0.0',
  }
})
```
2.接下来就是拦截器的设置，这里我们设置了两个拦截器，一个是请求拦截器，一个是响应拦截器。

响应拦截器主要用来处理响应数据，比如判断响应头中是否有 `token`，如果有则存储到 `localStorage` 中，以便下次请求时携带；判断响应数据中的 `code` 字段，如果不为 0 则弹出提示框，当没有报错就直接返回数据。
```js {23}
ins.interceptors.response.use(
    function (resp) {
        // 如果响应头中有token，则存储到localStorage中，以便下次请求时携带
        console.log(resp.headers)
        if (resp.headers.Authorization) {
            setToken(resp.headers.Authorization);
        }
        if (resp.data.code !== 0) {
            showNotify({
                message: resp.data.msg,
                type: "warning",
            });
            return null;
        } else if (resp.data.code === 404) {
            showDialog({
                title: "提示",
                message: resp.data.msg,
            });
            return null;
        }

        // 成功则直接返回数据
        return resp.data.data;
    },
    function (error) {
        // 错误的响应处理
        showNotify({
            message: `获取数据失败：${error}`,
            type: "danger",
        });
        return null;
    });
```

::: tip
注意下这里的写法哦，我们获取`resp.data.data`，这样直接就是我们需要的数据了，不用每次都去解构，这样也方便我们后续的处理。
:::

请求拦截器主要用来处理请求数据，比如在请求头中添加 `token`，这样后端就可以根据 `token` 来判断用户的身份，然后返回相应的数据。
```js {7}
ins.interceptors.request.use(
    function (config) {
        // 在localStorage中获取token
        const token = getToken();
        if (token) {
            // 如果存在token，则在请求头中携带token
            config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
    },
    function (error) {
        showNotify({
            message: `请求失败：${error}`,
            type: "danger",
        })
        return Promise.reject(error);
    });
```

这样我们就完成了 `axios` 的封装，接下来我们就可以在项目中使用这个实例来进行请求了。

## 2.2 - Vue/Vite 项目规范

首先，我们明确一下项目的目录结构，这里我推荐一种目录结构，大家可以参考一下：

```
├── public
│   ├── favicon.ico
│   └── index.html //如果要是Vite就在src下
├── src
│   ├── api // 接口相关
│   │   ├── user.js
│   │   └── ...
│   ├── assets
│   │   ├── logo.png
│   │   └── ...
│   ├── components // 这里一定是公共组件，多次使用的组件一定要封装一下
│   │   ├── HelloWorld.vue
│   │   └── ...
│   ├── directives // 自定义指令
│   │   ├── index.js
│   │   └── ...
│   ├── mocks // 模拟数据，如果使用Vite mock服务额可能会在根目录下
│   │   ├── index.js
│   │   └── ...
│   ├── router // 路由相关
│   │   ├── index.js // 路由配置
│   │   └── ... // 这里可以根据模块来划分，也可以添加路由守卫
│   ├── store // 状态管理
│   │   ├── index.js // 状态管理配置
│   │   └── ... // 这里可以根据模块来划分（Vuex），如果是Pinia就直接每个模块一个文件，不需要index.js
│   ├── styles // 样式相关
│   │   ├── index.css/less/sass
│   │   └── ...
│   ├── utils // 工具函数
│   │   ├── index.js
│   │   └── ...
│   ├── views // 页面
│   │   ├── Home.vue
│   │   └── ... // 就是每个页面的组件，如果复杂或者存在子页面，可以再细分，创建目录
│   ├── App.vue // 根组件
│   └── main.js // 入口文件，这里可以引入全局样式，全局组件，全局插件等等
├── .gitignore // git忽略文件，一定要写好
├── package.json // 项目配置文件
├── vite.config.js // Vite配置文件
├── README.md // 项目说明文档
└── ...
```

