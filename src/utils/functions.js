export const listToTree = (data, options) => {
  options = options || {};
  let rootId = options.rootId || "0";
  let idKey = options.idKey || "id";
  let parentKey = options.parentKey || "parent";
  let childrenKey = options.childrenKey || "children";

  let tree = [],
    childrenOf = {};
  let item, id, parentId;

  for (let i = 0, length = data.length; i < length; i++) {
    item = data[i];
    id = item[idKey];
    parentId = item[parentKey] || rootId;
    childrenOf[id] = childrenOf[id] || [];
    item[childrenKey] = childrenOf[id];
    if (parentId !== rootId) {
      childrenOf[parentId] = childrenOf[parentId] || [];
      childrenOf[parentId].push(item);
    } else {
      tree.push(item);
    }
  }

  return tree;
};

// 小数点精确四舍五入
export const toRound = (num, decimals) => {
  return Number(Math.round(num + "e" + decimals) + "e-" + decimals);
};

export const randomString = len => {
  len = len || 32;
  let chars = "ABCDEFGHJKM$_-NPQRSTWXYZabcd$_-efhijkmnprstwxyz2345678$_-";
  let maxPos = chars.length;
  let pwd = "";
  for (let i = 0; i < len; i++) {
    pwd += chars.charAt(Math.floor(Math.random() * maxPos));
  }
  return `${pwd}${new Date().getTime()}`;
};

// 获取文件的后缀
export const getSuffix = filename => {
  let pos = filename.lastIndexOf(".");
  let suffix = "";
  if (pos != -1) {
    suffix = filename.substring(pos);
  }
  return suffix;
};

export default {
  listToTree,
  toRound,
  randomString,
  getSuffix
};
