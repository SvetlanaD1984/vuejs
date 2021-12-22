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
    save () {
      const { date, category, price } = this
      this.$emit('updateData', { date, category, price })
    },

    showbtn: function() {
     this.show = !this.show;
     this.$emit('clicked', this.show)
     }
    }
  }

</script>

<style>
.btn {
  background-color: #008080;
}
</style>