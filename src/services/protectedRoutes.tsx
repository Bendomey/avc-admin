import { Route, Redirect } from "react-router-dom";
import Auth from "./cookie.config";

const PrivateRoute = ({
  component: Component,
  path,
  name,
  exact,
}: {
  component: any;
  path: string;
  name: string;
  exact: boolean;
}) => {
  return (
    <Route
      path={path}
      exact={exact}
      name={name}
      render={(props: any) => {
        let token = Auth.getCipher();
        if (!token) {
          return <Redirect to={{ pathname: "/login" }} />;
        }
        return <Component />;
      }}
    />
  );
};

export default PrivateRoute;
