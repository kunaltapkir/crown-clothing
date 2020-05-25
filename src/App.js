import React from "react";
import "./App.css";
import { Route, Switch } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePageComponent";
import ShopPage from "./pages/Shop/ShopComponent";
import Header from "./components/Header/HeaderComponent";
import SignInAndSignUpPage from "./pages/SignIn-and-SignUp/SignIn-and-SignUp";

function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/shop" component={ShopPage} />
        <Route path="/signin" component={SignInAndSignUpPage} />
      </Switch>
    </div>
  );
}

export default App;
