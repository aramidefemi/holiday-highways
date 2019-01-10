import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom"; 
import AppLandingPage from "./pages/landing-page"; 
import AppSearchPage from "./pages/search"; 

const AppRouter = () => (
  <Router>
    <div className="body-wrap">
      <div id="st-container" className="st-container">
        <div className="st-pusher">
          <div className="st-content">
            <div className="st-content-inner">
              <Route path="/" exact component={AppLandingPage} /> 
              <Route path="/search"  component={AppSearchPage} /> 
            </div>
          </div>
        </div>
      </div>
    </div>
  </Router>
);

export default AppRouter;
