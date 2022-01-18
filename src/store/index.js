import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export const localStorage = {
 
  "page1": [
  { "id": 1, "date": "20.03.2020", "category": "Sport", "value": 169 },
  { "id": 2, "date": "21.03.2020", "category": "Education", "value": 50 },
  { "id": 3, "date": "22.03.2020", "category": "Internet", "value": 450 }
  ],
  "page2": [
  { "id": 4, "date": "23.03.2020", "category": "Sport", "value": 969 },
  { "id": 5, "date": "24.03.2020", "category": "Transport", "value": 1500 },
  { "id": 6, "date": "25.03.2020", "category": "Food", "value": 200 }
  ],
  "page3": [
  { "id": 7, "date": "26.03.2020", "category": "Internet", "value": 969 },
  { "id": 8, "date": "27.03.2020", "category": "Education", "value": 1500 },
  { "id": 9, "date": "28.03.2020", "category": "Food", "value": 200 }
  ],
  "page4": [
   { "id": 10, "date": "29.03.2020", "category": "Internet", "value": 969 },
   { "id": 11, "date": "30.03.2020", "category": "Education", "value": 1500 },
   { "id": 12, "date": "31.03.2020", "category": "Food", "value": 200 }
   ],
}


export default new Vuex.Store({
  state: {
    paymentsList: [],
    paymentsListIds: [],
    categoryList: [],
  },
  mutations: {
    setPaymentsListData(state, payload) {
      const newUniqIdsObs = payload.filter((item) => {
        return state.paymentsListIds.indexOf(item.id) < 0
      });
      const uniqIds = newUniqIdsObs.map((obj) => obj.id);
      state.paymentsList.push(...newUniqIdsObs);
      state.paymentsListIds.push(...uniqIds);
    },
    addPaymentListData(state, payload) {
      state.paymentsList.push(payload);
    },
    editPaymentListFirstElement(state, payload) {
      // state.paymentsList[0] = payload
      Vue.set(state.paymentsList, 0, payload);
      // OR
      state.paymentsList[0] = payload;
      state.paymentsList = [...state.paymentsList];
    },
    setCategoryData(state, paylaod) {
      state.categoryList = paylaod;
    },
  },
  getters: {
    getPaymentsListFullValuePrice: (state) => {
      return state.paymentsList.reduce((acc, cur) => acc + cur.value, 0);
    },
    getPaymentsList: (state) =>
      state.paymentsList?.length ? state.paymentsList : [],
    getCategoryList: state => state.categoryList,
  },
  actions: {
    fetchData({ commit }, page) {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          const items = localStorage[`page${page}`];
          resolve(items);
        }, 2000);
      }).then((res) => commit("setPaymentsListData", res));
    },
    fetchCategory({ commit }) {
      return new Promise((resolve) => {
        setTimeout(() => {
          const items = ["Sport", "Education", "Internet", "Food", "Transport"];
          resolve(items);
        }, 2000);
      }).then((res) => commit("setCategoryData", res));
    },
  },
});
