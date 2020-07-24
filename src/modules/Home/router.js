
export default {
  path: "/Home",
  name: "Home",
  component: () => import('./views/index.vue'),
  children: [
    {
      path: "/Home/Detail",
      name: "Detail",
      component: () => import('./views/Detail/index.vue')
    },
    {
      path: "/Home/Add",
      name: "Add",
      component: () => import('./views/Add/index.vue')
    }
  ]
}
