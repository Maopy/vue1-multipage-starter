# Vue Starter

## 用法

```bash
  $ git clone git@github.com:Maopy/vue1-multipage-starter.git <yourAppName>
  $ rm -rf .git  # 将项目变为你自己的
  
  $ cd <yourAppName>
  $ npm install

  $ npm run dev  # 进入开发模式
  
  $ npm run build  # 打包
```

## 目录结构

<pre>
|- config
|- src
  |- client
    |- assets 存放图片等静态文件
    |- components 组件文件
    |- modules 各页面入口文件
  |- server
    app.js
    index.js
  template.html
|- dist
|- webpack
  build.js 打包配置文件
  utils.js 工具函数
  webpack.config.base.babel.js 通用配置
  webpack.config.dev.babel.js 开发环境配置
  webpack.config.prod.babel.js 生产环境配置
.babelrc
.eslintrc
</pre>

## 基本介绍 & 适用场景

本项目是 Vue 全家桶的种子项目，适合中小型移动端（特别是微信端）Web 项目。

项目为“多单页”应用提供了较为完备的开发基础。

## 特性

1. src/modules 下存放各页面的入口文件，Webpack 会据此生成 HTML 文件，并自动引入CSS、JS文件
2. dev 模式下会启动热更新，项目中的 Koa 服务，既可作为 dev server，又可作为生产环境中的服务
3. build 执行时，会根据文件内容生成8位hash的文件名，可据此做服务器缓存，亦可替换为自己的 CDN URL
4. 引入了 postcss，可以提前使用 CSS4 的语法啦！同时自动对 Android 4+、 iOS 7+ 添加CSS前缀
5. 引入 Vux 作为基础 UI 框架
6. vue-router 提供了“多单页”应用开发选项
7. vuex 各单页应用数据流处理
8. ESNEXT 编译至 ES5

## 待加入特性

1. CSS nano
2. postcss flexible
3. eslint standard
