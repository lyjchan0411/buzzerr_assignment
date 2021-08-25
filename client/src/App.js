import { Switch, Route } from "react-router-dom";
import "./App.scss";
import ActivityTable from "./components/ActivityTable/ActivityTable";
import MainPage from "./pages/MainPage/MainPage";
import UserPost from "./pages/UserPost/UserPost";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/" exact render={(props) => <MainPage {...props} />} />
        <Route
          path="/user/:id"
          exact
          render={(props) => <UserPost {...props} />}
        />
        <Route path="/activities_table" exact>
          <ActivityTable />
        </Route>
      </Switch> 
    </div>
  );
}

export default App;
