import axios from "axios";
import React, { useEffect, useState } from "react";
import "./App.css";

import Home from "./components/Home";
import { Switch, Route } from "react-router-dom";

const App = () => {
  
  return (
    <Switch>
      <Route path="/" exact>
        <Home />
      </Route>
      
    </Switch>
  );
};

export default App;
