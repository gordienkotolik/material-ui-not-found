material-ui-not-found
=======================

## [Material-UI NotFound](https://github.com/gordienkotolik/material-ui-not-found)

NotFound component for React integrated with material-ui package.


## Requirements

- [React](https://reactjs.org/) 16.2.0 (not tested on other versions)
- [Material-UI](http://www.material-ui.com) 0.20.0 (not tested on other versions)


## Required Knowledge

I recommend that you get to know [React](http://facebook.github.io/react/) and [Material-UI](http://material-ui.com/).

## Installation
```sh
npm i material-ui-not-found --save
```
or
```sh
yarn add material-ui-not-found
```

## Usage
Once installed, just import and use the component:
```javascript
import React from 'react';
import {NotFound} from 'material-ui-not-found/NotFound';

const className = 'custom-class';
const style = {
  width: '50%',
};

export const Example = () => (
  <NotFound
    className={className}
    style={style}
    text={'Unknown resource.'}
  />
);

export default Example;
```


#### Properties
| Props        | Options           | Default  | Description |
| ------------- |-------------| -----| -------- |
| className | String | '' | Adds custom class to component wrapper.|
| style | Object | {} | Adds custom inline styles to component wrapper. |
| text | String | 'Page was not found.' | Replaces default text 'Page was not found.' with custom.|


## Contribute

1. [Submit an issue](https://github.com/gordienkotolik/material-ui-not-found/issues)
2. Fork the repository
3. Create a dedicated branch (never ever work in `master`)
4. The first time, run command: `yarn` into the directory
5. Fix bugs or implement features


## Future
- Add tests
- Add examples


## License
This project is licensed under the terms of the
[MIT license](https://github.com/gordienkotolik/material-ui-not-found/blob/master/LICENSE)