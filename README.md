# 2小时快速上手TypeScript所有知识点，0基础进击到高级前端，迈向加薪的未来

[视频教程](https://www.bilibili.com/video/BV19p4y1a7Yj/) 

全局安装typescript
yarn global add typescript

在命令行输入
tsc --version  

显示如下，说明安装成功      
Version 4.0.3

在项目目录下建立

tsconfig.json 内容如下

{
  "compilerOptions": {
    "module": "commonjs",
    "target": "es5",
    "sourceMap": true
  },
  "exclude": [
    "node_modules"
  ]
}