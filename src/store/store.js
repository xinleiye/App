"use strict"

import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

const state = {
    userName: "",
    userId: "",
    status: 0
};

const getters = {
    getStatus: (state) => {
        return state.status;
    }
};

const mutations = {
    doLogin(state, data) {
        state.userName = data.username;
        state.userId = data.id;
        state.status = data.id;
    }
};

const actions = {
    doLogin(content, data) {
        content.commit("doLogin", data);
    }
}

export default new Vuex.Store({
    state,
    getters,
    mutations,
    actions
});
