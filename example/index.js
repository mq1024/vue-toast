import Vue from 'vue';
import  Toast from "../src/index.js";
Vue.use(Toast);


let btn = document.getElementById('button');
btn.addEventListener('click', () => {
 Vue.toastr.info('dddd');
 Vue.toastr.info('eeee');
});


