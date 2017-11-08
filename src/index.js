"use strict"

import Vue from "vue";
import App from "./App";
import router from "./router/router";

import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
import "element-ui/lib/index.js"

Vue.config.productionTip = false;
Vue.use(ElementUI);

const app = new Vue({
    router,
    render: h => h(App),
}).$mount("#app");
