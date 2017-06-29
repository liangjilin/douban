# 豆瓣APP

> 豆瓣电影，图书，音乐，广播，小组。vue2.0 + vue-router + axios + vuex + mint-ui

# 运行项目

``` bash
# git clone git@github.com:liangjilin/douban.git

# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

```
# 效果图

![text](../master/static/images/jdfw.gif)

# 项目结构
```javascript
.
├── README.md
├── build // vue-cli 自带的配置文件
│   ├── build.js
│   ├── check-versions.js
│   ├── dev-client.js
│   ├── dev-server.js
│   ├── utils.js
│   ├── webpack.base.conf.js
│   ├── webpack.dev.conf.js
│   └── webpack.prod.conf.js
├── config  // vue-cli 自带的配置文件
│   ├── dev.env.js
│   ├── index.js
│   └── prod.env.js
├── package.json
├── src
│   ├── App.vue
│   ├── assets
│   │   ├── css
│     │     │     ├──common.styl
│     │     │     │     ├──common.css
│     │     │     │     ├──cfont-awesome.min
│   │   ├── fonts
│   │   └── images
│   ├── components
│   │   ├── banner.vue  //
│   │   ├── bookFiction.vue
│   │   ├── bookMoreItem.vue
│   │   ├── cityMoreItem.vue
│   │   ├── header.vue
│   │   ├── loading.vue
│   │   ├── movieMoreItem.vue
│   │   ├── musicMoreItem.vue
│   │   ├── rating.vue
│   │   ├── scroller.vue
│   │   ├── star.vue
│   │   └── tvMoreItem.vue
│   ├── main.js // 入口文件
│   ├── router // 路由
│   │   ├── index.js
│   ├── data // 自己写的模仿数据
│   │   ├── homeData.json
│   ├── fetch // fetch API
│   │   ├── api.js // axios配置及API封装
│   ├── vuex  //   数据管理
│   │   ├── modules
│   │   │     ├── home.js
│   │   │     ├── main.js
│   │   │   └── video.js
│   │   ├── store.js
│   │   └── types.js
│   └── pages
│       ├── main.vue  // 底部导航及页面绑定
│       ├── home
│       │   └── home.vue  // 首页
│       ├── video   //  书影音
│       │   ├── movie  //  电影
│       │     │   ├── movie.vue
│       │     │   ├── movieDetail
│       │     │   │     └── movieDetail.vue  //  电影详情
│       │     │   ├── movieMore
│       │     │   │     └── movieMore.vue  //  正在热映
│       │     │   ├── movieSearch
│       │     │   │     └── movieSearch.vue  //  即将上映
│       │     │   └── movieToplist
│       │     │   │     └── movieToplist.vue  //  榜单
│       │   ├── book   //  图书
│       │     │   ├── book.vue
│       │     │   ├── bookDetail
│       │     │   │     └── bookDetail.vue  //  图书详情
│       │     │   ├── fictionMore
│       │     │   │     └── fictionMore.vue  //  查看更多图书
│       │     │   └── newBookMore
│       │     │   │     └── newBookMore.vue  //  新书速递
│       │   ├── city   //  同城
│       │     │   ├── city.vue
│       │     │   ├── cityDetail
│       │     │   │     └── cityDetail.vue  //  同城详情
│       │     │   ├── cityMore
│       │     │   │     └── cityMore.vue  //  查看更多同城
│       │   ├── tv   //  电视
│       │     │   ├── tv.vue
│       │     │   ├── tvMore
│       │     │   │     └── tvMore.vue  //  查看更多电视剧
│       │   └── music   //  音乐
│       │     │   ├── music.vue
│       │     │   ├── musicDetail
│       │     │   │     └── musicDetail.vue  //  music详情
│       │     │   ├── musicMore
│       │     │   │     └── musicMore.vue  //  查看更多music
│       ├── broadcast
│       │     ├── broadcast.vue
│       │     └── broadcastDetail
│       │     │     └── broadcastDetail.vue  // 广播详情
│       ├── group
│       │     └── group.vue  // 小组
│       ├── mine
│       │     └── mine.vue  // 小组
│       ├── login
│       │     └── login.vue  // 登录
│       └──  register
│              └── register.vue  // 注册
├── static
│   ├── css
│   │   └──eric-meyer-reset.min.css  //  css reset
│   └── images
│        └──favicon.ico  //  icon
└── tree.md
```
# 豆瓣API
该应用使用了下面4个api：
* `/v2/book` 图书；
* `/v2/movie` 电影；
* `/v2/music` 音乐；
* `v2/event/list?loc=118282&count=10` 同城。

>更多关于豆瓣的api可以前往[豆瓣api官网](https://developers.douban.com/wiki/?title=guide)查看。

需要注意的是，由于豆瓣api的跨域问题，并不能直接通过ajax请求访问。不过vue-cli提供了代理的配置。
我们需要在`/config/index.js`中配置代理：
```javascript
  dev: {
    env: require('./dev.env'),
    port: 8070,
    autoOpenBrowser: true,
    assetsSubDirectory: 'static',
    assetsPublicPath: '/',
    proxyTable: {
      '/api': {
        target: 'https://api.douban.com',
        changeOrigin: true,
        pathRewrite:{
          '^/api': ''
        }
      }
    }
```
# 关于vuex
如果你想了解vuex的用法，请用力戳[Vuex文档](https://vuex.vuejs.org/zh-cn/)。
