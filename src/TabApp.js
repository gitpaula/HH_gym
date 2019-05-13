
import React, { Component, useState  } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Customers_List from './Components/Customers_List';
import Training_List from './Components/Training_List';
import Calendar from './Components/Calendar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import './App.css';
 

const TabApp = () => {
  
    const [value, setValue] = useState('one');


    const handleChange = (event, value) => {
      setValue(value);
      };
      

    return (

      <div className="App">
  
         
        <AppBar position="static">
        <Toolbar>
        
        
        <Typography variant="h6" color="inherit" >
            The Gym 
          </Typography>

          
        </Toolbar>

      </AppBar>


      <Tabs value={value} onChange={handleChange}>
                <Tab value="one" label="Clients" />
                <Tab value="two" label="Training" />
                <Tab value="three" label="Calendar" />
                </Tabs>


      {value === 'one' && <div>      <Customers_List /></div>}
      {value === 'two' && <div><Training_List /></div>}
      {value === 'three' && <div><Calendar /></div>}
           

      
      
      
        
      </div>

     );

  
}

export default TabApp;



