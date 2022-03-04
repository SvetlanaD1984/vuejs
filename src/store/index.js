import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    paymentsList: [],
    categoryList: [],
  },
  mutations: {
    setPaymentsListData(state, payload) {
      state.paymentsList = payload;
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
    getCategoryList: (state) => state.categoryList,
  },
  actions: {
    fetchData({ commit }) {
      return new Promise((resolve) => {
        setTimeout(() => {
          const items = [];
          for (let i = 1; i < 101; i++) {
            items.push({
              date: "20.12.2021",
              category: "Education",
              value: i,
              id: i,
            });
          }
          resolve(items);
        }, 0);
      }).then((res) => commit("setPaymentsListData", res));
    },
    fetchCategory({ commit }) {
      return new Promise((resolve) => {
        setTimeout(() => {
          const items = ["Sport", "Education", "Internet", "Food", "Transport"];
          resolve(items);
        }, 0);
      }).then((res) => commit("setCategoryData", res));
    },
  },
});
