import Vue from "vue";
import VueRouter from "vue-router";
import HomePage from '@/pages/HomePage'
import UserDetail from '@/pages/UserDetail'
import UserPosts from '@/pages/UserPosts'
import UserAlbums from '@/pages/UserAlbums'


Vue.use(VueRouter)

export default new VueRouter({
    mode: 'history',
    routes: [
        {
            path: '/',
            component: HomePage
        },
        {
            path: '/profiles',
            component: HomePage
        },
        {
            path: '/users/:id',
            component: UserDetail
        },
        {
            path: '/users/:id/posts',
            component: UserPosts
        },
        {
            path: '/users/:id/albums',
            component: UserAlbums
        },
    ]
})