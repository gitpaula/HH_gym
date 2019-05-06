import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';




class Add_training extends Component {
    constructor(props) {
        super(props);
        this.state = {open: false, date:'', duration:'', activity:''};
        this.props= {customer:''}; //<-- This worked to transfer the link from Customers_List, but upon saving something broke in the training view. 
    }
    
        handleClickOpen = () => {
        this.setState({ open: true });
        };
        
        handleClose = () => {
        this.setState({ open: false });
        };
        
        handleChange = (event) => {
        this.setState({[event.target.name]: event.target.value });
        };

             
        addTraining = () => {
            const addedTraining = {
                date: this.state.date,
                duration: this.state.duration,
                activity: this.state.activity,
                customer: this.props.client.link 
            
            }
            this.props.newTraining(addedTraining);  
            this.handleClose();
        
        }

    render() {
        return (
            <div>
               <Dialog
         
                    open={this.state.open}
                    onClose={this.handleClose}
                    aria-labelledby="form-dialog-title"
                    >
                    <DialogTitle id="form-dialog-title">New training session</DialogTitle>
                    <DialogContent>
                        <TextField onChange={this.handleChange} autoFocus margin="dense" name="date" id="datetime-local"
                        type="datetime-local" label="Date"  fullWidth/>
                        <TextField onChange={this.handleChange} margin="dense" name="duration" label="Duration"  fullWidth/>
                        <TextField onChange={this.handleChange} margin="dense" name="activity" label="Activity"  fullWidth/>
                       
                                          </DialogContent>
                    <DialogActions>
                        <Button onClick={this.handleClose} color="primary">
                        Cancel
                        </Button>
                        <Button onClick={this.addTraining} color="primary">
                        Save
                        </Button>
                    </DialogActions>
                    </Dialog>
                        <Button color="primary"  onClick={this.handleClickOpen}>ADD TRAINING</Button>
                         </div>
        );
    }
}

export default Add_training;





