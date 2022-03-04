<template>
  <div>
    <input v-model="propComp" name="test" />
    <button @click="onSave" name="save">Save</button>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  name: "TestVuex",
  data() {
    return {
      propComp: "",
    };
  },
  methods: {
    ...mapActions(["addData"]),
    onSave() {
      this.addData(this.propComp);
    },
  },
};
</script>

<style></style>
