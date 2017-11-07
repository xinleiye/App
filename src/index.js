// 引入Vue官方及开源组件库类
import Vue from "vue";
import VueRouter from "vue-router";
import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
import "element-ui/lib/index.js"
//import { Button, Dialog } from "element-ui";

// 引入自己的组件库类
import App from "./App";
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
    { path: "/student", component: Student },
    { path: "/teacher", component: Teacher },
    { path: "/manager", component: Manager }
]

const router = new VueRouter({
    routes,
});

const app = new Vue({
    router,
    render: h => h(App),
    components: { App }
}).$mount("#app");