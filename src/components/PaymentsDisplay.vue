<template>
  <v-container>
    <v-row>
      <v-col :cols="1"> # </v-col>
      <v-col> Date </v-col>
      <v-col> Category </v-col>
      <v-col :cols="2"> Value </v-col>
    </v-row>
    <v-row v-for="(item, idx) in items" :key="idx">
      <v-col :cols="1">{{ item.id }}</v-col>
      <v-col>{{ item.date }}</v-col>
      <v-col>{{ item.category }}</v-col>
      <v-col :cols="2">{{ item.value }}</v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "PaymentsDisplay",
  props: {
    items: {
      type: Array,
      default: () => [],
    },
  },
};
</script>

<style lang="scss"></style>
