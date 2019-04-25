import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';




class Add extends Component {
    constructor(props) {
        super(props);
        this.state = {open: false, firstname:'', lastname:'', address:'', postcode:'', city:'', email:'', phone:''};
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

        addClient = () => {
            const newClient = {
                firstname: this.state.firstname,
                lastname: this.state.lastname,
                city: this.state.city,
                email: this.state.email,
                phone: this.state.phone
            }
             this.props.saveClient(newClient);
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
                    <DialogTitle id="form-dialog-title">New client</DialogTitle>
                    <DialogContent>
                        <TextField onChange={this.handleChange} autoFocus margin="dense" name="firstname" label="Firstname"  fullWidth/>
                        <TextField onChange={this.handleChange} margin="dense" name="lastname" label="Lastname"  fullWidth/>
                        <TextField onChange={this.handleChange} margin="dense" name="address" label="Address"  fullWidth/>
                        <TextField onChange={this.handleChange} margin="dense" name="postcode" label="Postcode"  fullWidth/>
                        <TextField onChange={this.handleChange} margin="dense" name="city" label="City"  fullWidth/>
                        <TextField onChange={this.handleChange} margin="dense" name="email" label="Email"  fullWidth/>
                        <TextField onChange={this.handleChange} margin="dense" name="phone" label="Phone"  fullWidth/>
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={this.handleClose} color="primary">
                        Cancel
                        </Button>
                        <Button onClick={this.addClient} color="primary">
                        Add
                        </Button>
                    </DialogActions>
                    </Dialog>
                        <Button variant="contained"  onClick={this.handleClickOpen} style={{margin:10}}>ADD CLIENT</Button>
            
            </div>
        );
    }
}

export default Add;





