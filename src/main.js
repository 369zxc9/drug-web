import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

import {postRequest} from "@/utils/api";
import {getRequest} from "@/utils/api";
import {initMenu} from "@/utils/menus";

Vue.prototype.getRequest = getRequest;
Vue.prototype.postRequest = postRequest;
Vue.config.productionTip = false
Vue.use(ElementUI);

router.beforeEach(((to, from, next) => {
    // if (window.sessionStorage.getItem('tokenStr')) {
    //     initMenu(router, store)
       //判断用户信息是否存在
    // if (!window.sessionStorage.getItem('user')) {
    //     return getRequest().then(res => {
    //             if (res) {
                       //存入用户信息
    //                 window.sessionStorage.setItem('user', JSON.stringify(res));
    //                 next();
    //             }
    //         }
    //     )
    // }
    //     next();
    // }else {
    //     if (to.path=='/'){
    //         next();
    //     }else{
    //     next('/redirect='+to.path);
    // }
    // }
    initMenu(router, store);
    next();

}))
new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')
