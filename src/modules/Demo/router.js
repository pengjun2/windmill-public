export default {
  path: "/Demo",
  name: "Demo",
  component: () => import('./views/index.vue'),
  children: [
    {
      path: "/Demo/Detail",
      name: "Detail",
      component: () => import('./views/Detail/index.vue')
    },
    {
      path: "/Demo/Add",
      name: "Add",
      component: () => import('./views/Add/index.vue')
    }
  ]
}
