# 个人 webpack 学习笔记

> 本学习笔记基于讲师 qbaty 的《webpack深入于实战》，视频地址：[***链接***](https://www.imooc.com/learn/802)

### 第一章 webpack 基本介绍

#### 1-1 webpack 基本介绍

#### 1-2. webpack 安装和命令行

### 第二章 webpack 基本配置

#### 2-1. webpack 配置文件

#### 2-2. webpack 配置项 entry 和 filename

* node中调用webpack：

    ```js
    webpack({
        //配置
    }, callback);
    ```

* entry 3种写法：
    传对象方式要给filename使用占位符，[hash]/[name]/[chunkhash]
    * hash -- 单次打包的哈希值
    * chunkhash -- 相当于文件版本号

### 第三章 自动化生成项目中的html页面文件

#### 3-1. 简介
- 使用 html-webpack-plugin 将打包后的资源文件引入html模板。
- 安装:
    ```
    npm install html-webpack-plugin --save-dev
    ```

#### 3-2. 配置
- 参数配置
    ```js
    new htmlWebpackPlugin({ 
        // filename 指定输出的html文件名  
        // template 指定所使用的html模板  
        // inject   插入的位置 head / body 
        // minify   压缩参数
        // .
        // .
    })
    ```
- html调用
    ```
    // 指定位置引用打包文件
    <%= htmlWebpackPlugin.files.chunks['name'].entry %>
    ```
    引用之后的路径只有webpack配置选项output中的filename参数，想要使用完整线上路径，应该在output中添加publicPath参数。
    ```
    output: {
        path: './dist',
        filename: 'js/[name].js',
        publicPath: 'http://cdn.com/'
    }
    ```
- minify选项配置
    ```
    minify: {
        removeComments: true,
        collapseWhitespace: true
        // .
        // .
    }

    ```
#### 3-3. 多页面
- 在plugins选项多次实例htmlWebpackPlugin，并添加相应配置信息（以下内容简称配置）以实现多页面输出：
    ````
    plugins: {
        new htmlWebpackPlugin({// 配置}),
        new htmlWebpackPlugin({// 配置}),
        // .
        // .
    }
    ````
    * 配置中的「filename」指定输出的html文件名；
    * 配置中的「chunks」指定要引入的chunk；
    * 配置中的「excludeChunks」指定不引入的chunk；

#### 3-4. 以inline形式引入
- 为了减少js等资源文件的http请求，通过inline的形式将文件内容嵌入到页面当中。
    ````
    // 利用webpack源码的方法在html文件中写入如下代码
    <script>
    <%= compilation.assets[htmlWebpackPlugin.files.chunks['name'].entry.substr(htmlWebpackPlugin.files.publicPath.length)].source() %>
    </script>
    ````
    并将其他文件循环输出。
    ````
    <% for (var k in htmlWebpackPlugin.files.chunks) { %>
        <% if (k != 'main') { %>
            <script src="<%= htmlWebpackPlugin.files.chunks[k].entry %>"></script>
        <% } %>
    <% } %>
    ````

> ##### 小结
> 学习了如何使html文件引入动态生成的文件，并且使用配置信息使两者一一对应。自定义html，传参，


### 第四章 处理项目中的资源文件

> 如何处理资源文件，包括es6转es5，css预处理语言，图片压缩，图片转base64

#### 4-1. loader介绍

#### 4-2. 使用 babel-loader 转码es6

#### 4-3. 处理项目中的 css

#### 4-4. 使用 less 和 sass

#### 4-5. 处理模板文件

#### 4-6. 处理图片和其他文件