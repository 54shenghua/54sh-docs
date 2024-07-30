# 博达系统语法
本页面将介绍整个博达系统所使用FTL语言。
::: tip
FTL语言是博达系统提供的一套模板语言，类似于JSP或者PHP。
:::

## FTL语言概况
在Web页面（或其它类型的文档）中显示动态数据的时候，你可以在HTML（或其它要输出的文本）中加入一些特定指令，组件模板语言会在输出页面给最终用户时，用适当的数据替代这些特定指令。

数据由程序员编程来创建，向模板提供变化的信息，这些信息来自于数据库、文件，甚至于在程序中直接生成，模板设计者不关心数据从那儿来，只使用已经建立的数据。

## FTL输出语法

组件模板语言使用在HTML中加入了一些由${…}包围的特定代码来输出已经建立的数据。

比如我们在程序中已经建立了这三个数据：
```json
{
user: "Big Joe",
latestProduct.url: "product.html",
lastestProduct.name: "产品"
}
```

其中红色部分就是你使用组件模板语言在html中加入的特定代码.
显示为

```html
<html>

<head>
    <title>Welcome!</title>
</head>

<body>
    <h1>Welcome ${user}!</h1>
    <p>Our latest product:
        <a href="${latestProduct.url}">${latestProduct.name}</a>!
</body>

</html>
```

其中${...}就是上面对应红色代码输出的已经建立的数据。

显示为：
```html
<html>

<head>
    <title>Welcome!</title>
</head>

<body>
    <h1>Welcome Big Joe!</h1>
    <p>Our latest product:
        <a href=" product.html ">产品</a>!
</body>

</html>
```

组件模板语言输出数据的语法格式为${…},其中…为你要输出数据的名称。

## FTL标记语法

FTL标记（组件模板语言标记）类似于HTML标记，为了与HTML标记区分，用#开始。

FTL标记不用做输出，一般与输出语法${…}结合起来使用，输出显示用户想要显示的数据。

FTL语法以<#标记 … >开始，</#标记>结束，其中标记是你需要使用的具体标记。

注意<,#,标记三个之间不能有空格，</#标记>也不能有空格。

## if指令（判断）

### 第一种
::: tip
```
<#if (条件)>

</#if>
```
:::

其中条件为你的具体判断条件，条件为真就会执行命令内的内容，如果为假则不执行。

比如（条件为真）
```
<#if (1<2)>

    1小于2

</#if>
```
就会显示：1小于2.

如果（条件为假）
```
 <#if (1>2)>

    1小于2

</#if>
```
则不会显示1小于2

一般我们会使用已经建立好的数据来进行判断。

如我们已经建立好了一个数据name=”joe”
```
<#if (name==’joe’)>

    我是joe

</#if>
```
其中name就是我们已经建立的数据的名称。因为我们建立的数据值就是joe所以我们name==”joe”这个条件为真。这条命令就会输出：

我是joe

注意：
```
<#if ${name}==’joe’>

    我是joe

</#if>
```
这样是错误的，在FTL标签<>之内是不需要使用其他标签的，直接使用名称就可以了。

### 第二种
::: tip
```
<#if (条件)>

    <#else>

</#if>
```
:::

和上面的语法一致，只是多了<#else>命令

如上面的例子
```
<#if  (name==’joe’)>

    我是joe

    <#else>

    我不是joe
</#if>
```
如果是joe就会显示：我是joe.  如果不是joe就会显示：我不是joe。



注意：所有的<#else>必须写在<#if></#if>之间, FTL标记不能位于另一个FTL标记内部,FTL标记不能够交叉，而应该正确的嵌套.

### 第三种
::: tip
```
<#if (条件1)>

    <#elseif  (条件2)>

    <#elseif  (条件3)>

</#if>
```
:::

多次判断，在条件1判断完之后筛选出剩余的数据再进行条件2的判断筛选…

## list指令（循环）
::: tip
```
<#list datas as data>

</#list>
```
:::
datas表示你已经建立好的多条数据集合，data表示循环出得到的每一条数据,红色部分（list,as）是FTL标记的命令不能改变，绿色部分(datas,data)根据实际情况自己定义。

例子：
```
<#list ["winter", "spring", "summer", "autumn"] as x>

    ${x},

</#list>
```

显示：
```
Winter,sprong ,summer,autumn,
```

```["winter", "spring", "summer", "autumn"]```就是需要循环的数据集合，x代表循环的每条数据，在循环中使用${x}就把x代表的每条数据也就是数据集合的每条数据逐个输出显示。

<#list>一般都要和${…}指令联合起来使用，<#list>循环拿出每条数据，使用${…}指令来进行输出显示。复杂的你也可以在<#list>指令中加入<#if>指令来对数据进行判断输出，甚至你可能需要对数据进行多次循环。

注意联合使用的时候, FTL标记不能位于另一个FTL标记内部,FTL标记不能够交叉，而应该正确的嵌套,如：
::: danger
这样的嵌套是错误的
```
<#list datas as data>

<#if 条件>

</#list>

</#if>
```
:::

::: tip
这样才是正确的
```
<#list datas as data>

<#if 条件>

</#if>

</#list>
```
:::

一般我们的数据集合应该是后台已经建立好的数据集，如：

```
<#list list_news as news>

    ${news. showTitle}<br>

</#list>
```
显示：
```
       标题

       标题

       标题

       ……
```

list_news就是我们模板中需要显示的新闻数据集合名称，这个数据在到页面之前是已经建立好的，网页设计人员不用关心这个数据是怎么生成的，只需要拿着他的名字使用即可。

news 代表我们每次循环出来的一条新闻数据。

${news. showTitle}显示每条新闻的标题。

If指令和list指令一起使用的例子

```
<#list [1，2，3，4，5，6,7] as x>

       <#if (x<3)>

              Num is ${x}<3

       <#elseif (x<5)>

              Num is ${x}<5

       <#else>

              Num is ${x}>=5

       <#if>

</#list>
```
显示结果
```
       Num is 1<3

       Num is 2<3

       Num is 3<5

       Num is 4<5

       Num is 5>=5

       Num is 6>=5

       Num is 7>=5
```

## 注释语法

注释：包含在<#--和-->之间不会输出

注释可以位于FTL标记内部
```
<#if <#-- some comment... --> 条件>

</#if>
```