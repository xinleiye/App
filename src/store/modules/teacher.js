// 教师模块

const state = {
    kind: 'math'
}

const getters = {
    getTeacherKind() {
        return "english";
    }
}

const mutations = {
    setTeacherKind(state, data) {
        console.log(state, data)
    }
}

const actions = {
    fnInTeacherAction(content, data) {
        console.log(data)
        content.commit('setTeacherKind', data)
    }
}

export default {
    state,
    mutations,
    actions,
    getters
}
