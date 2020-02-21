import Vue from 'vue'
import VueRouter from 'vue-router'
const  Shelf = ()=> import('@/views/Shelf.vue')
// import Shelf from '@/views/Shelf.vue'
const Sort = ()=>import('@/views/Sort.vue')
// import Sort from '@/views/Sort.vue'
const Good = () => import('@/views/Good.vue')
// import Good from '@/views/Good.vue'
const Ranking =()=> import('@/views/Ranking.vue')
// import Ranking from '@/views/Ranking.vue'
const Personal =()=> import('@/views/Personal.vue')
// import Personal from '@/views/Personal.vue'
const Search =()=> import('@/views/Search.vue')
// import Search from '@/views/Search.vue'
const Sortbooks=()=> import('@/views/Sortbooks.vue')
// import Sortbooks from '@/views/Sortbooks.vue'
const SortbooksInfo=()=>import('@/components/booksInfo/BooksInfo.vue')
// import SortbooksInfo from '@/components/booksInfo/BooksInfo.vue'
// const bookcontent=()=>import('@/components/readbooks/bookContent.vue')
import bookcontent from '@/components/readbooks/bookContent.vue'
import malerankDetail from '@/views/ranks/malerankDetail.vue'
import femalerankDetail from '@/views/ranks/femalerankDetail.vue'
import maleBooksInfo from '@/components/booksInfo/BooksInfo.vue'
import femaleBooksInfo from '@/components/booksInfo/BooksInfo.vue'
import Per from '@/views/per/personre.vue'
import Perinfo from '@/views/per/personinfo.vue'
import Booksearch from '@/views/books/Booksearch.vue'
import BookGoodList from '@/components/booksInfo/BooksInfo.vue'
import BookgirlList from '@/components/booksInfo/BooksInfo.vue'
import Searchbooks from '@/components/booksInfo/BooksInfo.vue'

import Browere from '@/views/per/bowerect.vue'
import bowerect from '@/components/booksInfo/BooksInfo.vue'


Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        component: Shelf
    },
    {
        path: '/Shelf',
        component: Shelf
    },
    {
        path: '/Sort',
        component: Sort
    },
    {
        path: '/Good',
        component: Good
    },
    {
        path: '/Ranking',
        component: Ranking
    },
    {
        path: '/Personal',
        component: Personal
    },
    {
        path: '/Search',
        component: Search
    },
    {
        path: '/Sort/books',
        component: Sortbooks,
        name:Sortbooks
    },
    {
        path: '/Sortbooks/sortbooksInfo',
        component: SortbooksInfo,
    },
    {
        path: '/booksinfo/bookcontent',
        component:  bookcontent,
    },

    {
        path: "/ranks/malerankDetail/:id",
        component: malerankDetail
    },
    {
        path: "/ranks/femalerankDetail/:id",
        component: femalerankDetail
    },
    {
        path: "/malerankDetail/maleBooksInfo",
        component: maleBooksInfo
    },
    {
        path: "/femalerankDetail/femaleBooksInfo",
        component: femaleBooksInfo
    },
    {
        path: '/Per/personre',
        component: Per
    },
    {
        path: '/Per/personinfo',
        component: Perinfo
    },
    {
        path: '/books/searchbooks',
        component: Booksearch
    },
    {
        path: '/books/gnumbooks/',
        component: BookgirlList
    },
    {
        path: '/books/numbooks/',
        component: BookGoodList
    },
    {
        path: '/books/searchbooks',
        component: Searchbooks
    },
    {
        path: '/Per/browere',
        component: Browere
    },
    {
        path: '/Bowerect/bowerect',
        component: bowerect
    },
   
   
]

const router = new VueRouter({
    routes
})

export default router
