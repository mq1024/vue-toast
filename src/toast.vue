<template>
  <div v-show="shown" class="toast-mask">
    <transition>
      <div v-show="shown && position=='middle'" class="toast" :class="toastClass">
        <i :class="['toast-icon',type+'-icon']" v-if="type!='info'"></i>
        <span class="toast-message" v-text="message"></span>
      </div>
    </transition>
    <transition name="toast-top">
      <div v-show="shown && position=='top'" class="toast toast-top" :class="toastClass">
        <i :class="['toast-icon',type+'-icon']" v-if="type!='info'"></i>
        <span class="toast-message" v-text="message"></span>
      </div>
    </transition>
  </div>
</template>
<style scoped lang="scss">
* {
  box-sizing: border-box;
}
.toast-mask {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: transparent;
  z-index: 1000;
}

.toast {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate3d(-50%, -50%, 0);
  max-width: 80%;
  padding: 8px 16px;
  border-radius: 4px;
  background: rgba(0, 0, 0, 0.6);
  color: #fff;
  box-sizing: border-box;
  text-align: center;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
}

.toast-top {
  top: 44px;
  left: 50%;
  transform: translate3d(-50%, 20px, 0);
}

.toast-top-enter {
  opacity: 0;
  transform: translate3d(-50%, 0px, 0);
}

.toast-top-enter-active {
  transition: all .5s cubic-bezier(0.25, 0.1, 0.25, 1.0);
}

.v-enter {
  opacity: 0;
  transform: translate3d(-50%, 20px, 0);
}

.v-enter-active {
  transition: all .5s cubic-bezier(0.25, 0.1, 0.25, 1.0);
}

.v-leave {
  opacity: 1;
}

.v-leave-active {
  transition: all .5s cubic-bezier(0.25, 0.1, 0.25, 1.0);
  opacity: 0;
}

.toast-message {
  font-size: 14px;
  text-align: middle;
}
.toast-icon {
  display: inline-block;
  width: 20px;
  height: 20px;
  border: 1px solid;
  vertical-align: middle;
}

@keyframes slideUp {
  0% {
    opacity: 0;
    transform: translate3d(-50%, 0px, 0);
  }
  100% {
    opacity: 1;
    transform: translate3d(-50%, 20px, 0);
  }
}

.slide-up {
  animation: slideUp .5s cubic-bezier(0.25, 0.1, 0.25, 1.0);
}
</style>
<script>
export default {

  data() {
      return {
        shown: false
      }
    },
    props: {
      message: String,
      type: {
        type: String,
        default: 'info' //info/success/error
      },
      duration: {
        type: Number,
        default: 3000
      },
      className: [String, Array],
      position: {
        type: String,
        default: 'middle'
      },
      callback: Function
    },

    computed: {
      toastClass() {
        var classes = [];
        let className = this.className;

        if (className) {
          if (typeof className === 'string') {
            classes.push(className);
          }
          if (Array.isArray(className)) {
            classes = classes.concat(className);
          }
        }
        return classes.join(' ');
      }
    }

};
</script>
