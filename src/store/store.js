'use strict'

// app根组件

import Vue from 'vue'
import Vuex from 'vuex'
import login from './modules/login'
import student from './modules/student'
import teacher from './modules/teacher'
import manager from './modules/manager'
import { str_app } from "../assets/lang/zh_cn"

Vue.use(Vuex)

const state = {
    userName: '',
    userId: '',
    status: 0,
    str_app,
    testData: {},
    count: 0
}

const getters = {
    getStrResource: (state) => {
        return state.str_app
    },
    getTestData: (state) => {
        return state.testData
    }
}

const mutations = {
    doLogin(state, data) {
        state.userName = data.username
        state.userId = data.id
        state.status = data.id
    },
    setTestData(state, data) {
        state.testData = data
    },
    changeCount(state, data) {
        state.count = data;
    }
}
const actions = {
    doLogin(content, data) {
        console.log('I\'m doLogin in root store')
        content.commit('doLogin', data)
    },
    setTestData(content, data) {
        content.commit('setTestData', data)
    },
    changeCount(content, data) {
        console.log(data);
        content.commit("changeCount", data);
    }
}

const store = new Vuex.Store({
    state,
    getters,
    mutations,
    actions,
    modules: {
        login,
        student,
        teacher,
        manager
    }
})

console.log(store)

export default store
