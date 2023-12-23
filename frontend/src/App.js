import React from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Home from './pages/Home';
import ProductDetail from './components/ProductDetail';

const App = () => {
  return (
    <Router>
        <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/products/:uid" component={ProductDetail} />
        </Routes>
    </Router>
  );
};

export default App;