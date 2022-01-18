<template>
  <div class="wrapper">
      <div class="item" v-for="item, idx in items" :key="idx">
          {{ item }}
      </div>
  </div>
</template>

<script>
export default {
    name: "PaymentsDisplay",
    props: {
        items: {
            type: Array,
            default: ()=>[],
        }
    }
}
</script>

<style lang="scss">
</style>

