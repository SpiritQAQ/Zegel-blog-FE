import * as React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Header from './header/Header'
import Index from '../pages/index/index'
import ArticalPage from '../pages/artical/index'

function About() {
  return (
    <div>
      <h2>
        About me
      </h2>
    </div>
  );
}

export default class BasicLayout extends React.PureComponent {
  render() {
    return (
      <Router>
        <div >
          <Header />
          {
            /*
              A <Switch> looks through all its children <Route>
              elements and renders the first one whose path
              matches the current URL. Use a <Switch> any time
              you have multiple routes, but you want only one
              of them to render at a time
            */
          }
          <Switch>
            <Route exact path="/" >
              <Index />
            </Route>
            <Route path="/about" >
              <About />
            </Route>
            <Route path="/artical" >
              <ArticalPage />
            </Route>
          </Switch>
        </div>
      </Router>
    )
  }
}