import { useEffect } from "react";
import { connect } from "react-redux";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import { getUserAuth } from "../action";
import Header from "./Header";
import HiringManager from "./HiringManager";
import Home from "./Home";
import Recruiter from "./Recruiter";
import User from "./user page/User";

function App(props) {
  useEffect(() => {
    props.getUserAuth();
  }, []);

  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/">
            <Header />
            <Home />
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
          <Route path="/user">
            <Header />
            <User />
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
