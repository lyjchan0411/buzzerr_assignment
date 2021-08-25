import { Switch, Route } from "react-router-dom";
import "./App.scss";
import Feed from "./components/Feed/Feed";
import UserPost from "./pages/UserPost/UserPost";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/" exact render={(props) => <Feed {...props} />} />
        <Route path="/:id" exact render={(props) => <UserPost {...props} />} />
      </Switch>
    </div>
  );
}

export default App;
