import Vue from "vue";
import Router from "vue-router";
import timeline from "@/pages/timeline";
import equipments from "@/pages/equipments";

Vue.use(Router);

export default new Router({
    mode: "history",
    routes: [
        {
        path: "/",
        name: 'landing',
        meta: { layout: "landing" },
        component: require("@/pages/landing.vue").default
    },
      {
        path: "/timeline",
        name: "timeline",
        component: timeline
      },
      {
        path: "/equipments",
        component: equipments
      },
      {
        path: "/loginPage",
        meta:{layout: "login-register"},
        component: require("@/pages/loginPage").default
      },
      {
        path: "/registerPage",
        meta:{layout: "login-register"},
        component: require("@/pages/registerPage").default
      }
    ]
})