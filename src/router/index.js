import Vue from 'vue'
import VueRouter from 'vue-router'

import Login from '../views/Login'
import Register from '../views/Register'
import Home from '../views/Home'
import Categories from '../views/Categories'
import Detail from '../views/Detail'
import History from '../views/History'
import Planning from '../views/Planning'
import Profile from '../views/Profile'
import Record from '../views/Record'

Vue.use(VueRouter)

const routes = [
    {
        path: '/login',
        name: 'login',
        meta: {layout: 'empty'},
        component: Login
    },
    {
        path: '/register',
        name: 'register',
        meta: {layout: 'empty'},
        component: Register
    },
    {
        path: '/',
        name: 'home',
        meta: {layout: 'main'},
        component: Home
    },
    {
        path: '/categories',
        name: 'categories',
        meta: {layout: 'main'},
        component: Categories
    },
    {
        path: '/detail/:id',
        name: 'detail',
        meta: {layout: 'main'},
        component: Detail
    },
    {
        path: '/history',
        name: 'history',
        meta: {layout: 'main'},
        component: History
    },
    {
        path: '/planning',
        name: 'planning',
        meta: {layout: 'main'},
        component: Planning
    },
    {
        path: '/profile',
        name: 'profile',
        meta: {layout: 'main'},
        component: Profile
    },
    {
        path: '/record',
        name: 'record',
        meta: {layout: 'main'},
        component: Record
    }
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router