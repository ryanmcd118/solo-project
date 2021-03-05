import React from 'react';
import { render } from 'react-dom';
// import { BrowserRouter } from 'react-router-dom';
import App from './App';

// uncomment so that webpack can bundle styles
// import styles from './styles.css';

render(
  <App />,
  document.getElementById('root')
);

// ReactDOM.render((
//   <BrowserRouter>
//     <App />
//   </BrowserRouter>
// ), document.getElementById('root'));