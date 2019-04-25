import React, { Component } from 'react';
import ReactTable from 'react-table';
import 'react-table/react-table.css';
import Button from '@material-ui/core/Button';
import Add from './Add.js';

class Customers_List extends Component {
    constructor(props) {
        super(props);
        this.state = {customers: [], open: false}
        }

    componentDidMount() {
        this.loadCustomers();
        }
        
        loadCustomers = () => {
        fetch ('https://customerrest.herokuapp.com/api/customers')
        .then(response => response.json())
        .then (jsondata => this.setState({customers: jsondata.content}))
        .catch(err => console.error(err));
        }
    
        saveClient = (client) => {
            fetch('https://customerrest.herokuapp.com/api/customers',
            {method: 'POST', 
                headers: {'Content-Type': 'application/json'},
                  body: JSON.stringify(client)
                })
           
            .then(res => this.loadCustomers())
            .then(res => this.state({open: true}))
            .catch(err => console.error(err));
        }
    
        deleteClient = (clientLink) => {
            if(window.confirm('Are you sure?')){
            fetch(clientLink, {method:'DELETE'})
            .then(res => this.loadCustomers())
            .catch(err => console.error(err));
            }

        }
    
    render() {
       
        const columns = [
            {
            Header: 'First name',
            accessor: 'firstname'
            },
            {
            Header: 'Last name',
            accessor: 'lastname'
            },
            {
            Header: 'City',
            accessor: 'city'
            },
            {
            Header: 'Email',
            accessor: 'email'
            },
            {
                Header: 'Phone',
                accessor: 'phone'
            },
            {
                Header: '',
                accessor: 'links[0].href',
                Cell: ({value}) => <Button color="primary" onClick={() => this.deleteClient(value)}>Delete</Button>
            }

            ];
       
       
        return (
            <div>
             <Add saveClient={this.saveClient} />   
              <ReactTable data={this.state.customers} columns={columns} filterable={true} />

            </div>
        );
    }
}

export default Customers_List;