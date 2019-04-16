import React, { Component } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Customers_List from './Components/Customers_List';
import Training_List from './Components/Training_List';


import './App.css';

class App extends Component {


  render() {


    return (
      <div className="App">
         <AppBar position="static">
        <Toolbar>
          
          <Typography variant="h6" color="inherit" >
            Gym Members
          </Typography>

        </Toolbar>
      </AppBar>

      <Customers_List/>
      <Training_List />

      </div>
    );
  }
}

export default App;
