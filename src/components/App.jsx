import { useEffect } from "react";
import { connect } from "react-redux";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import { getUserAuth } from "../action";
import Header from "./Header";
import HiringManager from "./HiringManager";
import Home from "./Home";
import Login from "./Login";
import Recruiter from "./Recruiter";

function App(props) {
  useEffect(() => {
    props.getUserAuth();
  }, []);

  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/">
            <Login />
          </Route>
          <Route path="/feed">
            <Header />
            <Home />
          </Route>
          <Route path="/recruiter">
            <Header />
            <Recruiter />
          </Route>
          <Route path="/hiring-manager">
            <Header />
            <HiringManager />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {};
};

const mapDispatchToProps = (dispatch) => ({
  getUserAuth: () => dispatch(getUserAuth()),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
