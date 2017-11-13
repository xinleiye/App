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

// 登陆模块
const loginModule = {
    state: {
        userName: "",
        userId: "",
        status: 0
    },
    mutations: {
        doLogin(state, data) {
            state.userName = data.username;
            state.userId = data.id;
            state.status = data.id;
        }
    },
    actions: {
        doLogin(content, data) {
            content.commit("doLogin", data);
        }
    },
    getters: {
        getStatus: (state) => {
            return state.status;
        }
    }
}

// 学生模块
const studentModule = {
    state: {
    },
    mutations: {
    },
    actions: {
    },
    getters: {
    }
}

// 教师模块
const teacherModule = {
    state: {
    },
    mutations: {
    },
    actions: {
    },
    getters: {
    }
}

// 教委模块
const managerModule = {
    state: {
    },
    mutations: {
    },
    actions: {
    },
    getters: {
    }
}

const store = new Vuex.Store({
    modules: {
        login: loginModule,
        student: studentModule,
        teacher: teacherModule,
        manager: managerModule
    }
});
