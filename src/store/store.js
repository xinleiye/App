"use strict"

import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

const state = {
    user: "",
    status: 0
};

const mutations = {
    isLogin(state, user) {
        state.user = user
    }
};

export default new Vuex.Store({
    state,
    mutations
});
