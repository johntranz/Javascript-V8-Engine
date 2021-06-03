import "./App.css";
import { useEffect } from "react";
import Header from "./Header";
import Home from "./Home";
import Checkout from "./Checkout";
import Payment from "./Payment";
import Login from "./Login";
import Orders from "./Orders";
import { auth } from "./firebase";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { useStateValue } from "./StateProvider";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";

const promise = loadStripe(
  "pk_test_51IxUF3KKk7zLlcad8k8DE7fXIe2lz2NRgTriEEVDO4NDoufDW5NpcSuxuYTt0HRnwM7U6aT4xmqghpkpfHsz5Clx00Psd8v1S8"
);

function App() {
  const [{}, dispatch] = useStateValue();

  useEffect(() => {
    // Will only run once when the app component loads...
    auth.onAuthStateChanged((authUser) => {
      console.log("THE USER IS >>>>", authUser);

      if (authUser) {
        // The user just logged in /  the user was logged in
        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        // The user is logged out
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
  }, []);

  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/orders">
            <Header />
            <Orders />
          </Route>

          <Route path="/login">
            <Login />
          </Route>

          <Route path="/checkout">
            <Header />
            <Checkout />
          </Route>

          <Route path="/payment">
            <Header />
            <Elements stripe={promise}>
              <Payment />
            </Elements>
          </Route>

          <Route path="/">
            <Header />
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
