import React from "react";
import {Route, Switch} from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import CountriesList from "./components/CountriesList/CountriesList";
import CountryDetails from "./components/CountryDetails/CountryDetails";
import Home from "./components/Home/Home";
import countries from "./countries.json";



class App extends React.Component {
  state = {
    countries: countries
  }
  
  
  render(){
    return(
      <div>
      <Navbar />
      <div>
         
         <Switch>
         <Route exact path="/" component={Home}/>
         <Route exact path="/:id" component={CountryDetails} />
         </Switch>
        
      </div>
       
      </div>
    )
  }
}

export default App;