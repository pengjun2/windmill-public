import api from "@/utils/http";

/**
 * 企业认证
 * @param {*} data
 */
export function submitBusinessInfo(data) {
  return api({
    url: "business/auth",
    method: "post",
    data
  });
}
