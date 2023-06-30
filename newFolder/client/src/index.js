import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose} from 'redux'
import thunk from 'redux-thunk'


import App from './App';
import Reducers from './reducers'
// about applyMiddleware
// Creates a store enhancer that applies middleware to the dispatch method of the Redux store. This is handy for a variety of tasks, such as expressing asynchronous actions in a concise manner, or logging every action payload.



// Because middleware is potentially asynchronous, this should be the first store enhancer in the composition chain.

const store = createStore(Reducers, compose(applyMiddleware(thunk)))

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>

  <React.StrictMode>
    <App />
  </React.StrictMode>
  </Provider>,

);

