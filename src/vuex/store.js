import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import cookie from 'vue-cookie'
Vue.use(Vuex)

export default new Vuex.Store({
	state: {
		user: null,
		visits:null

	},
	mutations: {
		SET_USER_DATA(state, data) {
			state.visits = data.visits
			console.log(state.visits)
			cookie.set('token', data.token,{ expires: "24h" })
			delete data['visits']
			delete data['token']
			state.user = data
			localStorage.setItem('user', JSON.stringify(data))
		},
		REMOVE_USER_DATA(state) {
			state.user = null
			cookie.delete('token')
			localStorage.removeItem('user')
		},
		GET_VISITS(state, data) {
			state.visits = data
		}
	},
	actions: {
		login({ commit }, credentials) {
			return axios
				.post('http://192.168.0.149:3000/login', credentials)
				.then(({ data }) => {
					// console.log('user data is:', data )
					commit('SET_USER_DATA', data)
				})
		},
		login1({ commit }, credentials) {
			return axios
				.post('http://122.116.138.18:3000/login', credentials)
				.then(({ data }) => {
					// console.log('user data is:', data)
					commit('SET_USER_DATA', data)
				})
		},
		logOut({ commit }) {
			commit('REMOVE_USER_DATA')
		},
		createUser({ commit }, userData) {
			console.log(commit)
			return axios.post('http://122.116.138.18:3000/signup', userData)
		}
	},
	getters: {
		loggedIn(state) {
			return !!state.user
		}
	}
})
