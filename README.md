# Overview
vue-toast is a mobile toast plugin for vue.js.

# Installation
First, install `vue-toast` from npm:
```bash
$ npm install vue-toast
```

# Usage
```Javascript
// before start
import Toast from 'vue-toast';
Vue.use(Toast);

```
Basically you can pass a string to `Toast`:
```Javascript
Vue.toast('test');
```
Or invoke `Toast` with an object as its configuration:
```Javascript
Vue.toast({
  message: 'test',
  position: 'bottom',
  duration: 5000
});
```

# API
| Option    | Description                                    | Value                   | Default  |
|-----------|------------------------------------------------|-------------------------|----------|
| message   | content of the toast                           |                         |          |
| position  | location of the toast relative to viewport     | 'top' 'bottom' 'middle' | 'middle' | 
| duration  | time before the toast vanishes, in millisecond |                         | 3000     |
| className | custom class name of the toast                 |                         |          |

# License
MIT