<template>
  <v-app>
    <v-app-bar app flat>
      <v-btn plain :ripple="false" to="/dashboard">Dashboard</v-btn>
      <v-btn plain :ripple="false" to="/about">About</v-btn>
      <v-btn plain :ripple="false" to="/home">Home</v-btn>
    </v-app-bar>

    <v-main>
      <router-view />
    </v-main>
    <transition name="fade">
      <modal-window-add-pyament-form
        :settings="settings"
        :componentName="componentName"
        v-if="componentName"
      />
    </transition>
  </v-app>
</template>

<script>
import { mapActions } from "vuex";
export default {
  components: {
    ModalWindowAddPyamentForm: () =>
      import(
        /* webpackChunkName: "Modal" */ "./components/ModalWindowAddPaymentForm.vue"
      ),
  },
  name: "App",
  data() {
    return {
      settings: {},
      componentName: "",
    };
  },
  methods: {
    ...mapActions(["fetchData"]),
    goToPageNotFound() {
      if (this.$route.name === "notfound") return;
      this.$router.push({
        name: "notfound",
      });
    },
    onShow({ name, settings }) {
      this.componentName = name;
      this.settings = settings;
    },
    onHide() {
      this.settings = {};
      this.componentName = "";
    },
  },
  async created() {
    await this.fetchData();
  },
  mounted() {
    this.$modal.EventBus.$on("show", this.onShow);
    this.$modal.EventBus.$on("hide", this.onHide);
  },
  beforeDestroy() {
    this.$modal.EventBus.$off("show");
    this.$modal.EventBus.$off("hide");
  },
};
</script>

<style>
.app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.h1 {
  font-size: 20px;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>

