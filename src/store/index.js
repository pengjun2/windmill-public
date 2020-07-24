import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

const modules = {};
const context = require.context('../modules', true, /store\/index\.js$/);

context.keys().forEach((key) => {
  modules[key.replace(/^\.\/|\/store\/index\.js$/g, "")] = {namespaced: true, ...context(key).default};
});

export default new Vuex.Store({
  modules,
  strict: true
});
