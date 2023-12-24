import React from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Home from './pages/Home';
import BasketDetail from './components/BasketDetail';
import AuthorizationLogin from './components/SignInForm';
import {Header} from "./components/Header";

const App = () => {
  return (
      <div>
            <Header />
            <Router>
                <Routes>
                    <Route exact path="/" element={<Home />} />
                    <Route exact path="/baskets/:uid" element={<BasketDetail />} />
                    <Route exact path="/login" element={<AuthorizationLogin />} />
                </Routes>
            </Router>
      </div>
  );
};

export default App;
