import React, { Component } from 'react';
import ReactTable from 'react-table';
import 'react-table/react-table.css';
import moment from 'moment';
import Button from '@material-ui/core/Button';

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
    
    // training will be deleted based on the ID caught from the /gettrainings json data
    deleteTraining = (id) => {
        if(window.confirm('Are you sure?')){
        fetch('https://customerrest.herokuapp.com/api/trainings/'+id,
         {method:'DELETE'})
        .then(res => this.loadTraining())
        .catch(err => console.error(err));
        }
    }
 
    render() 

    {

        
        const columns = [
           
           
            {
                Header: 'Date',
                accessor: 'date',
                Cell: row => <span>{moment.utc(row.value).format('DD.MM.YYYY hh:mm a')}</span>
                
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
                {
                    Header: '',
                    accessor: 'id',
                    Cell: ({value}) => <Button color="primary" onClick={() => this.deleteTraining(value)}>Delete</Button>
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

