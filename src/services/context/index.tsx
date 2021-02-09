import React, {
  Fragment,
  lazy,
  Suspense,
  useReducer,
  useEffect,
  useMemo,
  createContext,
} from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { CenterLoader } from "../../components/atoms/loadingComponents";
import ClientApollo from "../graphql";
import Auth from "../cookie.config";

const Login = lazy(() => import("../../pages/login"));
const Layout = lazy(() => import("../../shared/layout"));

interface ContextState {
  isLoading: boolean;
  isSignout: boolean;
  userToken: object;
}

interface authContextControllerProps {
  signIn: Function;
  signOut: Function;
}

export const AuthContext = createContext(
  [] as (ContextState | authContextControllerProps | any)[]
);

const Manipulator = (prevState: any, action: any) => {
  switch (action.type) {
    case "RESTORE_TOKEN":
      return {
        ...prevState,
        userToken: action.userToken,
        isLoading: false,
      };
    case "SIGN_IN":
      return {
        ...prevState,
        isSignout: false,
        userToken: action.userToken,
      };
    case "SIGN_OUT":
      return {
        ...prevState,
        isLoading: false,
        userToken: null,
        isSignout: true,
      };
    default:
      return prevState;
  }
};

const SettingsConfig = ({ state }: any) => {
  return (
    <Fragment>
      <BrowserRouter>
        <Suspense fallback={CenterLoader()}>
          <Switch>
            <Route exact={true} component={Login} path={"/login"} />
            <Route exact={false} component={Layout} path={"/"} />
          </Switch>
        </Suspense>
      </BrowserRouter>
    </Fragment>
  );
};

function AppNavigator() {
  const [state, dispatch] = useReducer(Manipulator, {
    isLoading: true,
    isSignout: false,
    userToken: null,
  });

  useEffect(() => {
    let userToken: string | null = Auth.getCipher();
    let data;
    if (userToken) data = JSON.parse(userToken);
    else data = null;
    dispatch({ type: "RESTORE_TOKEN", userToken: data });
  }, []);

  const authContextController = useMemo(
    () => ({
      signIn: async (token: object): Promise<void> => {
        Auth.setCipher(JSON.stringify(token));
        dispatch({ type: "SIGN_IN", userToken: token });
      },
      signOut: (): void => {
        Auth.clearCipher();
        dispatch({ type: "SIGN_OUT" });
      },
    }),
    []
  );

  return (
    <Fragment>
      {state.isLoading ? (
        <CenterLoader />
      ) : (
        <Fragment>
          <AuthContext.Provider value={[authContextController, state]}>
            <ClientApollo>
              <SettingsConfig state={state} />
            </ClientApollo>
          </AuthContext.Provider>
        </Fragment>
      )}
    </Fragment>
  );
}

export default AppNavigator;
