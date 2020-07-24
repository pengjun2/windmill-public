import VueI18n from "vue-i18n";
import Vue from "vue";

const lang = Object.create(null);

const context = require.context("../modules", true, /lang\.js/);

const collectLang = (context) => {
  context.keys().forEach(key => {
    const moduleLang = context(key).default;
    Object.assign(lang, moduleLang);
  });
};

collectLang(context);

/**
 * 两种语言时的情况 深度替换为英文包
 * @param {*} obj 
 * @param {*} target 
 * @return {*} target
 */
// const deepReplace = (obj, target = {}) => {
//   for(let i in obj) {
//     if (typeof obj[i] === "object") {
//       target[i] = deepReplace(obj[i]);
//     }else {
//       target[i] = i;
//     }
//   }
//   return target;
// };

/**
 * 
 * @param {*} params 
 * @param {*} locale 
 * @param {*} target 
 * @return {*} target
 */
// 找到对应的语言包返回
const findLang = (params, locale, target = {}) => {
  for(let i in params) {
    if (i === locale) {
      target = params[i];
    }
  }
  return target;
};

/**
 * 两种以上语言时，根据传入语言转换对应的语言包
 * @param {*} obj 
 * @param {*} locale 
 * @param {*} target 
 * @return {*} target
 */
const deepReplaceLang = (obj, locale, target = {}) => {
  for(let i in obj) {
    if (typeof obj[i] === "object" ) {
      target[i] = findLang(obj[i], locale);
    }
  }
  return target;
};

const locale = "zw";

Vue.use(VueI18n);

const i18n = new VueI18n({
  locale,
  messages : {
    cn: deepReplaceLang(lang, 'cn'),
    en: deepReplaceLang(lang, 'en'),
    zw: deepReplaceLang(lang, 'zw'),
  }
});

export default i18n;
