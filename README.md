# Vue Starter

## 目录结构

<pre>
|- config
|- src
  |- client
    |- assets 存放图片等静态文件
    |- components
    |- modules 各页面入口文件
  |- server
|- dist
|- webpack
</pre>

## 技术细节

### Webpack

1. 自动引入多页入口文件
2. 自动模板生成 HTML 页
3. dev 环境热更新
4. prod 环境按照文件内容生成 hash 文件名
5. 更换静态资源（图片等）URL 可配置为 CDN
6. CSS 文件单独打包

### POSTCSS

1. css-next 可以使用未来的CSS语法
2. autoprefixer 自动添加浏览器前缀
3. 自动根据 caniuse 兼容最新2版 chrome、最新3版 iOS
