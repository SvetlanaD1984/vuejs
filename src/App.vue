<template>
  <div id="app">
    <header class="header">
      My personal costs
    </header>
    <main>
     <PaymentForm @updateData="updateData" />
     
      <PaymentsList :items="paymentsList" />
    </main>
  </div>
</template>

<script>
import PaymentsList from './components/PaymentsList'
import PaymentForm from './components/PaymentForm'
import { mapActions } from 'vuex'
export default {
  name: 'App',
  components: {
    PaymentsList,
    PaymentForm
  },
  data () {
    return {
    }
  },
  methods: {
    // ...mapActions([
    //   'fetchData'
    // ]),
    ...mapActions({
      fetchListData: 'fetchData'
    }),
   /* onDataAdded (data) {
      this.paymentsList.push(data)
    },*/
    
  
  },
  mounted () {
    this.fetchListData()
  }
}
</script>

<style  >
.header {
  color: black;
}
</style>