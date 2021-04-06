
import { createStore } from 'vuex'
import Result from './module/Result.js';

import * as actions from './actions'
import * as getters from './Getters'
import * as mutations from './Mutations'

const store = createStore({
    state: {
        value:''
    },
    getters,
    mutations,
    actions,
    modules: {
        Result,
    }
})

export default store;


