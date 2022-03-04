<template>
  <main>
    <!-- <add-payment-form /> -->
    <payments-display :items="currentElements" />
    <pagination
      :cur="page"
      :n="n"
      :length="paymentsList.length"
      @paginate="changePage"
    />
    <button @click="openModal">Add new cost +</button>
  </main>
</template>

<script>
import PaymentsDisplay from "../components/PaymentsDisplay.vue";
import { mapMutations, mapGetters, mapActions } from "vuex";
import Pagination from "../components/Pagination.vue";
export default {
  name: "Dashboard",
  components: {
    PaymentsDisplay,
    Pagination,
  },
  data() {
    return {
      addFormShow: false,
      settings: {
        content: "addPaymentForm",
        header: "Add new cost",
      },
      page: 1,
      n: 10,
    };
  },
  computed: {
    ...mapGetters({ paymentsList: "getPaymentsList" }),
    total() {
      return this.$store.getters.getPaymentsListFullValuePrice;
    },
    currentElements() {
      const { n, page } = this;
      return this.paymentsList.slice(n * (page - 1), n * (page - 1) + n);
    },
  },
  methods: {
    ...mapMutations({ fetch: "setPaymentsListData" }),
    ...mapActions(["fetchData"]),
    changePage(p) {
      this.page = p;
    },
    openModal() {
      this.$modal.show("AddPaymentForm", {
        content: "addPaymentForm",
        header: "Add new cost",
      });
    },
  },
  async created() {
    if (this.$route.params?.page) {
      this.page = Number(this.$route.params.page);
    }
    // this.$store.dispatch('fetchData');
    // this.$store.commit('setPaymentsListData', this.fetchData());
  },
};
</script>

<style></style>
