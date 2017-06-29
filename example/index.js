import Vue from 'vue';
import Toast from "../src/index.js";

(function() {
  Vue.use(Toast);

  let btnInfo = document.getElementById('toast_info');
  btnInfo.addEventListener('click', () => {
    console.log("click info");
    Vue.toast.info('info');
  });

  let btnSuccess = document.getElementById('toast_success');
  btnSuccess.addEventListener('click', () => {
    console.log("click success");
    Vue.toast.success({
      duration: 3000,
      message: 'success',
      callback: function() {
        // your code 
      }
    });
  });
})();
