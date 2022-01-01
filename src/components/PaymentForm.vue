<template>
  <div>
 
 <button class="btn" @click="showbtn">ADD NEW COST+</button>
 
     <div v-if="show">
    <button @click="save">ADD</button>
    <input placeholder="Date" v-model="date" />
    <input placeholder="Category" v-model="category" />
    <input placeholder="Price" v-model.number="price" />
  </div>


  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import { mapMutations } from 'vuex'

export default {
  data () {
    return {
      date: '',
      category: '',
      price: 0,
      show: false,
    }
     
  },

  
 props: {
    items: Array
  },
  
   methods: {
  ...mapMutations([
    'addNewPayment',
    'updatePayment'
  ]),

    save () {
      const { date, category, price } = this
      const payload = { date, category, price }
      if (this.id) {
        payload.id = this.id 
        this.updatePayment(payload)
      } else {
        this.addNewPayment(payload)

      }

          
        }
      },

     
   computed: {
    ...mapGetters([
      'getPaymentsList'
    ]),
   }, 
   
 mounted () {
   if (this.id) {
     const item = this.getPaymentsList.find((p => p.id === this.id))
     if (item) {
       this.date = item.date
       this.category = item.category
       this.price = item.price
       }
        
       }
     }
   }


</script>

<style>
.btn {
  background-color: #008080;
}
</style>
