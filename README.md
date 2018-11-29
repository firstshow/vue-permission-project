# fs-vue-admin

## 安装test单元会报错，先设置源
```
设置npm config set chromedriver_cdnurl=http://cdn.npm.taobao.org/dist/chromedriver
设置yarn config set "chromedriver_cdnurl" "https://npm.taobao.org/mirrors/chromedriver"
```

## Project setup
```
yarn install
```

### Compiles and hot-reloads for development
```
yarn run serve
```

### Compiles and minifies for production
```
yarn run build
```

### Run your tests
```
yarn run test
```

### Lints and fixes files
```
yarn run lint
```

### Run your end-to-end tests
```
yarn run test:e2e
```

### Run your unit tests
```
yarn run test:unit
```

## 目录结构
```
├── node_modules  项目的依赖项
|
├── public 项目的静态资源存放，相当于以前的static
|   ├── index.html 模板入口文件
|   └── favicon.ico 网站图标
|
├── src
|   ├── assets
|   |    ├── images 存放图片
|   |    └── styles 存放css样式
|   |          ├── common.scss 公共样式
|   |          ├── index.scss  入口样式
|   |          ├── rest.scss   重置样式
|   |          └── variable.scss  变量
|   |
|   ├── components 公共组件存放
|   |
|   ├── plugins 配置插件
|   |    └── element.js element-ui 需要全局引入的组件或者插件引入
|   |
|   ├── router 路由
|   |
|   ├── store  vuex 数据状态存放
|   |
|   ├── untils 辅助工具
|   |    ├── http.js 数据请求 (最基本的配置，实际配置以具体项目为主)
|   |    ├── storage.js 操作 H5 数据存储
|   |    ├── timeFormatting.js 时间格式化
|   |    └── verify.js 常用的一些验证
|   |
|   ├── views 路由页面
|   |
|   ├── App.vue vue根组件
|   |
|   └── main.js 入口文件
|
├── tests 测试目录
|
└── vue.config.js vue-cli扩展配置文件
```
