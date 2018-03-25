console.log('minimal react webpack babel setup');

import React from 'react';
import ReactDOM from 'react-dom';

const title = 'Ali Mavrakis';

ReactDOM.render(
  <div>{title}</div>,
  document.getElementById('app')
);

module.hot.accept();
