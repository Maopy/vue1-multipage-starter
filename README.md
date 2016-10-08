# Vue Starter

## Quick Start

```bash
  $ git clone git@github.com:Maopy/vue1-multipage-starter.git <yourAppName>
  $ rm -rf .git

  $ cd <yourAppName>
  $ npm install

  $ npm run dev
  
  $ npm run build
```

## Directory Layout

<pre> 
|- config                       # Configurations for bundles
|- src                          # The source code of the application
  |- client                     # client-side script
    |- assets                   # Static files like pic etc.
    |- components               # Vue components
    |- modules                  # pages' entry
  |- server                     # Server-side startup script
  template.html                 # Static pages template
|- dist                         # The folder for compiled output
|- webpack                      # Webpack configurations
  build.js                      # Builds the project from source to output (build) folder
  utils.js                      # Utility snippets
  webpack.config.base.babel.js  # Webpack base configurations
  webpack.config.dev.babel.js   # Webpack configurations for development
  webpack.config.prod.babel.js  # Webpack configurations for production
</pre>

## Introduction

This repo is an almost full-featured starter for Vue `multi` SPA project.

You could use it as a base to build your own web app.

## Features

1. Generate HTML files that includes webpack bundles & CSS assets automatic by multiple entry points
2. Support hot module replacement. The Koa server can be a browserSync proxy, either can be a production server 
3. Generate assets files with eight-digit hash of the content of the extracted file, in order to cache on the server, even replace to your own CDN url
4. Use tomorrow’s CSS syntax, today! Auto adding vendor prefixes to adapt Android 4+、 iOS 7+
5. Vux as base UI Frame
6. allow to develop multi SPA
7. vuex data flow
8. ESNEXT compile to ES5

## to-do-list

1. CSS nano
2. postcss flexible
3. eslint standard
