import axios from 'axios'
import qs from 'qs'

// axios 配置
axios.defaults.timeout = 5000     //    响应时间
// axios.defaults.headers.common['Authorization'] = AUTH_TOKEN
// axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8'              //    配置请求头
axios.defaults.headers = {'X-Requested-With': 'XMLHttpRequest'}
axios.defaults.baseURL = '/api'   //  配置接口地址

//  POST传参序列化(添加请求拦截器)
axios.interceptors.request.use((config) => {
  //   在发送请求之前做某件事
  if (config.method === 'get') {
    config.data = qs.stringify(config.data)
  }
  return config
}, (error) => {
  console.log('错误的传参')
  return Promise.reject(error)
})

//  返回状态判断(添加响应拦截器)
axios.interceptors.response.use((res) => {
  // 对响应数据做些事
  if (res.statusText !== 'OK') {
    // _.toast(res.data.msg)
    return Promise.reject(res)
  }
  return res
}, (error) => {
  console.log('网络异常')
  return Promise.reject(error)
})

// 返回一个Promise(发送post请求)
export function fetch (url, params) {
  return new Promise((resolve, reject) => {
    axios.get(url, params)
      .then(response => {
        resolve(response.data)
      }).catch((error) => {
        reject(error)
      })
  })
}

export default {
  hotMovie () {
    return fetch('/v2/movie/in_theaters')
  },
  comingMovie () {
    return fetch('/v2/movie/coming_soon')
  },
  top250Movie () {
    return fetch('/v2/movie/top250')
  },
  reputationMovie () {
    return fetch('/v2/movie/weekly')
  },
  newMovie () {
    return fetch('/v2/movie/new_movies')
  },
  northUsaMovie () {
    return fetch('/v2/movie/us_box')
  },
  commentsMovie () {
    return fetch('/v2/movie/subject/:id/reviews')   //    影评
  },
  movieDetail (id) {
    return fetch('/v2/movie/subject/' + id)   //    电影详情
  },
  movieSearch (tagName) {
    return fetch('/v2/movie/search?tag=' + tagName)   //    电影搜索
  },
  bookNew () {
    return fetch('/v2/book/search?tag=新书&count=10')   //    新书
  },
  bookFiction () {
    return fetch('/v2/book/search?q=虚构类&count=10')   //    虚构类的图书
  },
  bookNoFiction () {
    return fetch('/v2/book/search?q=非虚构类&count=10')   //    非虚构类的图书
  },
  bookStore () {
    return fetch('/v2/book/search?tag=豆瓣&count=10')   //    豆瓣书店
  },
  bookOriginal () {
    return fetch('/v2/book/search?tag=原创&count=10')   //    原创
  },
  bookSpecialPrice () {
    return fetch('/v2/book/search?tag=电子书&count=10')   //    特价电子书
  },
  bookSelling () {
    return fetch('/v2/book/search?tag=畅销&count=10')   //    畅销
  },
  musicChinese () {
    return fetch('v2/music/search?tag=华语&count=10')     //    华语新碟榜
  },
  musicUsa () {
    return fetch('v2/music/search?tag=欧美&count=10')     //    欧美新碟榜
  },
  musicJapanKorea () {
    return fetch('v2/music/search?tag=日韩&count=10')     //    日韩新碟榜
  },
  musicHot () {
    return fetch('v2/music/search?tag=热门&count=10')     //    热门单曲榜
  },
  cityHot () {
    return fetch('v2/event/list?loc=118282&count=10')     //    城市  热门活动
  },
  cityMovie () {
    return fetch('v2/event/list?loc=118282&start=10&count=10')     //    城市---电影类
  },
  cityMusic () {
    return fetch('v2/event/list?loc=108288&count=10')     //    城市---音乐类
  },
  cityTravel () {
    return fetch('v2/event/list?loc=108296&count=10')     //    城市---旅行类
  },
  citySports () {
    return fetch('v2/event/list?loc=118281&count=10')     //    城市---运动类
  }
}
