import React from "react";
import { RoutesComponent } from "./routes";
import { GlobalStyle } from "./styles/global";

export const App = () => {
  return (
    <div className="App">
     <GlobalStyle />
     <RoutesComponent />
    </div>
  );
};
