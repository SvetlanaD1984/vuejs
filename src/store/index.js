import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const localDB = {
 
  "page1": [
	{ "id": 1, "date": "20.03.2020", "category": "Food", "value": 169 },
	{ "id": 2, "date": "21.03.2020", "category": "Navigation", "value": 50 },
	{ "id": 3, "date": "22.03.2020", "category": "Sport", "value": 450 }
  ],
  "page2": [
	{ "id": 4, "date": "23.03.2020", "category": "Entertaiment", "value": 969 },
	{ "id": 5, "date": "24.03.2020", "category": "Education", "value": 1500 },
	{ "id": 6, "date": "25.03.2020", "category": "Food", "value": 200 }
  ],
  "page3": [
  { "id": 7, "date": "23.03.2020", "category": "Entertaiment", "value": 969 },
  { "id": 8, "date": "24.03.2020", "category": "Education", "value": 1500 },
  { "id": 9, "date": "25.03.2020", "category": "Food", "value": 200 }
  ],
  "page4": [
   { "id": 10, "date": "23.03.2020", "category": "Entertaiment", "value": 969 },
   { "id": 11, "date": "24.03.2020", "category": "Education", "value": 1500 },
   { "id": 12, "date": "25.03.2020", "category": "Food", "value": 200 }
   ],
}


export default new Vuex.Store({
  state: {
    paymentsList: [],
    paymentsListIDS: [],
   
  },
  mutations: {
addNewPayment (state, payload) {
  const id = state.paymentsListIDS.length > 12 ? state.paymentsListIDS.length : 13
  state.paymentsListIDS.push(id)
  payload.id = id
  state.getPaymentsList.push(payload)
  },

updatePayment (state, payload) {
  const item = state.getPaymentsList.find(item => item.id === payload)
  if (item) {
  Object.assign(item, payload)
}
},

    setPaymentsListData (state, payload) {
      state.paymentsList = payload
    },
   
    addPaymentsListData (state, payload) {
      const newUniqObjs = payload.filter(obj => {
        return state.paymentsListIDS.indexOf(obj.id) < 0 
      })
      

    const uniqIDS = newUniqObjs.map(obj => obj.id)
    state.paymentsListIDS.push(...uniqIDS)
      state.paymentsList.push(...newUniqObjs)
      
      
  },
  

      
  },
  getters: {
    getPaymentsList: state => state.paymentsList,
    getPaymentsListFullPrice: state => {
      return state.paymentsList
        .reduce((res, cur) => res + cur.price, 0)
    },
   // getPaymentForm: state => state.paymentForm,
  
  
  },
  actions: {
    fetchData ({ commit }) {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          const items = []
          for (let i = 1; i < 105; i++) {
            items.push({
              date: '13.05.2021',
              category: 'Education',
              price: i
            })
          }
          resolve(items)
        }, 2000)
      })
        .then(res => {
          commit('setPaymentsListData', res)
        })
    },
    
  }
})
