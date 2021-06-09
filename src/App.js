import React from 'react';
import {BrowserRouter,Switch,Route} from "react-router-dom";
import Home from './components/Home';
import CustomInput from './components/Custom-Input';
import ManualInput from './components/Manual-Input';

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" render={() => <Home />} />
        <Route exact path="/custom-input" render={() => <CustomInput />} />
        <Route exact path="/manual-input" render={() => <ManualInput />} />
      </Switch>
    </BrowserRouter>
  )
}

export default App;
