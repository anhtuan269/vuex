const state = {
    result: 1
}
const getters = {
    tenResult: state => {
        return state.result * 10
    },
    nameResult: state => {
        return state.result + ' name product';
    },
}
const mutations = {
    increment(state) {
        state.result++
    },
    decrement(state) {
        state.result--
    }
}
const actions = {
    increment: ({ commit }) => {
        setTimeout(() => {
        commit('increment')                
        }, 1000);
    }
}
export default {
    state, mutations, actions,getters
}