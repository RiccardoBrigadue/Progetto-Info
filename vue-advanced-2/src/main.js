import Vue from "vue";
import App from "./App.vue";
import "bootstrap/dist/css/bootstrap.css";
import VueRouter from "vue-router";
import ProductsPage from "./pages/ProductsPage";
import ProductPage from "./pages/ProductPage";

Vue.use(VueRouter);

var router = new VueRouter({
  mode: "history",
  routes: [
    { path: "/products", component: ProductsPage },
    { path: "/product/:id", component: ProductPage },
    { path: "/", redirect: "/products" }
  ]
});

new Vue({
  router,
  render: (h) => h(App)
}).$mount("#app");
