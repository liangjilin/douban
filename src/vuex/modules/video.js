import api from '../../fetch/api'
import * as types from '../types'

const state = {
  movie_hot: [],
  movie_coming: [],
  movie_top250: [],
  movie_reputation: [],
  movie_new: [],
  movie_northUsa: [],
  movie_search_tag: [{
    forms: [
      {name: '电影'},
      {name: '电视剧'},
      {name: '综艺'},
      {name: '动画'},
      {name: '纪录片'},
      {name: '短片'}
    ],
    regions: [
      {name: '大陆'},
      {name: '美国'},
      {name: '香港'},
      {name: '台湾'},
      {name: '日本'},
      {name: '韩国'},
      {name: '英国'},
      {name: '法国'},
      {name: '德国'},
      {name: '意大利'},
      {name: '西班牙'},
      {name: '印度'},
      {name: '泰国'},
      {name: '俄罗斯'},
      {name: '伊朗'},
      {name: '加拿大'},
      {name: '澳大利亚'},
      {name: '爱尔兰'},
      {name: '瑞典'},
      {name: '巴西'},
      {name: '丹麦'}
    ],
    types: [
      {name: '剧情'},
      {name: '爱情'},
      {name: '喜剧'},
      {name: '科幻'},
      {name: '动作'},
      {name: '悬疑'},
      {name: '犯罪'},
      {name: '恐怖'},
      {name: '青春'},
      {name: '励志'},
      {name: '战争'},
      {name: '文艺'},
      {name: '魔幻'},
      {name: '黑色幽默'},
      {name: '传记'},
      {name: '情色'},
      {name: '暴力'},
      {name: '音乐'},
      {name: '家庭'}
    ],
    specials: [
      {name: '经典'},
      {name: '豆瓣高分'},
      {name: '冷门佳片'},
      {name: '+自定义标签'}
    ]
  }],
  book_new: [],
  book_fiction: [],
  book_noFiction: [],
  book_store: [],
  book_Original: [],
  book_SpecialPrice: [],
  book_Selling: [],
  musicChinese: [],
  musicUsa: [],
  musicJapanKorea: [],
  musicHot: [],
  cityHot: [],
  cityMovie: [],
  cityMusic: [],
  cityTravel: [],
  citySports: []
}

const getters = {
//   电影
  movie_hot_list: state => state.movie_hot,
  movie_coming_list: state => state.movie_coming,
  movie_top250_list: state => state.movie_top250,
  movie_reputation_list: state => state.movie_reputation,
  movie_new_list: state => state.movie_new,
  movie_northUsa_list: state => state.movie_northUsa,
  movie_search_tag: state => state.movie_search_tag,
//   图书类
  book_new: state => state.book_new,
  book_fiction: state => state.book_fiction,
  book_noFiction: state => state.book_noFiction,
  book_store: state => state.book_store,
  book_Original: state => state.book_Original,
  book_SpecialPrice: state => state.book_SpecialPrice,
  book_Selling: state => state.book_Selling,
//   音乐
  music_Chinese: state => state.musicChinese,
  music_Usa: state => state.musicUsa,
  music_JapanKorea: state => state.musicJapanKorea,
  music_Hot: state => state.musicHot,
//  同城
  city_Hot: state => state.cityHot,
  city_Movie: state => state.cityMovie,
  city_Music: state => state.cityMusic,
  city_Travel: state => state.cityTravel,
  city_Sports: state => state.citySports
}

const actions = {
  //   电影
  getHotMovie ({ commit }) {
    api.hotMovie().then(res => {
      commit(types.GET_HOT_MOVIE, res)
    })
  },
  getComingMovie ({commit}) {
    api.comingMovie().then(res => {
      commit(types.GET_COMING_MOVIE, res)
    })
  },
  getTop250Movie ({commit}) {
    api.top250Movie().then(res => {
      commit(types.GET_TOP250_MOVIE, res)
    })
  },
  getReputationMovie ({commit}) {
    api.reputationMovie().then(res => {
      commit(types.GET_REPUTATION_MOVIE, res)
    })
  },
  getNewMovie ({commit}) {
    api.newMovie().then(res => {
      commit(types.GET_NEW_MOVIE, res)
    })
  },
  getNorthUsaMovie ({commit}) {
    api.northUsaMovie().then(res => {
      commit(types.GET_NORTHUSA_MOVIE, res)
    })
  },
  getCommentsMovie ({commit}) {
    api.commentsMovie().then(res => {
      console.log(res)
    })
  },
  //   图书
  getNewBook ({commit}) {
    api.bookNew().then(res => {
      commit(types.GET_BOOK_NEW, res)
    })
  },
  getFictionBook ({commit}) {
    api.bookFiction().then(res => {
      commit(types.GET_BOOK_FICTION, res)
    })
  },
  getNoFictionBook ({commit}) {
    api.bookNoFiction().then(res => {
      commit(types.GET_BOOK_NOFICTION, res)
    })
  },
  getStoreBook ({commit}) {
    api.bookStore().then(res => {
      commit(types.GET_BOOK_STORE, res)
    })
  },
  getOriginalBook ({commit}) {
    api.bookOriginal().then(res => {
      commit(types.GET_BOOK_ORIGINAL, res)
    })
  },
  getSpecialPriceBook ({commit}) {
    api.bookSpecialPrice().then(res => {
      commit(types.GET_BOOK_SPECIALPRICE, res)
    })
  },
  getSellingBook ({commit}) {
    api.bookSelling().then(res => {
      commit(types.GET_BOOK_SELLING, res)
    })
  },
//   音乐
  getMusicChinese ({commit}) {
    api.musicChinese().then(res => {
      commit(types.GET_MUSIC_CHINESE, res)
    })
  },
  getMusicUsa ({commit}) {
    api.musicUsa().then(res => {
      commit(types.GET_MUSIC_USA, res)
    })
  },
  getMusicJapanKorea ({commit}) {
    api.musicJapanKorea().then(res => {
      commit(types.GET_MUSIC_JAPAN_KOREA, res)
    })
  },
  getMusicHot ({commit}) {
    api.musicHot().then(res => {
      commit(types.GET_MUSIC_HOT, res)
    })
  },
  getCityHot ({commit}) {
    api.cityHot().then(res => {
      commit(types.GET_CITY_HOT, res)
    })
  },
  getCityMovie ({commit}) {
    api.cityMovie().then(res => {
      commit(types.GET_CITY_MOVIE, res)
    })
  },
  getCityMusic ({commit}) {
    api.cityMusic().then(res => {
      commit(types.GET_CITY_MUSIC, res)
    })
  },
  getCityTravel ({commit}) {
    api.cityTravel().then(res => {
      commit(types.GET_CITY_TRAVEL, res)
    })
  },
  getCitySports ({commit}) {
    api.citySports().then(res => {
      commit(types.GET_CITY_SPORTS, res)
    })
  }
}

const mutations = {
  //    电影
  [types.GET_HOT_MOVIE] (state, res) {
    state.movie_hot = res.subjects
  },
  [types.GET_COMING_MOVIE] (state, res) {
    state.movie_coming = res.subjects
  },
  [types.GET_TOP250_MOVIE] (state, res) {
    state.movie_top250 = res.subjects
  },
  [types.GET_REPUTATION_MOVIE] (state, res) {
    state.movie_reputation = res.subjects
  },
  [types.GET_NEW_MOVIE] (state, res) {
    state.movie_new = res.subjects
  },
  [types.GET_NORTHUSA_MOVIE] (state, res) {
    state.movie_northUsa = res.subjects
  },
  //    图书
  [types.GET_BOOK_NEW] (state, res) {     //     新书
    state.book_new = res.books
  },
  [types.GET_BOOK_FICTION] (state, res) {     //     虚构类
    state.book_fiction = res.books
  },
  [types.GET_BOOK_NOFICTION] (state, res) {     //     非虚构类
    state.book_noFiction = res.books
  },
  [types.GET_BOOK_STORE] (state, res) {     //     豆瓣书店
    state.book_store = res.books
  },
  [types.GET_BOOK_ORIGINAL] (state, res) {     //     原创
    state.book_Original = res.books
  },
  [types.GET_BOOK_SPECIALPRICE] (state, res) {     //     特价电子书
    state.book_SpecialPrice = res.books
  },
  [types.GET_BOOK_SELLING] (state, res) {     //     畅销图书榜
    state.book_Selling = res.books
  },
//   音乐
  [types.GET_MUSIC_CHINESE] (state, res) {    //    华语
    state.musicChinese = res.musics
  },
  [types.GET_MUSIC_USA] (state, res) {    //    欧美
    state.musicUsa = res.musics
  },
  [types.GET_MUSIC_JAPAN_KOREA] (state, res) {    //    日韩
    state.musicJapanKorea = res.musics
  },
  [types.GET_MUSIC_HOT] (state, res) {    //    热门
    state.musicHot = res.musics
  },
  //   同城
  [types.GET_CITY_HOT] (state, res) {    //    城市---热门活动
    state.cityHot = res.events
  },
  [types.GET_CITY_MOVIE] (state, res) {    //    城市---电影
    state.cityMovie = res.events
  },
  [types.GET_CITY_MUSIC] (state, res) {    //    城市---音乐
    state.cityMusic = res.events
  },
  [types.GET_CITY_TRAVEL] (state, res) {    //    城市---旅行
    state.cityTravel = res.events
  },
  [types.GET_CITY_SPORTS] (state, res) {    //    城市---运动
    state.citySports = res.events
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
