import Vue from 'vue'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
import App from './App.vue'
import Student from './components/student/Student.vue'
import Course from './components/course/Course.vue'
import Teacher from './components/teacher/Teacher.vue'

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

// import axios from 'axios'
// import VueAxios from 'vue-axios'
// Vue.use(VueAxios, axios);
// Vue.prototype.axios = axios;

Vue.use(VueRouter);
Vue.use(VueResource);
Vue.use(ElementUI)

Vue.config.productionTip = false

const routes = [{
  path : '/student',
  component : Student
},{
  path : '/course',
  component : Course
},{
  path : '/teacher',
  component : Teacher
}];

const router = new VueRouter({
  routes
});

// new Vue({
//   router
// }).$mount('#app')
new Vue({
  el: '#app',
  router,
  ...App,
});
