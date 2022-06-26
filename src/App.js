import React, { useRef, useEffect } from 'react';
import { useLocation, Switch } from 'react-router-dom';
import AppRoute from './utils/AppRoute';
import ScrollReveal from './utils/ScrollReveal';
import ReactGA from 'react-ga';

// Style
import './App.css'

// Layouts
import LayoutDefault from './layouts/LayoutDefault';

// Views 
import Home from './views/Home';
import Progress from './views/Progress'
import Curriculum from './views/Curriculum'
import Error from './views/Error'
import Searcher from './views/Searcher';

// Initialize Google Analytics
ReactGA.initialize(process.env.REACT_APP_GA_CODE);

const trackPage = page => {
  ReactGA.set({ page });
  ReactGA.pageview(page);
};

const App = () => {
  const childRef = useRef();
  let location = useLocation();

  useEffect(() => {
    const page = location.pathname;
    document.body.classList.add('is-loaded')
    childRef.current.init();
    trackPage(page);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location]);

  return (
    <ScrollReveal
      ref={childRef}
      children={() => (
        <Switch>
          <AppRoute exact path="/" component={Home} layout={LayoutDefault} />
          <AppRoute exact path="/progress" component={Progress} layout={LayoutDefault} />
          <AppRoute exact path="/curriculum" component={Curriculum} layout={LayoutDefault} /> 
          <AppRoute excat path="/searcher" component={Searcher} layout={LayoutDefault}/>
          <AppRoute path="*" component={Error} layout={LayoutDefault} />
        </Switch>
      )} />
  );
}

export default App;