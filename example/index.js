import Vue from 'vue';
import Toast from "../src/index.js";

(function() {
  Vue.use(Toast);





  let btnInfo = document.getElementById('toast_info');
  btnInfo.addEventListener('click', () => {
    Vue.toastr.info('info');
  });

  let btnSuccess = document.getElementById('toast_success');
  btnSuccess.addEventListener('click', () => {
    Vue.toastr.success('success');
  });
})();
