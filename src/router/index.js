import Vue from "vue";
import VueRouter from "vue-router";
import Login from "../views/system/Login.vue";
import Home from "../views/system/Home";
import Test1 from "@/views/Home/Test1";
import Test2 from "@/views/Home/Test2";

Vue.use(VueRouter);

const routes = [
    {
        path: "/",
        name: "Login",
        component: Login,
        hidden: true
    },
    {
        path: '/Home',
        name: '导航一',
        component: Home,
        children: [
            {
                path: '/Test1',
                name: '选项一',
                component: Test1
            },
            {
                path: '/Test2',
                name: '选项二',
                component: Test2
            }
        ]
    }

];

const router = new VueRouter({
    routes
});

export default router;
