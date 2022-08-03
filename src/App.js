import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "./assets/style/main.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams,
  BrowserRouter,
} from "react-router-dom";
import SignUp from "./component/signup";
import SignIn from "./component/signin";
import Dashboard from "./component/Dashboard";
import Sidebar from "./component/Sidebar";
function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path="/" children={<Sidebar />}></Route>
          <Route exact path="/login" children={<SignIn />}></Route>
          <Route exact path="/dashboard" children={<Dashboard />}></Route>
          {/* <Route path="/data/:id" children={<DataInfo />}></Route> */}
        </Switch>
      </Router>
      {/* 
      <Sidebar /> */}
    </div>
  );
}

export default App;
