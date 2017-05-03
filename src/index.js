import ToastComponent from './toast.vue';

const plugin = {
  install(vue, defaultOptions = {}) {
    Object.assign(ToastComponent.DEFAULT_OPT, defaultOptions); // 全局默认属性
    const ToastConstructor = vue.extend(ToastComponent);

    let toastPool = [];
    let getInstance = () => {
      if (toastPool.length > 0) {
        let instance = toastPool[0];
        toastPool.splice(0, 1);
        return instance;
      }
      return new ToastConstructor({
        el: document.createElement('div')
      });
    };

    let addInstance = instance => {
      if (instance) {
        toastPool.push(instance);
      }
    };

    let removeDom = event => {
      if (event.target.parentNode) {
        event.target.parentNode.removeChild(event.target);
      }
    };

    ToastConstructor.prototype.close = function() {
      this.showing = false;
      this.$el.addEventListener('transitionend', removeDom);
      this.closed = true;
      addInstance(this);
    };

    function toast(options = {}) {
      let instance = getInstance();
      if (typeof options === 'string') {
        instance.options.message = options;
      } else {
        instance.options = options;
      }
      let duration = options.duration || ToastComponent.DEFAULT_OPT.duration;
    
      instance.closed = false;
      clearTimeout(instance.timer);
     
      document.body.appendChild(instance.$el);

      vue.nextTick(function() {
        instance.showing = true;
        instance.$el.removeEventListener('transitioned', removeDom);
        instance.timer = setTimeout(function() {
          if (instance.closed) return;
          instance.close();
        }, duration);
      });
      return instance;
    }

    vue.toast = vue.prototype.$toast = toast;
  }
};
export default plugin;
