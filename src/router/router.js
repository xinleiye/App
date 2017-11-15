"use strict"

// 引入自己的组件库类
import Store from "../store/store";
import Login from "../views/Login";
import Student from "../views/Student";
import Teacher from "../views/Teacher";
import Manager from "../views/Manager";

export default [
    {
        path: "/",
        redirect: "/login"
    },
    {
        path: "/login",
        component: Login
    },
    {
        path: "/student",
        component: Student,
        //meta: { requiresAuth: true }
    },
    {
        path: "/teacher",
        component: Teacher,
        meta: { requiresAuth: true }
    },
    {
        path: "/manager",
        component: Manager,
        meta: { requiresAuth: true }
    },
    {
        path: "*",
        components: { login: Student }
    }
];
