## taobao-tmall-decoration
[![npm version](https://img.shields.io/npm/v/taobao-tmall-decoration.svg?style=flat-square)](https://www.npmjs.com/package/taobao-tmall-decoration) [![npm downloads](https://img.shields.io/npm/dm/taobao-tmall-decoration.svg?style=flat-square)](https://www.npmjs.com/package/taobao-tmall-decoration) [![build](https://travis-ci.org/jypblue/taobao-tmall-decoration.svg?branch=master)](https://travis-ci.org/jypblue/taobao-tmall-decoration)

the code realize the function of outreach CSS into an inline CSS, so we can use it to write Taobao store or Tmall store front end fitting prototype easily.

这是一个将外联样式转换成内联样式的Nodejs脚本，在我们编写原型的时候使用外联样式书写，运行它之后就可以自动转换成内联样式，这可以有效提升我们在装修淘宝、天猫店铺时书写原型的效率，不用自己手动书写内联样式。

#### 快速开始

- 本地安装模块

```
npm install taobao-tmall-decoration --save-dev
```
- 新建Html原型文件夹 => 如：`/tmpl`
- 新建css文件夹 => 如：`css`
- 新建执行脚本 => 如： `app.js`
- 在脚本中添加代码，并把入口文件夹以及生成文件夹地址传入方法中，具体示例代码如下：

```
var app = require('taobao-tmall-decoration');
app.transformStyle('./tmpl', './dist');
```
- 在原型文件夹下外联书写html以及css代码，书写完毕后，执行自己添加的脚本如下：

```
node app.js
```
- 你会发现你的dist文件夹下已经生成了以内联的方式书写在原型dom上的HTML了，这样就可以用它来装修淘宝天猫店铺了

####注： 详细请参考example文件夹








