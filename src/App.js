import React from 'react';
import './App.css';
import Footer from './View/Footer';
import User from './components/User-Info-Connect'
import Config from './components/Config-List-Connect'
import AddConfig from './components/AddConfig'

// import Store from './Store';

// import {setUser, setConfig, setConfigType} from './Store/Action';

// const unsubscribe = Store.subscribe(() => {
//   console.log('--------- Store change ---------')
//   console.log(Store.getState())
// })

// console.log(Store.getState());

// Store.dispatch(setUser({name: 'jack', age: 23, account: 'admin'}))
// Store.dispatch(setConfig(['all']))
// Store.dispatch(setConfigType('admin'))

function App() {
  return (
    <div className="App">
      <User title="test" />
      <Config />
      <AddConfig />
      <Footer />
    </div>
  );
}

export default App;
