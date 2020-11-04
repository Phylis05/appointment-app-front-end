import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.scss';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import App from './containers/App';
import rootReducer from './reducers/rootReducer';

const store = createStore(rootReducer, applyMiddleware(thunk));

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
);
// import React from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
// import { Provider } from 'react-redux';
// import { createStore, applyMiddleware } from 'redux';
// import { composeWithDevTools } from 'redux-devtools-extension';
// import thunk from 'redux-thunk';
// import rootReducer from './reducers';
// import Router from './components/Router';
// import { AUTHENTICATED } from './actions/index';
// // import 'bootstrap/dist/css/bootstrap.css';

// const store = createStore(
//   rootReducer,
//   composeWithDevTools(applyMiddleware(thunk)),
// );

// const user = localStorage.getItem('user');

// if (user) {
//   store.dispatch({
//     type: AUTHENTICATED,
//   });
// }

// ReactDOM.render(
//   <React.StrictMode>
//     <Provider store={store}>
//       <Router />
//     </Provider>
//   </React.StrictMode>,
//   document.getElementById('root'),
// );
// import React from 'react';
// import ReactDOM from 'react-dom';
// import { Provider } from 'react-redux';
// import store from './store';
// import './index.css';
// import App from './App';

// ReactDOM.render(
//   <React.StrictMode>
//     <Provider store={store}>
//       <App />
//     </Provider>
//   </React.StrictMode>,
//   document.getElementById('root'),
// );
