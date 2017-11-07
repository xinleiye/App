"use strict"
// 引入Vue官方及开源组件库类
import Vue from "vue";
import VueRouter from "vue-router";
import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
import "element-ui/lib/index.js"
//import { Button, Dialog } from "element-ui";

// 引入自己的组件库类
import App from "./App";
import store from "./store/store"
import Login from "./component/Login/Login";
import Student from "./component/Student/Student";
import Teacher from "./component/Teacher/Teacher";
import Manager from "./component/Manager/Manager";

Vue.use(ElementUI);
Vue.use(VueRouter);
//Vue.use(Button);
//Vue.use(Dialog);

Vue.config.productionTip = false;

const routes = [
    { path: "/", component: Login },
    { path: "/student", component: Student, meta: { requireAuth: true } },
    { path: "/teacher", component: Teacher, meta: { requireAuth: true } },
    { path: "/manager", component: Manager, meta: { requireAuth: true } }
]

const router = new VueRouter({
    routes,
});

router.beforeEach((to, from, next) => {
    if (to.meta.requireAuth) {
        if (isEmptyObject(StorageEvent.state.user)) {
            next();
        } else {
            next({
                path: "/student",
                query: {redirect: to.fullPath}
            });
        }
    } else {
        next();
    }
})

const app = new Vue({
    router,
    render: h => h(App),
    components: { App }
}).$mount("#app");