# 个人 webpack 学习笔记

本学习笔记基于讲师 qbaty 的《webpack深入于实战》，视频地址：[***链接***](https://www.imooc.com/learn/802)

### 第一章 webpack 基本介绍

1. webpack 基本介绍

2. webpack 安装和命令行

### webpack 基本配置

1. webpack 配置文件

2. webpack 配置项 entry 和 filename

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

### 生成项目中的html页面文件