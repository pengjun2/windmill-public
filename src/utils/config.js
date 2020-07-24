let ip = "http://192.168.0.213:8888/";

// if (process.env.NODE_ENV === 'production') {
//   ip = `http://${window.location.host}/`;
// };

// ip = 'http://47.106.179.241:8888' //测试环境
// let s = location.host.split(":")[0];
// ip = `${location.protocol}//${s}:8888/`;
// ip = `${location.origin}/v1/api/`;

export default {
  base_url: ip
};
