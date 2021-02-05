import * as React from "react";

export interface RouteType {
  path: string;
  exact: boolean;
  component: React.ReactNode;
  name: string;
}
