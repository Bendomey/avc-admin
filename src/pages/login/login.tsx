import * as React from "react";
import image from "../../assets/images/logo.png";
import background from "../../assets/images/background.jpg";
import { AuthContext } from "../../services/context";
import { useHistory } from "react-router-dom";
import cookieConfig from "../../services/cookie.config";
import { ApolloError, useMutation } from "@apollo/client";
import {
  LoginInputProps,
  LoginOutputProps,
} from "../../shared/interfaces/login";
import { LOGIN } from "../../services/graphql/mutations";
import { toaster } from "evergreen-ui";
import _ from "lodash";

const Login = () => {
  const [{ signIn }] = React.useContext(AuthContext);
  const { push } = useHistory();
  const [email, setEmail] = React.useState<string>("");
  const [password, setPassword] = React.useState<string>("");

  React.useEffect(() => {
    document.title = "Login Administrator - African Venture Counsel";
    cookieConfig.clearCipher();
  }, []);

  const [invokeLogin, { loading }] = useMutation<
    LoginOutputProps,
    LoginInputProps
  >(LOGIN);

  const HandleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    toaster.closeAll();

    invokeLogin({
      variables: {
        email,
        password,
      },
    })
      .then(async ({ data }) => {
        if (data) {
          await signIn(data?.loginAdmin);
          push("/");
        }
      })
      .catch((e: ApolloError) => {
        if (e?.graphQLErrors?.length > 0) {
          if (
            ["AdminNotFound", "PasswordIncorrect"].includes(
              e.graphQLErrors[0]?.message
            )
          ) {
            toaster.danger("Oops, your email address or password is incorrect");
          } else {
            toaster.danger(
              _.startCase(_.camelCase(e.graphQLErrors[0]?.message))
            );
          }
        }
      });
  };

  return (
    <React.Fragment>
      <div
        style={{
          backgroundImage: "url(" + background + ")",

          backgroundPosition: "center",
          backgroundSize: "100% 100%",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="min-h-screen bg-black bg-opacity-80 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
          <div className="mt-8 sm:mx-auto sm:w-full md:w-4/12">
            <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
              <div className="sm:mx-auto sm:w-full sm:max-w-md">
                <img className="mx-auto h-14 w-auto" src={image} alt="AVC" />
                <h2 className="mt-3 text-center text-3xl font-extrabold text-gray-900">
                  Sign in to your account
                </h2>
                <p className="mt-2 text-center text-sm text-gray-600 max-w">
                  Welcome Back Administrator
                </p>
              </div>
              <div className={"flex flex-col"}>
                <form onSubmit={HandleSubmit} className="space-y-4  mt-5">
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Email address
                    </label>
                    <div className="mt-1">
                      <input
                        id="email"
                        name="email"
                        type="email"
                        autoComplete="email"
                        required
                        placeholder={"Email here.."}
                        value={email}
                        onChange={(
                          event: React.ChangeEvent<HTMLInputElement>
                        ) => setEmail(event.target.value)}
                        className="appearance-none block w-full px-3  py-3 border border-gray-300 bg-gray-50 rounded-none shadow-sm placeholder-gray-400 focus:outline-none focus:ring-red-500 focus:border-red-500 sm:text-sm"
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="password"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Password
                    </label>
                    <div className="mt-1">
                      <input
                        id="password"
                        name="password"
                        type="password"
                        autoComplete="current-password"
                        required
                        placeholder={"Password here.."}
                        value={password}
                        onChange={(
                          event: React.ChangeEvent<HTMLInputElement>
                        ) => setPassword(event.target.value)}
                        className="appearance-none block w-full px-3 py-3 border border-gray-300 rounded-none bg-gray-50 shadow-sm placeholder-gray-400 focus:outline-none focus:ring-red-500 focus:border-red-500 sm:text-sm"
                      />
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <input
                        id="remember_me"
                        name="remember_me"
                        type="checkbox"
                        className="h-4 w-4 text-red-600 focus:ring-red-500 border-gray-300 rounded"
                      />
                      <label
                        htmlFor="remember_me"
                        className="ml-2 block text-sm text-gray-900"
                      >
                        Remember me
                      </label>
                    </div>

                    <div className="text-sm">
                      <button className="font-medium text-red-600 hover:text-red-500">
                        Forgot your password?
                      </button>
                    </div>
                  </div>

                  <div>
                    <button
                      type="submit"
                      disabled={loading}
                      className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
                    >
                      {loading ? "loading..." : "Sign in"}
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};
export default Login;
