import React, { Component } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Customers_List from './Components/Customers_List';
import Training_List from './Components/Training_List';
import Calendar from './Components/Calendar';
import { BrowserRouter, Route, Link } from "react-router-dom";
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import './App.css';

class App extends Component {


  render() {


    return (

    <BrowserRouter>
      <div className="App">
  
         
        <AppBar position="static">
        <Toolbar>
        
        
        <Typography variant="h6" color="inherit" >
            Gym Info 
          </Typography>

      <Tabs>

        <Tab label="Clients" component={Link} to="/clients" />
        <Tab label="Training" component={Link} to="/training" />
        <Tab label="Calendar" component={Link} to="/calendar" />
      </Tabs>

          
        </Toolbar>
      </AppBar>


      <Route exact path="/" component={App}/>
      <Route path="/training" component={Training_List}/>
      <Route path="/clients" component={Customers_List}/>
      <Route path="/calendar" component={Calendar}/>

      </div>

      </BrowserRouter>
      
            
    
     );

  }
}

export default App;

