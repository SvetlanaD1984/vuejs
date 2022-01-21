import Vue from "vue";
import VueRouter from "vue-router";
Vue.use(VueRouter);

const routes = [
  {
    path: "/add/payment/:category",
    name: "addPayment",
    component: () => import("../components/AddPaymentForm.vue"),
  },
  {
    path: "/dashboard",
    name: "dashboard",
    component: () =>
      import(/* webpackChunkName: "Dashboard" */ "../views/Dashboard.vue"),
  },
  {
    path: "/dashboard/:page",
    name: "dashboard",
    component: () =>
      import(/* webpackChunkName: "Dashboard" */ "../views/Dashboard.vue"),
  },
  {
    path: "/about",
    name: "about",
    component: () =>
      import(/* webpackChunkName: "About" */ "../views/About.vue"),
  },
  {
    path: "/notfound",
    name: "notfound",
    component: () =>
      import(/* webpackChunkName: "NotFound" */ "../views/NotFound.vue"),
  },
  {
    path: "*",
    component: () =>
      import(/* webpackChunkName: "NotFound" */ "../views/NotFound.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  routes,
});

const userAuth = true;

router.beforeEach((to, from, next) => {
  if (to.name !== "notfound" && !userAuth) {
    next({
      name: "notfound",
    });
  } else {
    next();
  }
});

const getTitleByRoutes = (routeName) => {
  return {
    dashboard: "Ура, у нас есть страница наших трат",
    about: "Страница о сервисе",
    notfound: "Страница не найдена",
  }[routeName];
};

router.afterEach((to) => {
  document.title = getTitleByRoutes(to.name);
});

export default router;
