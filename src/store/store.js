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
    str_app,
    testData: {}
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
    setTestData(state, data) {
        state.testData = data
    }
}

const actions = {
    setTestData(content, data) {
        content.commit('setTestData', data)
    }
}

export default new Vuex.Store({
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

