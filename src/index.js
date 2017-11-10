"use strict"

import Vue from "vue";
import VueRouter from "vue-router";
import App from "./App";
import routes from "./router/router";
import Store from "./store/store";

// 导入axios，ajax的promise版本
import axios from "axios";

import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
import "element-ui/lib/index.js"

Vue.config.productionTip = false;

Vue.use(VueRouter);
Vue.use(ElementUI);

// 将axios挂载到Vue的原型链上，在组件的methods中通过 this.$http() 使用
Vue.prototype.$http = axios;

const router = new VueRouter({
    routes,
    mode: "history"
});

const app = new Vue({
    router,
    store: Store,
    render: h => h(App),
}).$mount("#app");
