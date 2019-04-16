import React, { Component } from 'react';
import ReactTable from 'react-table';
import 'react-table/react-table.css';

class Training_List extends Component {
    
constructor(props) {
    super(props);
    this.state = {training: []}
    }

componentDidMount() {
    this.loadTraining();
    }
    
    loadTraining = () => {
    fetch ('https://customerrest.herokuapp.com/api/trainings')
    .then(response => response.json())
    .then (jsondata => this.setState({training: jsondata.content}))
    .catch(err => console.error(err));
    }

    
    render() {

        
        const columns = [
            {
            Header: 'Date',
            accessor: 'date'
            },
            {
            Header: 'Duration',
            accessor: 'duration'
            },
            {
            Header: 'Activity',
            accessor: 'activity'
            }
         
            ];
            
        
        return (
            <div>

                <ReactTable data={this.state.training} columns={columns} filterable={true} />

            </div>
        );
    }
}

export default Training_List;





   
   