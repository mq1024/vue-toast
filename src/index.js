'use strict';

import ToastComponent from './toast.vue';

const plugin = {
  install(Vue) {
    const ToastConstructor = Vue.extend(ToastComponent);

    let instance = null;

    let getInstance = () => {
      if (instance) {
        return instance;
      }
      return new ToastConstructor({
        el: document.createElement('div')
      });
    };

    let removeDom = el => {
      if (el.parentNode) {
        el.parentNode.removeChild(el);
      }
    }

    ToastConstructor.prototype.remove = function() {
      this.shown = false;
      instance = null;
      removeDom(this.$el);
    }

    let setOptions = (options) => {
      if (typeof options === 'string') {
        options = {
          message: options
        }
      }
      return options || {};
    }

    const show = (options) => {
      instance = getInstance();


      clearTimeout(instance.timer);
      instance.message = options.message || '';
      instance.duration = (typeof options.duration === 'number' && options.duration > 0) ? options.duration : 3000;
      instance.type = options.type || 'info';

      document.body.appendChild(instance.$el);

      Vue.nextTick(function() {
        instance.shown = true;
        instance.timer = setTimeout(function() {
          if(instance) {
            instance.remove();
            options.callback && options.callback();
          }
        }, instance.duration);
      });

      return instance;
    }

    const info = function(options) {
      options = setOptions(options);
      options = Object.assign({ type: 'info' }, options);
      return show(options);
    }

    const error = function(options) {
      options = setOptions(options);
      options = Object.assign({ type: 'error' }, options);
      return show(options);
    }

    const success = function(options) {
      options = setOptions(options);
      options = Object.assign({ type: 'success' }, options);
      return show(options);
    }
    const Toast = {
      info: info,
      error: error,
      success: success
    };

    Vue.toastr = Vue.prototype.$toastr = Toast;


  }
}
export default plugin;

