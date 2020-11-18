import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';

import Views from './views';
import Header from './components/Header';
import history from './history';

const App = () => {
  return (
    <div className="ui container" style={{ marginTop: 24 }}>
      <Router history={history}>
        <Header />
        <Switch>
          <Route path="/" exact component={Views.StreamList} />
          <Route path="/streams/new" exact component={Views.StreamCreate} />
          <Route path="/streams/edit/:id" exact component={Views.StreamEdit} />
          <Route
            path="/streams/delete/:id"
            exact
            component={Views.StreamDelete}
          />
          <Route path="/streams/:id" exact component={Views.StreamShow} />
        </Switch>
      </Router>
    </div>
  );
};

export default App;
