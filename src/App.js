import React, { useState } from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import Home from "./components/Home";
import Input from "./components/Input";
import Result from "./components/Result";
import Header from "./components/Header";
import SuggestionPage from "./components/Suggestion";
import Analytics from "./components/Analytics/index";

const App = () => {
  const [isValid, setIsValid] = useState(false);
  const [suggestionPage, setSuggestionPage] = useState(false);
  const handleResult = () => {
    setIsValid(true);
    // setIsValid(!isValid);; -> If try to navigate from Analytics to Result to Input... Then, Onclicking calculate button, it will render homepage..
  };
  const handleSuggestion = () => {
    setSuggestionPage(true);
    // setSuggestionPage(!suggestionPage); -> If try to navigate from Analytics to Result to Suggestion... It will render homepage..
  };
  return (
    <>
      <BrowserRouter>
        <Header enableAnalytics={isValid} />
        <Switch>
          <Route exact path="/" render={() => <Home />} />
          <Route
            exact
            path="/custom-input"
            render={() => (
              <Input
                title="Custom-Input"
                isCustom={true}
                handleResult={handleResult}
              />
            )}
          />
          <Route
            exact
            path="/manual-input"
            render={() => (
              <Input
                title="Manual-Input"
                isCustom={false}
                handleResult={handleResult}
              />
            )}
          />
          <Route exact path="/result">
            {isValid ? (
              <Result handleSuggestion={handleSuggestion} />
            ) : (
              <Redirect to="/" />
            )}
          </Route>
          <Route exact path="/suggestion">
            {suggestionPage ? <SuggestionPage /> : <Redirect to="/" />}
          </Route>
          <Route exact path="/analytics">
            {isValid ? <Analytics /> : <Redirect to="/" />}
          </Route>
        </Switch>
      </BrowserRouter>
    </>
  );
};
export default App;
