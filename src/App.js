import React,{useEffect, useState} from 'react';
import {BrowserRouter,Switch,Route, Redirect} from "react-router-dom";
import Home from './components/Home';
import Input from './components/Input';
import Result from './components/Result';
import Header from './components/Header';

const App = () => {
  const [isValid,setIsValid] = useState(false);
  const handleResult = () => {
    setIsValid(!isValid);
  }
  return (
    <>
    <BrowserRouter>
      <Header />
      <Switch>
        <Route exact path="/" render={() => <Home />} />
        <Route exact path="/custom-input" render={() => <Input title="Custom-Input" isCustom={true} handleResult={handleResult} />} />
        <Route exact path="/manual-input" render={() => <Input title="Manual-Input" isCustom={false} handleResult={handleResult} />} />
        <Route exact path="/result">
        {isValid ? <Result /> : <Redirect to="/" />}
        </Route>
      </Switch>
    </BrowserRouter>
    </>
  )
}

export default App;
