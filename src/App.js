// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import itemReducer from './reducers/itemReducer'; // Update this import
import Home from './components/Home';
import ItemDetail from './components/ItemDetail';
import './App.css'; // Add your CSS file here

const store = createStore(itemReducer, applyMiddleware(thunk)); // Use itemReducer

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <div>
          <Routes>
            <Route path="/" exact component={Home} />
            <Route path="/item/:id" component={ItemDetail} />
          </Routes>
        </div>
      </Router>
    </Provider>
  );
};

export default App;

