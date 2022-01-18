<template>
  <div class="wrapper">
    <div class="item" v-for="(item, idx) in items" :key="idx">
      <span>{{ item.date }}</span
      >-<span>{{ item.category }}</span
      >-<span>{{ item.id }}</span
      >-<span @click="onClickContextItem($event, item)">...</span>
    </div>
  </div>
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
  methods: {
    editItem(item) {
      console.log(item);
    },
    onClickContextItem(event, item) {
      const items = [
        {
          text: "Edit",
          action: () => {
            this.editItem(item);
          },
        },
        {
          text: "Delete",
          action: () => {
            console.log("delete", item);
          },
        },
      ];
      this.$context.show({ event, items });
    },
  },
};
</script>

<style lang="scss"></style>
