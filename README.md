# 个人 webpack 学习笔记

> 本学习笔记基于讲师 qbaty 的《webpack深入于实战》，视频地址：[***链接***](https://www.imooc.com/learn/802)

### 第一章 webpack 基本介绍

1-1 webpack 基本介绍

1-2. webpack 安装和命令行

### 第二章 webpack 基本配置

2-1. webpack 配置文件

2-2. webpack 配置项 entry 和 filename

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

3-1. 简介
- 使用 html-webpack-plugin 将打包后的资源文件引入html模板。
* 安装:
    ```
    npm install html-webpack-plugin --save-dev
    ```

* 配置:
    ```js
    new htmlWebpackPlugin({ 
        // filename 指定输出的html文件名  
        // template 指定所使用的html模板  
        // inject   插入的位置 head / body  
    })
    ```


### 第四章 处理项目中的资源文件

4-1. loader介绍

4-2. 使用 babel-loader 转码es6

4-3. 处理项目中的 css

4-4. 使用 less 和 sass

4-5. 处理模板文件

4-6. 处理图片和其他文件