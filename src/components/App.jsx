import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "./Login";
import Header from "./Header";
import Home from "./Home";
import { useEffect } from "react";
import { getUserAuth } from "../action";
import { connect } from "react-redux";
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
            <Login />
          </Route>
          <Route path="/feed">
            <Header />
            <Home />
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
