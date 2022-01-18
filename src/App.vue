<template>
  <div id="app">
    <div class="wrapper">
      <header>
        <div class="title">My personal costs</div>

        <div class="total" v-if="total">Total: {{ total }}</div>
      </header>
      <main>
        <add-payment-form />
    <payments-display :items="currentElements" />
    <pagination :cur="page" :n="n" :length="12" @paginate="changePage" />
      </main>
    </div>
  </div>
</template>

<script>
import AddPaymentForm from "./components/AddPaymentForm.vue";
import PaymentsDisplay from "./components/PaymentsDisplay.vue";
import { mapMutations, mapGetters, mapActions } from "vuex";
import Pagination from "./components/Pagination.vue";
export default {
  components: { PaymentsDisplay, AddPaymentForm, Pagination },
  name: "App",
  data() {
    return {
      show: true,
      page: 1,
      n: 3,
    };
  },
   computed: {
    ...mapGetters(["getPaymentsList"]),
    total() {
      return this.$store.getters.getPaymentsListFullValuePrice;
    },
    currentElements() {
      return this.getPaymentsList.slice(this.n * (this.page - 1), this.n * (this.page - 1) + this.n);
    },
  },
  methods: {
    ...mapMutations({ fetch: "setPaymentsListData" }),
    ...mapActions(["fetchData"]),
    changePage(p) {
      this.page = p;
      this.fetchData(p);
    },
  },
  async created() {
    await this.fetchData();
    if (this.$route.params?.page) {
      this.page = Number(this.$route.params.page);
    }
    // this.$store.dispatch('fetchData');
    // this.$store.commit('setPaymentsListData', this.fetchData());
  },
};
</script>

<style lang="scss" scoped>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
h1 {
  font-size: 20px;
}
</style>


