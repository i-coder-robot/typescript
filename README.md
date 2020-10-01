# typescript

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