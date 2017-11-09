"use strict"

import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

const state = {
    stUsername: "student",
    stPassword: "1234",
    teUsername: "teacher",
    tePassword: "1234",
    maUsername: "admin",
    maPassword: "admin",
    user: "",
    status: 0
};

const getters = {
    getStatus: (state) => {
        return state.status;
    }
};

const mutations = {
    doLogin(state, data) {
        state.user = data.username;
        if (data.username === state.stUsername && data.password === state.stPassword) {
            state.status = 1;
        } else if (data.username === state.teUsername && data.password === state.tePassword) {
            state.status = 2;
        } else if (data.username === state.maUsername && data.password === state.maPassword) {
            state.status = 3;
        } else {
            state.status = 0;
        }
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
