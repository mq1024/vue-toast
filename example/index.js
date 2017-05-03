import Vue from 'vue';
import Toast from '../src/index.js';
Vue.use(Toast);


let btn = document.getElementById('button');
btn.addEventListener('click', () => {
  Vue.toast({
    message: 'test ',
    position: 'center',
    iconClass: 'd-icon-success',
    duration: 3000
  });
});