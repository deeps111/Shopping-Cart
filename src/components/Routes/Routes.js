import React ,{Suspense ,lazy} from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Search from "../Search/Search";
import AddToCart from "../AddToCart/AddToCart";


//import Home from "../Home/Home";
const Home = lazy(() => import ("../Home/Home"));
//import Users from "../Users/Users";


// This site has 3 pages, all of which are rendered
// dynamically in the browser (not server rendered).
//
// Although the page does not ever refresh, notice how
// React Router keeps the URL up to date as you navigate
// through the site. This preserves the browser history,
// making sure things like the back button and bookmarks
// work properly.
//npm install react-router-dom

 const Routes = () => {
  return (
    <Router>
      {/*<div>
        <ul>
          {/**
           React.lazy takes a function that will execute the dynamic import. It returns a component 
           that will run this function during its first rendering. The resulting promise status 
           is used by Suspense
           to render the fallback during the chunk download (pending Promise)
           to render the real Home/Users component once downloaded (resolved Promise)
           npm install react-promise-suspense
                  
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/cart">Cart</Link>
          </li>         
          <li>
            <Link to="/search">Search</Link>
          </li>         
                    
        </ul>       */}

        {/*
          A <Switch> looks through all its children <Route>
          elements and renders the first one whose path
          matches the current URL. Use a <Switch> any time
          you have multiple routes, but you want only one
          of them to render at a time
        */}
        <Switch>        
          <Suspense fallback={"Loading..."}>  
            <Route exact path="/" component={Home}/>
            <Route path="/cart" component={AddToCart}/>  
            <Route path="/search" component={Search}/>                          
          </Suspense>         
                      
        </Switch>
         </Router>
  );
}

export default Routes;


