import Vue from 'vue';
import App from './App.vue';
import ShowMessage from './alert';



Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
}).$mount('#app');

ShowMessage();




