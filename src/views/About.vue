<template>
  <div>about <button @click="openModal">Open</button></div>
</template>

<script>
export default {
  name: "About",
  methods: {
    openModal() {
      this.$modal.show("AuthForm", {
        content: "auth",
        header: "Auth Form",
      });
    },
  },
};
</script>

<style></style>
