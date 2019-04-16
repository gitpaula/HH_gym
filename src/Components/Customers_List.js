import React, { Component } from 'react';
import ReactTable from 'react-table';
import 'react-table/react-table.css';

class Customers_List extends Component {
    constructor(props) {
        super(props);
        this.state = {customers: []}
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
            Header: 'Adress',
            accessor: 'streetaddress'
            },
            {
            Header: 'Post code',
            accessor: 'postcode'
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
            }
            ];
       
       
        return (
            <div>

              <ReactTable data={this.state.customers} columns={columns} filterable={true} />

            </div>
        );
    }
}

export default Customers_List;