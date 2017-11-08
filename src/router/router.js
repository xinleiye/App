"use strict"
// 引入Vue官方及开源组件库类
import Vue from "vue";
import VueRouter from "vue-router";
//import { Button, Dialog } from "element-ui";

// 引入自己的组件库类
import App from "../App";
import Login from "../component/Login/Login";
import Student from "../component/Student/Student";
import Teacher from "../component/Teacher/Teacher";
import Manager from "../component/Manager/Manager";

Vue.use(VueRouter);

const routes = [
    {
        path: "/", 
        component: App,
        beforeEnter(to, from, next) {
            console.log(to);
            console.log(from);
            next();
        }
    },
    {
        path: "/student",
        component: Student,
        meta: { requiresAuth: true }
    },
    {
        path: "/teacher",
        component: Teacher,
        meta: { requiresAuth: true }
    },
    {
        path: "/manager",
        component: Manager,
        meta: { requiresAuth: true },
        beforeEnter(to, from, next) {
            console.log(to);
            console.log(from);
            next();
        }
    }
]

export default new VueRouter({
    mode: "history",
    routes
});
