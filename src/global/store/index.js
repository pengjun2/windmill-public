import api from "@/utils/http";

export default {
  state: {
    globalData: {
      name: '测试',
    }
  },
  mutations: {
    changeGlobalData(state, data) {
      state.globalData = data;
    }
  },
  actions: {
    getGlobalDataInfo({}, params) {
      return api({
        url: "/admin/businessList",
        method: "post",
        params: params.params,
        data: params.data
      });
    }
  }
};