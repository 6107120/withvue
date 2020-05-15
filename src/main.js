import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import Amplify from 'aws-amplify';
import '@aws-amplify/ui-vue';
import aws_exports from './aws-exports';
import { Auth, Logger } from 'aws-amplify';

Amplify.configure(aws_exports);
Amplify.Logger.LOG_LEVEL = "DEBUG";

const logger = new Logger("main");
Auth.currentAuthenticatedUser()
 .then(user => logger.debug(user))
 .catch(err => logger.debug(err));

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
