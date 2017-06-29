# Overview
vue-toast is a mobile toast plugin for vue.js.

# Installation
First, install `mz-vue-toast` from npm or bower:
```bash
$ npm install mz-vue-toast
$ bower install mz-vue-toast
```

# Usage
```Javascript
// before start
import Vue from 'vue';
import Toast from 'mz-vue-toast';
Vue.use(Toast);

```
Basically you can pass a string to `Toast`:
```Javascript
Vue.toast.info('test');
Vue.toast.success('success');
Vue.toast.error('error');
```
Or invoke `Toast` with an object as its configuration:
```Javascript
Vue.toast.info({
  message: 'test',
  duration: 3000,
  className: 'my-class'
});

```

# API
| Option    | Description                                    | Value                   | Default  |
|-----------|------------------------------------------------|-------------------------|----------|
| message   | content of the toast                           |                         |          |
| duration  | time before the toast vanishes, in millisecond |                         | 3000     |
| className | custom class name of the toast                 |                         |          |
| position  | position of the toast                          |    'top' 'middle'       |          |
| callback  |  callback after toast hide                     |                         |          |


# License
MIT