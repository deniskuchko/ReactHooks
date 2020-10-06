import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Header from "./Header/Header";
import SecondUseEffect from "./UseEffect/UseEffect";
import ThirdUseRef from "./UseRef/UseRef";
import FirstUseState from "./UseState.js/UseState";
import FifthUseCallback from "./UseCallback/UseCallback";
import FourthUseMemo from "./UseMemo/UseMemo";

import "./App.css";
import Main from "./common/Main";
import Alert from "./common/alert/Alert";
import { AlertProvider } from "./common/alert/AlertContext";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Switch>
          <Route path="/useState" render={() => <FirstUseState />} />
          <Route path="/useEffect" render={() => <SecondUseEffect />} />
          <Route path="/useRef" render={() => <ThirdUseRef />} />
          <Route path="/useMemo" render={() => <FourthUseMemo />} />
          <Route path="/useCallback" render={() => <FifthUseCallback />} />
        </Switch>
        <AlertProvider>
          <Main />
          <Alert />
        </AlertProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
