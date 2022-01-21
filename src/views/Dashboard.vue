<template>
  <v-container>
    <v-row>
      <v-col>
        <div class="text-h5 text-sm-h3 mb-8">My personal costs</div>
        <v-dialog v-model="dialog" width="500">
          <template v-slot:activator="{ on }">
            <v-btn color="teal" dark v-on="on">
              ADD NEW COST <v-icon>mdi-plus</v-icon>
            </v-btn>
          </template>
          <add-payment-form @addNewPayment="dialog = false" />
        </v-dialog>
        <!-- <my-button>
	                <template #icon>
	                  <v-icon>mdi-plus</v-icon>
	                </template>
	              Нажми меня
	                </my-button>
	              <my-button><template #default="{props}">{{props}}</template></my-button> -->

        <payments-display :items="currentElements" />
        <!-- <pagination
	                :cur="page"
	                :n="n"
	                :length="paymentsList.length"
	                @paginate="changePage"
	              /> -->
        <!-- <button @click="openModal">Add new cost +</button> -->
      </v-col>
      <v-col>
        chart
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import PaymentsDisplay from "../components/PaymentsDisplay.vue";
import { mapMutations, mapGetters, mapActions } from "vuex";
import AddPaymentForm from "../components/AddPaymentForm.vue";
// import MyButton from '../components/MyButton.vue';
// import Pagination from "../components/Pagination.vue";
export default {
  name: "Dashboard",
  components: {
    PaymentsDisplay,
    AddPaymentForm,
    // MyButton,
  },
  data() {
    return {
      addFormShow: false,
      dialog: false,
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
