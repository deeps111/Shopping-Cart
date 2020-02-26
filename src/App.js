import "./App.css";
import Home from "./components/Home/Home";
import Search from "./components/Search/Search";
import Cart from "./components/Cart/Cart";
import React, { Suspense } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import AddToCart from "./components/AddToCart/AddToCart";
import Footer from "./components/Footer/Footer";

const App = () => {
      return (
        <div className="App">   
        <Router>         
            <header className="App-header">            
            <Link to="/"><h4 className = "title">Shopping Cart</h4></Link>
              <div className="container">
                <div className="first"> </div>
                <div>
                  <Search />
                </div>
                <Link to="/cart">
                  {" "}
                  <Cart />
                </Link>
              </div>              
          </header>            
            <Switch>
              <Suspense fallback={"Loading..."}>
                <Route exact path="/" component={Home}/>
                <Route path="/cart" component={AddToCart} />
                <Route path="/search" component={Search} />
              </Suspense>
            </Switch>
            <Footer/>
          </Router>
        </div>
      )
    }

export default App;
