<template>
  <div class="btn">
    <div class="icon">
      <slot name="icon" />
    </div>
    <button>
      <slot name="default" v-bind:props="upperCaseText">Кликни меня</slot>
    </button>
  </div>
</template>

<script>
export default {
  props: ["text"],
  data() {
    return {};
  },
  methods: {},
  computed: {
    upperCaseText() {
      return "123123";
    },
  },
};
</script>
<style scoped>
.btn {
  display: flex;
}
</style>
