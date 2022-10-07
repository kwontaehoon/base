import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

import { createStore } from 'redux'
import { Provider, useSeletor, useDispatch, connenct} from 'react-redux'

const reducer = (state, action)=>{
  console.log('state: ', state);
  console.log('action: ', action);
  

  if(state === undefined){ 
    return {
      number: 1,
    }
  }

  const newState = {...state}

  switch(action.type){
    case 'PLUS' : console.log('aa'); newState.number++; return newState;
  }
  
  
  // if(action.type === 'PLUS'){
  //   newState.number++;
  // }
  // return newState;
}
const store = createStore(reducer);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);

