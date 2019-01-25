import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom"; 
import AppLandingPage from "./pages/landing"; 
import AppSearchPage from "./pages/search"; 
import AppProductDisplayPage from "./pages/product-display"; 
import PageTransition from "react-router-page-transition";
import { spring,AnimatedSwitch } from 'react-router-transition';

function mapStyles(styles) {
  return {
    opacity: styles.opacity,
    transform: `scale(${styles.scale})`,
  };
}

// wrap the `spring` helper to use a bouncy config
function bounce(val) {
  return spring(val, {
    stiffness: 330,
    damping: 22,
  });
}

// child matches will...
const bounceTransition = {
  // start in a transparent, upscaled state
  atEnter: {
    opacity: 0,
    scale: 1.2,
  },
  // leave in a transparent, downscaled state
  atLeave: {
    opacity: bounce(0),
    scale: bounce(0.8),
  },
  // and rest at an opaque, normally-scaled state
  atActive: {
    opacity: bounce(1),
    scale: bounce(1),
  },
};



const AppRouter = () => (
  <Router>
    <div className="body-wrap">
      <div id="st-container" className="st-container">
        <div className="st-pusher">
          <div className="st-content">
            <div className="st-content-inner">
            <AnimatedSwitch
    atEnter={bounceTransition.atEnter}
    atLeave={bounceTransition.atLeave}
    atActive={bounceTransition.atActive}
    mapStyles={mapStyles}
    className="route-wrapper"
    >
                <Route path="/" exact component={AppLandingPage} /> 
                <Route path="/search"  component={AppSearchPage} /> 
                <Route path="/product"  component={AppProductDisplayPage} /> 
         </AnimatedSwitch>
            </div>
          </div>
        </div>
      </div>
    </div>
  </Router>
);

export default AppRouter;
