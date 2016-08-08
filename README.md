## taobao-tmall-decoration
[![npm version](https://img.shields.io/npm/v/taobao-tmall-decoration.svg?style=flat-square)](https://www.npmjs.com/package/taobao-tmall-decoration) [![npm downloads](https://img.shields.io/npm/dm/taobao-tmall-decoration.svg?style=flat-square)](https://www.npmjs.com/package/taobao-tmall-decoration)

the code realize the function of outreach CSS into an inline CSS, so we can use it to write Taobao store or Tmall store front end fitting prototype easily.

这是一个将外联样式转换成内联样式的Nodejs脚本，在我们编写原型的时候使用外联样式书写，运行它之后就可以自动转换成内联样式，这可以有效提升我们在装修淘宝、天猫店铺时书写原型的效率，不用自己手动书写内联样式。

### quick start

#### Install
```
npm install taobao-tmall-decoration --save-dev
cd taobao-tmall-decoration
npm install 
```
#### How to use

- new HTML file under the tmpl folder and new CSS file under the css folder 
- write CSS code to external way 
- when you finish your code , run command:

 ```
 npm build
 ```
 
 
### 注意：

本包目前还是一个完整的实例，还没有拆分成标准的npm包模块，所以下载本包以后，直接将taobao-tmall-decoration文件夹提取出来，然后shell下`cd taobao-tmall-decoration`目录下，`npm install`安装本地依赖的包模块，然后在tmpl以及css文件夹下书写原型即可，书写完毕后，执行`npm build`命令就ok了，然后在dist文件夹下就生成了内联样式的html了。后续有时间，我会改写成标准的npm包模块，请见谅。
 


