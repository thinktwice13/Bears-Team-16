import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import './App.css';

/* LAYOUT COMPONENTS */
import Header from "./layout/Header/Header";
import Footer from "./layout/Footer/Footer";
/* AUTH COMPONENTS */
import Login from "./auth/Login";
import Signup from "./auth/Signup";
/* OTHER COMPONENTS */
import Home from "./Home";
import LandingPage from "./LandingPage";

const App = () => (
    <Router>
        <div>
            <Header />
            <Route exact path="/" component={LandingPage} />
            <Route path="/login" component={Login} />
            <Route path="/signup" component={Signup} />
            <Footer />
        </div>
    </Router>
);

export default App;
