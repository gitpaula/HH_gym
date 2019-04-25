import React, { Component } from 'react';
import ReactTable from 'react-table';
import 'react-table/react-table.css';
import Moment from 'react-moment';


class Training_List extends Component {
    
constructor(props) {
    super(props);
    this.state = {training: []}
    }

componentDidMount() {
    this.loadTraining();
    }
    
    loadTraining = () => {
    fetch ('https://customerrest.herokuapp.com/gettrainings', {method:'GET'})
    .then(response => response.json())
    .then (jsondata => this.setState({training: jsondata}))
    .catch(err => console.error(err));
    }

    
    render() {

        
        const columns = [
           
           
            {
                Header: 'Date',
                accessor: 'date',
            
             },
                {
                Header: 'Duration',
                accessor: 'duration'
                },
                {
                Header: 'Activity',
                accessor: 'activity'
                },
                {
                    Header: 'Client',
                    accessor: 'customer',
                    Cell: row => {
                        return (
                          <div>
                            <span>{row.row.customer.firstname}</span>
                            <span>{' '}</span>
                            <span>{row.row.customer.lastname}</span>
                          </div>
                        )
                      }
                    },

            ];
            
        
        return (
            <div>

                <ReactTable data={this.state.training} columns={columns} filterable={true} />

            </div>
        );
    }
}

export default Training_List;





   
   