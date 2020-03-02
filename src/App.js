import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import home from './components/home';
import 'bootstrap/dist/css/bootstrap.min.css';
function App() {
  return (
    <Router>
    <div>

    <Route path="/" component={home} />
    </div>
</Router>
    );

}

export default App;
