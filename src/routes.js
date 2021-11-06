import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Home from "./pages/Home";
import NoticeCreate from "./pages/Home/form";
import NoticeEdit from "./pages/Home/form";

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/create" component={NoticeCreate} />
      <Route path="/edit/:id" component={NoticeEdit} />
      <Route path="*" component={() => <h1>Page not found</h1>} />
    </Switch>
  </BrowserRouter>
);
export default Routes;
