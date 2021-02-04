import * as React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import { CenterLoader } from "./components/atoms/loadingComponents";

const Login = React.lazy(() => import("./pages/login"));
// const Layout = React.lazy(() => import("./shared/layout"));

function App() {
  return (
    <React.Fragment>
      <div className={"h-screen w-screen bg-background-300"}>
        <BrowserRouter>
          <React.Suspense fallback={CenterLoader()}>
            <Route exact={true} component={Login} path={"/login"} />
            {/* <Route exact={false} component={Layout} path={"/"} /> */}
          </React.Suspense>
        </BrowserRouter>
      </div>
    </React.Fragment>
  );
}

export default App;
