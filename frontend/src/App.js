import React from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Home from './pages/Home';
import BasketDetail from './components/BasketDetail';

const App = () => {
  return (
    <Router>
        <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/baskets/:uid" element={<BasketDetail />} />
        </Routes>
    </Router>
  );
};

export default App;