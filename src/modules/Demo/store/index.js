import api from "@/utils/http";

export default {
  state: {
    demoData: {
      name: '测试',
    }
  },
  mutations: {
    changedemoData(state, data) {
      state.demoeData = data;
    }
  },
  actions: {
    getInfo({}, params) {
      return api({
        url: "/admin/businessList",
        method: "post",
        params: params.params,
        data: params.data
      });
    }
  }
};