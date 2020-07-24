import Vue from "vue";
import VueRouter from "vue-router";

const context = require.context("../modules", true, /router\.js/);

let routes = [
  {
    path: '/',
    name: 'Index',
    component: () => import('../modules/Home/views/Add')
  },
];

context.keys().forEach((url) => {
  routes = routes.concat(context(url).default);
})

Vue.use(VueRouter);

const router = new VueRouter({
  routes,
});
console.log(routes,'===')
export default router;
