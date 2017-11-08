"use strict"

import Vue from "vue";
import App from "./App";
import router from "./router/router";

// 导入axios，ajax的promise版本
import axios from "axios";

import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
import "element-ui/lib/index.js"

Vue.config.productionTip = false;
Vue.use(ElementUI);

// 将axios挂载到Vue的原型链上，在组件的methods中通过 this.$http() 使用
Vue.prototype.$http = axios;

const app = new Vue({
    router,
    render: h => h(App),
}).$mount("#app");
