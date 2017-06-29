'use strict';

import ToastComponent from './toast.vue';

const plugin = {
  install(Vue) {
    const ToastConstructor = Vue.extend(ToastComponent);
    let toastArr = [];

    let getInstance = () => {
      if (toastArr.length) {
        let instance = toastArr[0];
        toastArr.splice(0, 1);
        return instance;
      }
      return new ToastConstructor({
        el: document.createElement('div')
      });
    };

    let addInstance = instance => {
      if (instance) {
        toastArr.push(instance);
      }
    }

    let removeDom = el => {
      if (el.parentNode) {
        el.parentNode.removeChild(el);
      }
    }

    ToastConstructor.prototype.hide = function(callback) {
      this.shown = false;
      removeDom(this.$el)
        // this.$el.addEventListener('transitionend', removeDom);
      this.closed = true;
      addInstance(this);
      callback && callback();



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
      let instance = getInstance();
      instance.closed = false;
      clearTimeout(instance.timer);
      instance.timer = null;

      instance.message = options.message || '';
      instance.duration = (typeof options.duration === 'number' && options.duration > 0) ? options.duration : 3000;
      instance.type = options.type || 'info';
      instance.position = options.position || 'middle';
      instance.callback = options.callback || null;

      document.body.appendChild(instance.$el);

      Vue.nextTick(function() {
        instance.shown = true;

        instance.timer = setTimeout(function() {
          if (instance.closed) {
            return;
          }
          instance.hide(options.callback);
        }, instance.duration);
      });

      return instance;
    }

    const info = function(options) {
      options = setOptions(options);
      options = Object.assign({ type: 'info' }, options);
      return show(options);
    }
    const success = function(options) {
      options = setOptions(options);
      options = Object.assign({ type: 'success', position: 'top' }, options);
      return show(options);
    }
    const error = function(options) {
      options = setOptions(options);
      options = Object.assign({ type: 'error' }, options);
      return show(options);
    }

    const Toast = {
      info: info,
      success: success,
      error: error
    };

    Vue.toast = Vue.prototype.$toast = Toast;


  }
}
export default plugin;
