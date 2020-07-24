import api from "@/utils/http";

export default {
  state: {
    homeData: {}
  },
  mutations: {
    changeHomeData(state, data) {
      state.homeData = data;
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
