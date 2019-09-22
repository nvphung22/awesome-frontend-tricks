import React from 'react';
import { Switch, Route } from "react-router-dom";
import Home from './Home';
import StickySideBar from './StickySidebar';
import NotFound from './NotFound';

function App() {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/sticky-sidebar" component={StickySideBar} />
      {/* when none of the above match, <NoMatch> will be rendered */}
      <Route component={NotFound} />
    </Switch>
  );
}

export default App;
