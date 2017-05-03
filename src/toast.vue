<template>
  <div>
    <transition name="fade">
      <div v-show="showing" class="nono-toast" :class="toastClass" >
        <span class="nono-toast-text" v-html="mergedOption.message || options.message"></span>
      </div>
    </transition>
  </div>
</template>
<style>
.nono-toast {
  position: fixed;
  max-width: 80%;
  border-radius: 5px;
  background: rgba(0, 0, 0, 0.7);
  color: #fff;
  box-sizing: border-box;
  text-align: center;
  z-index: 1000;
  transition: opacity .3s linear;
}

.nono-toast.middle {
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.nono-toast.top {
  top: 50px;
  left: 50%;
  transform: translate(-50%, 0);
}

.nono-toast.bottom {
  bottom: 50px;
  left: 50%;
  transform: translate(-50%, 0);
}

.nono-toast-text {
  display: block;
  font-size: 14px;
  text-align: middle;
  padding: 10px 20px;
}

.fade-enter,
.fade-leave,
.fade-leave-active {
  opacity: 0;
}
</style>
<script>
const DEFAULT_OPT = {
  message: '',
  className: '',
  position: 'middle',
  duration: 3000
};

export default {
  DEFAULT_OPT: DEFAULT_OPT,

  data() {
    return {
      options: {},
      showing: false
    };
  },

  computed: {
    mergedOption() {
      return Object.assign({}, DEFAULT_OPT, this.options);
    },

    toastClass() {
      var classes = [];
      let className = this.options.className;
      let position = this.mergedOption.position;

      if (className) {
        if (typeof className === 'string') {
          classes.push(className);
        }
        if (Array.isArray(className)) {
          classes = classes.concat(className);
        }
      }

      switch (position) {
        case 'top':
          classes.push('top');
          break;
        case 'bottom':
          classes.push('bottom');
          break;
        default:
          classes.push('middle');
      }
      classes.push(this.className);
      return classes.join(' ');
    }
  }

};
</script>
