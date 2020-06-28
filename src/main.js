import Vue from "vue";
import App from "./App.vue";
import router from "./router";

import './app-assets/vendors/css/vendors.min.css'

import './app-assets/css/bootstrap.css'
import './app-assets/css/bootstrap-extended.css'
import './app-assets/css/colors.css'
import './app-assets/css/components.css'
import './app-assets/css/themes/dark-layout.css'
import './app-assets/css/themes/semi-dark-layout.css'

import './app-assets/css/core/menu/menu-types/vertical-menu.css'
import './app-assets/css/core/colors/palette-gradient.css'
import './app-assets/css/pages/authentication.css'
import './app-assets/css/pages/users.css'

import './assets/css/style.css'
import './app-assets/css/core/menu/menu-types/horizontal-menu.css'


import './app-assets/vendors/css/charts/apexcharts.css'
import './app-assets/vendors/css/extensions/tether-theme-arrows.css'
import './app-assets/vendors/css/extensions/tether.min.css'
import './app-assets/vendors/css/extensions/shepherd-theme-default.css'

import './app-assets/css/pages/app-ecommerce-shop.css'


import mainLayout from "./layouts/mainLayout.vue";
import landingLayout from "./layouts/landingLayout.vue";
import loginRegister from "./layouts/loginRegister.vue";

Vue.component("landing-layout",landingLayout);
Vue.component("default-layout", mainLayout);
Vue.component("login-register-layout", loginRegister);
Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
