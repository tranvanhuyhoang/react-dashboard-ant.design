import React, { lazy } from 'react';
import { Switch, BrowserRouter as Router } from 'react-router-dom';
import Route from './components/route';

//layout
const DefaultLayout = lazy(() =>import('./components/layout/defaultLayout'));

// pages
const ManageLesson = lazy(() =>import('./pages/manageLesson'));
const ManageStudents = lazy(() =>import('./pages/manageStudents'));


const routes = (
  <Router>
      <Switch>
        <Route
          path="/"
          exact
          component={ManageLesson}
          layout={DefaultLayout}
        />

        <Route
          path="/manage-students"
          exact
          component={ManageStudents}
          layout={DefaultLayout}
        />
      </Switch>
  </Router>
)


export default routes;