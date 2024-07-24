# 本站食用指北

## 如何参与文档编写

本站文档采用Markdown格式编写，你可以通过[54sh-docs](https://github.com/54shenghua/54sh-docs)仓库，fork后提交PR来参与文档编写。

## 本站信息

这个网站使用了VitePress搭建，仅需要Markdown文档即可生成静态网站。

## 如何本地预览

首先将项目fork到自己的仓库，然后clone到本地，
用Markdown编辑器打开对应文件夹下的`.md`文件，进行编辑，
<br>
（如果需要本地预览）安装依赖：

```shell
npm install
```

然后启动项目：

```shell
npm run dev
```

## VitePress的Markdown扩展

This page demonstrates some of the built-in markdown extensions provided by VitePress.

### Syntax Highlighting

VitePress provides Syntax Highlighting powered by [Shiki](https://github.com/shikijs/shiki), with additional features like line-highlighting:

**Input**

````md
```js{4}
export default {
  data () {
    return {
      msg: 'Highlighted!'
    }
  }
}
```
````

**Output**

```js{4}
export default {
  data () {
    return {
      msg: 'Highlighted!'
    }
  }
}
```

### Custom Containers

**Input**

```md
::: info
This is an info box.
:::

::: tip
This is a tip.
:::

::: warning
This is a warning.
:::

::: danger
This is a dangerous warning.
:::

::: details
This is a details block.
:::
```

**Output**

::: info
This is an info box.
:::

::: tip
This is a tip.
:::

::: warning
This is a warning.
:::

::: danger
This is a dangerous warning.
:::

::: details
This is a details block.
:::

### More

Check out the documentation for the [full list of markdown extensions](https://vitepress.dev/guide/markdown).

## VitePress API 示例

This page demonstrates usage of some of the runtime APIs provided by VitePress.

The main `useData()` API can be used to access site, theme, and page data for the current page. It works in both `.md` and `.vue` files:

```md
<script setup>
import { useData } from 'vitepress'

const { theme, page, frontmatter } = useData()
</script>

### Results

#### Theme Data
<pre>{{ theme }}</pre>

#### Page Data
<pre>{{ page }}</pre>

#### Page Frontmatter
<pre>{{ frontmatter }}</pre>
```

<script setup>
import { useData } from 'vitepress';

const { site, theme, page, frontmatter } = useData()
</script>

### Results

#### Theme Data
<pre>{{ theme }}</pre>

#### Page Data
<pre>{{ page }}</pre>

#### Page Frontmatter
<pre>{{ frontmatter }}</pre>

### More

Check out the documentation for the [full list of runtime APIs](https://vitepress.dev/reference/runtime-api#usedata).
