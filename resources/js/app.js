require('./bootstrap');

import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

import App from './components/views/App'
import Hello from './components/views/Hello'
import Home from './components/views/Home'
import UsersIndex from './components/views/UsersIndex';
import UsersEdit from './components/views/UsersEdit';
import NotFound from './components/views/NotFound';
import UsersCreate from './components/views/UsersCreate';

const router = new VueRouter({
    mode: 'history',
    routes: [
        {
            path: '/',
            name: 'home',
            component: Home
        },
        {
            path: '/hello',
            name: 'hello',
            component: Hello,
        },
        {
            path: '/users',
            name: 'users.index',
            component: UsersIndex,
        },
        {
            path: '/users/:id/edit',
            name: 'users.edit',
            component: UsersEdit,
        },
        {
            path: '/users/create',
            name: 'users.create',
            component: UsersCreate,
        },
        { path: '/404', name: '404', component: NotFound },
        { path: '*', redirect: '/404' },
    ],
});

const app = new Vue({
    el: '#app',
    components: { App },
    router,
});
