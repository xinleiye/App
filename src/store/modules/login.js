// 登陆模块

import { str_login } from '../../assets/lang/zh_cn'

const state = {
    userName: '',
    userId: '',
    status: 0,
    str_login,
    loginCount: 999
}

const mutations = {
    /*doLogin(state, data) {
        state.userName = data.username
        state.userId = data.id
        state.status = data.id
    },*/
    doLogout(state) {
        state.status = 0
    }
}

const actions = {
    /*doLogin(content) {
        console.log(content);
        console.log('I\'m doLogin in login store')
        content.commit('doLogin', data)
    },*/
    doLogout(content) {
        content.commit('doLogout')
    }
}

const getters = {
    getLoginStatus: (state) => {
        return state.status
    }
}

export default {
    namespaced: true,
    state,
    mutations,
    actions,
    getters
}

