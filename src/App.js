import React, { lazy, Suspense } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectAuthToken } from "./redux/auth/auth.selectors";

import CssBaseline from "@material-ui/core/CssBaseline";
import Container from "@material-ui/core/Container";

const HomePage = lazy(() => import("./pages/home/home.component"));
const LoginPage = lazy(() =>
  import("./pages/sign-in-sign-up/sign-in-sign-up.component")
);

function App({ token }) {
  return (
    <React.Fragment>
      <CssBaseline />
      <Container component="main" maxWidth="false" disableGutters>
        <Switch>
          <Suspense fallback={<div>Loading...</div>}>
            <Route path="/login" component={LoginPage} />

            <Route
              path="/"
              render={() => (token ? <HomePage /> : <Redirect to="/login" />)}
            />
          </Suspense>
        </Switch>
      </Container>
    </React.Fragment>
  );
}

const mapStateToProps = createStructuredSelector({
  token: selectAuthToken
});

export default connect(mapStateToProps)(App);
