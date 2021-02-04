import * as React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { CenterLoader } from "./components/atoms/loadingComponents";

const Login = React.lazy(() => import("./pages/login"));
const Layout = React.lazy(() => import("./shared/layout"));

function App() {
  return (
    <React.Fragment>
      <BrowserRouter>
        <React.Suspense fallback={CenterLoader()}>
          <Switch>
            <Route exact={true} component={Login} path={"/login"} />
            <Route exact={false} component={Layout} path={"/"} />
          </Switch>
        </React.Suspense>
      </BrowserRouter>
    </React.Fragment>
  );
}

export default App;
