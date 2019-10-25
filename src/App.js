import React from 'react';
import logo from './logo.svg';
import './App.css';
import Nav from './Components/nav'
import {HashRouter} from 'react-router-dom'
import routes from './routes'
import {Provider} from 'react-redux'
import store from './dux/store'


function App() {
  return (
  <Provider store={store}>
    <HashRouter>
    <div className="App">
      {routes}
      <Nav/>
    </div>
    </HashRouter>
    </Provider>
  );
}

export default App;
