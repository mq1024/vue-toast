# Overview
vue-toast is a mobile toast plugin for vue.js.

# Installation
First, install `mz-vue-toast` from npm:
```bash
$ npm install mz-vue-toast
```

# Usage
```Javascript
// before start
import Toast from 'mz-vue-toast';

```
Basically you can pass a string to `Toast`:
```Javascript
Toast.info('test');
Toast.success('success');
Toast.error('error');
```
Or invoke `Toast` with an object as its configuration:
```Javascript
Toast.info({
  message: 'test',
  type: 'info',
  duration: 3000,
  className: 'my-class'
});

```

# API
| Option    | Description                                    | Value                   | Default  |
|-----------|------------------------------------------------|-------------------------|----------|
| message   | content of the toast                           |                         |          |
| type      | type of the toast                              | 'info' 'success' 'error'| 'info'   | 
| duration  | time before the toast vanishes, in millisecond |                         | 3000     |
| className | custom class name of the toast                 |                         |          |

# License
MIT