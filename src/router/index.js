import Vue from 'vue'
import Router from 'vue-router'
import Main from '@/pages/main.vue'
import Login from '@/pages/login/login.vue'
import Register from '@/pages/register/register.vue'
import MovieDetail from '@/pages/video/movie/movieDetail/movieDetail.vue'
import MovieSearch from '@/pages/video/movie/movieSearch/movieSearch.vue'
import MovieMore from '@/pages/video/movie/movieMore/movieMore.vue'
import MovieToplist from '@/pages/video/movie/movieToplist/movieToplist.vue'
import BookDetail from '@/pages/video/book/bookDetail/bookDetail.vue'
import NewBookMore from '@/pages/video/book/NewBookMore/newBookMore.vue'
import FictionMore from '@/pages/video/book/fictionMore/fictionMore.vue'
import MusicMore from '@/pages/video/music/musicMore/musicMore.vue'
import MusicDetail from '@/pages/video/music/musicDetail/musicDetail.vue'
import TvMore from '@/pages/video/tv/tvMore/tvMore.vue'
import CityMore from '@/pages/video/city/cityMore/cityMore.vue'
import CityDetail from '@/pages/video/city/cityDetail/cityDetail.vue'

import InterestedMore from '@/pages/video/interestedMore/interestedMore.vue'   //   更多感兴趣

import BroadcastDetail from '@/pages/broadcast/broadcastDetail/broadcastDetail.vue'   //   广播详情
import GroupDetail from '@/pages/group/groupDetail/groupDetail.vue'   //   小组详情

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'main',
      component: Main
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/register',
      name: 'register',
      component: Register
    },
    {
      path: '/movieDetail',
      name: 'movieDetail',
      component: MovieDetail
    },
    {
      path: '/movieMore',
      name: 'movieMore',
      component: MovieMore
    },
    {
      path: '/movieSearch',
      name: 'movieSearch',
      component: MovieSearch
    },
    {
      path: '/movieToplist',
      name: 'movieToplist',
      component: MovieToplist
    },
    {
      path: '/newBookMore',
      name: 'newBookMore',
      component: NewBookMore
    },
    {
      path: '/fictionMore',
      name: 'fictionMore',
      component: FictionMore
    },
    {
      path: '/bookDetail',
      name: 'bookDetail',
      component: BookDetail
    },
    {
      path: '/musicMore',
      name: 'musicMore',
      component: MusicMore
    },
    {
      path: '/musicDetail',
      name: 'musicDetail',
      component: MusicDetail
    },
    {
      path: '/tvMore',
      name: 'tvMore',
      component: TvMore
    },
    {
      path: '/cityMore',
      name: 'cityMore',
      component: CityMore
    },
    {
      path: '/cityDetail',
      name: 'cityDetail',
      component: CityDetail
    },
    {
      path: '/broadcastDetail',
      name: 'broadcastDetail',
      component: BroadcastDetail
    },
    {
      path: '/groupDetail',
      name: 'groupDetail',
      component: GroupDetail
    },
    {
      path: '/interestedMore',
      name: 'interestedMore',
      component: InterestedMore
    }
  ]
})
