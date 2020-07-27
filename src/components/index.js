import Vue from 'vue';

const files = require.context('./', true, /\/index\.vue$/);

/**
 * 全局注册组件
 */
files.keys().forEach(key => {
    
    const matched = key.match(/\/([\w-]+)\/index\.vue$/);
    
    if (matched) {
        const id = matched[1];
        Vue.component(id, files(key).default);
    }
})


