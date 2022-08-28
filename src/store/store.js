import Vue from "vue";
import Vuex from 'vuex'
import axios from 'axios'


Vue.use(Vuex)

const store = new Vuex.Store({
    state: () => ({
        users: [],
    }),
    mutations: {
        setUsers(state, users) {
            state.users = users
        },
    },
    actions: {
        async fetchUsers({commit}) {
            const resp = await axios.get('https://jsonplaceholder.typicode.com/users')
            commit('setUsers', resp.data)
        },
    },
})

export default store