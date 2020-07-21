import Vue from "vue";
import Router from "vue-router";
import timeline from "@/pages/timeline";
import Equipments from "@/pages/Equipments";
import profileTimeline from "@/pages/profileTimeline";
import profile from "@/pages/profile";
import company from "@/pages/company";
import companydetail from "@/pages/companydetail";
import postcompany  from "@/pages/postcompany";
import addcompany  from "@/pages/addcompany";
import demo1 from "@/pages/demo1";

Vue.use(Router);

export default new Router({
    mode: "history",
    routes: [
        {
        path: "/",
        name: 'landing',
        meta: { layout: "landing",
      title: 'Landing page'
      },
        component: require("@/pages/landing.vue").default
    },
      {
        path: "/timeline",
        name: "timeline",
        meta: {
          title: 'Home Page - Example App',
        },
        component: timeline
      },
      {
        path: "/Equipments",
        component: Equipments
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
      },
      {
        path: "/profileTimeline",
        name: 'profileTimeline',
        
        component: profileTimeline
      },
      {
        path: "/profile",
        alias: "/api/profiles",
        name: "profile",
        component: profile
      },
      
      {
        path: "/profile",
        alias: "/api/abouts",
        name: "about",
        component: profile
      },
  
      {
        path: "/profile",
        alias: "/api/experiences",
        name: "experience",
        component: profile
      },
  
      {
        path: "/profile",
        alias: "/api/education",
        name: "educations",
        component: profile
      },
	  {
        path: "/company",
        name: "company",
        component: company
      },
      {
        path: "/companydetail",
        name: "companydetail",
        component: companydetail
      },
      {
        path: "/postcompany",
        name: "postcompany",
        component: postcompany
      },
      {
        path: "/addcompany",
        name: "addcompany",
        component: addcompany
      },
	  {
        path: "/demo1",
        name: "demo1",
        component: demo1
      },
    ]
})