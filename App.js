import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore, compose, applyMiddleware } from 'redux';
import  rootReducer  from './reducer/rootReducer';
import thunk from 'redux-thunk';
import Layout from './component/Layout'
import logo from './logo.svg';
import './App.css';

class App extends Component {



  render() {
    const initialReducer = {};
    const middleware = [thunk];
    const enhancer = []
    const store = createStore(
      rootReducer,
      initialReducer,
      compose(applyMiddleware(...middleware), ...enhancer)
    
    );
    return (
      <Provider store={store}>
       
          <div className="App">
            <header className="App-header">
              <img src={logo} className="App-logo" alt="logo" />
              <h1 className="App-title">Welcome to React</h1>
            </header>
            <p className="App-intro">
              To get started, edit <code>src/App.js</code> and save to reload.
        </p>

         
          <BrowserRouter>
          <Layout/>
        </BrowserRouter>
        </div>
      </Provider>



    );
  }
}

export default App;
